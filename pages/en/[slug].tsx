import LayoutMinimized from '../../components/LayoutMinimized';
import Post from '../../components/Post';
import { getComments, PostComment } from '../../lib/comments';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts';

type Props = {
  postData: PostData;
  comments: PostComment[];
};

export default function EnPost({ postData, comments }: Props) {
  return (
    <LayoutMinimized lang="en">
      <Post postData={postData} comments={comments} />
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
  const comments = getComments(postData.slug);
  return {
    props: {
      postData,
      comments,
    },
  };
}
