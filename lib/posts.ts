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
  tags: string[];
};

export type PostData = PostMetadata & {
  slug: string;
  content: {
    compiledSource: string;
  };
};

export async function getPostData(
  slug: string,
  params: PostFetchParams,
): Promise<PostData> {
  const matterResult = getPostMatterResult(slug, params);

  const { title, date, category, tags } = matterResult.data;
  const content = await serialize(matterResult.content);

  // Combine the data with the id
  return {
    slug,
    title,
    date,
    category,
    tags,
    content,
  };
}

export function getPostMetadata(
  slug: string,
  params: PostFetchParams,
): PostMetadata {
  const matterResult = getPostMatterResult(slug, params);
  const { title, date, category, tags = [] } = matterResult.data;
  return { title, date, category, tags };
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

export type PostItemData = {
  slug: string;
  path: string;
  title: string;
  date: string;
  tags: string[];
};

export function getPostItems(params: PostFetchParams): PostItemData[] {
  const { lang } = params;
  if (!lang) {
    throw new Error('getPostItems | lang is required');
  }

  const fileNames = fs.readdirSync(getPostDirectory({ lang }));
  return fileNames
    .map(fileName => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const { title, date, category, tags } = getPostMetadata(slug, { lang });
      return {
        slug,
        title,
        date,
        category,
        tags,
        path: `/${lang}/${slug}`,
      };
    })
    .filter(({ category }) => !params.category || category === params.category)
    .sort(byDescendingDate);
}
