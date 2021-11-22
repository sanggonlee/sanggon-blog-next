import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import { getPostItems } from '../../lib/posts';
import { enNavigationLinks } from '../../lib/navigation';

export default function EnHome({ postItems }) {
  return (
    <Layout lang="en" navigationLinks={enNavigationLinks}>
      <PostList postItems={postItems} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      postItems: getPostItems({ lang: 'en' }),
    },
  };
}
