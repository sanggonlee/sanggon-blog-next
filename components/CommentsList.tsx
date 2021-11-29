import React from 'react';
import styled from 'styled-components';
import { PostComment } from '../lib/comments';
import { COLORS } from '../lib/styles';
import { formatDate } from '../lib/utils';

type Props = {
  comments: PostComment[];
};

export default function CommentsList({ comments }: Props) {
  return (
    <Wrapper>
      {comments.map(comment => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem 0;
`;

function Comment({ comment }: { comment: PostComment }) {
  return (
    <CommentWrapper>
      <Metadata>
        <Name>{comment.name}</Name>
        <Date>{formatDate(comment.date * 1000)}</Date>
      </Metadata>
      <Message>{comment.message}</Message>
    </CommentWrapper>
  );
}

const CommentWrapper = styled.div`
  background-color: ${COLORS.backgroundPrimary};
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

const Metadata = styled.div``;

const Name = styled.span`
  font-weight: bold;
  color: ${COLORS.primary};
`;

const Date = styled.span`
  color: darkgrey;
  padding-left: 2rem;
  font-size: 0.9rem;
`;

const Message = styled.div``;
