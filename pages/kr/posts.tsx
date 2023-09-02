import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import { krNavigationLinks } from '../../lib/navigation';
import { getPostItems } from '../../lib/posts';

export default function KrPosts({ postItems }) {
  return (
    <Layout navigationLinks={krNavigationLinks}>
      <PostList postItems={postItems} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      postItems: await getPostItems({ lang: 'kr', category: 'posts' }),
    },
  };
}
