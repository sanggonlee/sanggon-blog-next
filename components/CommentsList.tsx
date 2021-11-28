import React from 'react';
import styled from 'styled-components';
import { PostComment } from '../lib/comments';
import { COLORS } from '../lib/styles';

type Props = {
  comments: PostComment[];
};

export default function CommentsList({ comments }: Props) {
  return (
    <div>
      {comments.map(comment => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
}

function Comment({ comment }: { comment: PostComment }) {
  return (
    <CommentWrapper>
      <Name>{comment.name}</Name>
      <Message>{comment.message}</Message>
    </CommentWrapper>
  );
}

const CommentWrapper = styled.div`
  background-color: ${COLORS.backgroundPrimary};
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

const Name = styled.div`
  font-weight: bold;
  color: ${COLORS.primary};
`;

const Message = styled.div``;
