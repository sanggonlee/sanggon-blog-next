import NextHead from 'next/head';

export const siteTitle = `Sang-gon's blog`;

export default function Head() {
  return (
    <NextHead>
      <link rel="icon" href="/favicon.ico" />
      <title>{siteTitle}</title>
      <meta
        name="description"
        content="Sang-gon's blog on software development articles, short stories, thoughts, etc"
      />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle,
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </NextHead>
  );
}
