import styled from 'styled-components';
import { MDXRemote } from 'next-mdx-remote';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';
import StarRating from './StarRating';

export default function Post({ postData, comments }) {
  const { content, slug } = postData;
  return (
    <Wrapper>
      <Title>{postData.title}</Title>
      <Date>{postData.date}</Date>
      <Content>
        <MDXRemote {...content} components={{ StarRating }}></MDXRemote>
      </Content>
      <CommentForm pageSlug={slug} />
      <CommentsList comments={comments} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 1rem;
`;

const Title = styled.h2``;

const Date = styled.p`
  color: darkgrey;
`;

const Content = styled.div`
  padding: 2rem 0;
`;
