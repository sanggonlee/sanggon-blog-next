import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { Language } from './types';
import { byDescendingDate } from './utils';

const postsDirectory = path.join(process.cwd(), 'posts');

type PostFetchParams = {
  lang?: Language;
  category?: string;
  props?: {
    preview?: boolean;
    content?: boolean;
  };
};

export function getAllPostIds(params: PostFetchParams) {
  const fileNames = fs.readdirSync(getPostDirectory(params));
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.mdx?$/, ''),
      },
    };
  });
}

export type PostMetadata = {
  title: string;
  date: string;
  category: string;
  hidden?: boolean;
  tags: string[];
};

export type PostData = PostMetadata & {
  slug: string;
  preview?: string;
  content?: {
    compiledSource: string;
  };
};

export async function getPostData(
  slug: string,
  params: PostFetchParams,
): Promise<PostData> {
  const matterResult = getPostMatterResult(slug, params);

  const { title, date, category, hidden = false, tags } = matterResult.data;
  const preview = params.props?.preview ? matterResult.content.substring(0, 300) : null;
  const content = params.props?.content ? await serialize(matterResult.content) : null;

  // Combine the data with the id
  return {
    slug,
    title,
    date,
    category,
    tags,
    content,
    preview,
    hidden,
  };
}

function getPostMatterResult(
  slug: string,
  params: PostFetchParams,
): matter.GrayMatterFile<string> {
  const fullPath = path.join(getPostDirectory(params), `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  return matter(fileContents);
}

function getPostDirectory({ lang }: PostFetchParams) {
  return path.join(postsDirectory, lang ?? '');
}

export type PostItemData = PostData & {
  path: string;
};
export async function getPostItems(params: PostFetchParams): Promise<PostData[]> {
  const { lang } = params;
  if (!lang) {
    throw new Error('getPostItems | lang is required');
  }

  const fileNames = fs.readdirSync(getPostDirectory({ lang }));
  const items = await Promise.all(fileNames
    .map(async fileName => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const { title, date, category, tags, hidden, preview } = await getPostData(slug, { lang, props: { preview: true } });
      return {
        slug,
        title,
        date,
        category,
        tags,
        hidden,
        preview,
        path: `/${lang}/${slug}`,
      };
    }));
  return items
    .filter(({ hidden }) => !hidden)
    .filter(({ category }) => !params.category || category === params.category)
    .sort(byDescendingDate);
}
