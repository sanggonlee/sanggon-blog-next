import styled from 'styled-components';
import { MDXRemote } from 'next-mdx-remote';
import Comments from './Comments';
import StarRating from './StarRating';

export default function KrPost({ postData }) {
  const { content } = postData;
  return (
    <Wrapper>
      <Title>{postData.title}</Title>
      <Date>{postData.date}</Date>
      <Content>
        <MDXRemote {...content} components={{ StarRating }}></MDXRemote>
      </Content>
      <Comments />
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
