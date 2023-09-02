import styled from 'styled-components';
import { MDXRemote } from 'next-mdx-remote';
import CaptionedImage from './CaptionedImage';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';
import StarRating from './StarRating';
import { COLORS } from '../lib/styles';

export default function Post({ postData, comments }) {
  const { title, date, content, slug } = postData;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Content>
        <MDXRemote {...content} components={{ CaptionedImage, StarRating }}></MDXRemote>
      </Content>
      <Divider />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
`;

const Title = styled.h2``;

const Date = styled.p`
  color: darkgrey;
`;

const Content = styled.div`
  padding: 2rem 0;
`;

const Divider = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  border-top: 0.1rem solid ${COLORS.primary};
`;
