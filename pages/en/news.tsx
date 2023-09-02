import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import { enNavigationLinks } from '../../lib/navigation';
import { getPostItems } from '../../lib/posts';

export default function EnNews({ postItems }) {
  return (
    <Layout lang="en" navigationLinks={enNavigationLinks}>
      <PostList postItems={postItems} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      postItems: await getPostItems({ lang: 'en', category: 'news' }),
    },
  };
}
