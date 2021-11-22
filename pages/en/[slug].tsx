import LayoutMinimized from '../../components/LayoutMinimized';
import Post from '../../components/Post';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function EnPost({ postData }) {
  return (
    <LayoutMinimized lang="en">
      <Post postData={postData} />
    </LayoutMinimized>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds({ lang: 'en' });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug, { lang: 'en' });
  return {
    props: {
      postData,
    },
  };
}
