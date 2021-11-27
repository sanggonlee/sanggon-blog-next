import fs from 'fs';
import yaml from 'js-yaml';
import { join } from 'path';

const commentsDirectory = join(process.cwd(), '_data/comments');

export interface PostComment {
  _id: string;
  name: string;
  date: number;
  message: string;
  slug: string;
  //messageHtml?: string;
}

export function getComments(slug: string): PostComment[] {
  const rootDir = join(commentsDirectory, slug);
  if (!fs.existsSync(rootDir)) {
    return [];
  }
  return fs
    .readdirSync(rootDir)
    .map<PostComment | null>((fileName: string) => {
      const filePath = join(rootDir, fileName);
      try {
        return yaml.load(fs.readFileSync(filePath, 'utf8')) as PostComment;
      } catch (e) {
        console.error(`Error parsing blog comment ${filePath}: ${e.message}`);
        return null;
      }
    })
    .filter(Boolean);
}
