import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import { enNavigationLinks } from '../../lib/navigation';
import { getPostItems } from '../../lib/posts';

export default function EnOthers({ postItems }) {
  return (
    <Layout lang="en" navigationLinks={enNavigationLinks}>
      <PostList postItems={postItems} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      postItems: getPostItems({ lang: 'en', category: 'others' }),
    },
  };
}
