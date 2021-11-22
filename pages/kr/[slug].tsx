import LayoutMinimized from '../../components/LayoutMinimized';
import Post from '../../components/Post';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function KrPost({ postData }) {
  return (
    <LayoutMinimized>
      <Post postData={postData} />
    </LayoutMinimized>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds({ lang: 'kr' });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug, { lang: 'kr' });
  return {
    props: {
      postData,
    },
  };
}
