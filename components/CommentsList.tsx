import { PostComment } from '../lib/comments';

type Props = {
  comments: PostComment[];
};

export default function CommentsList({ comments }: Props) {
  return (
    <div>
      {comments.map(comment => (
        <div key={comment._id}>
          <div>name: {comment.name}</div>
          <div>message: {comment.message}</div>
        </div>
      ))}
    </div>
  );
}
