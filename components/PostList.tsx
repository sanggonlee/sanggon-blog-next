import styled from 'styled-components';
import Link from 'next/link';
import { PostItemData } from '../lib/posts';
import { COLORS } from '../lib/styles';

type Props = {
  postItems: PostItemData[];
};

export default function PostList({ postItems }: Props) {
  return (
    <Wrapper>
      {postItems.map((postItem, index) => (
        <PostItem key={index} {...postItem} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

type PostItemProps = PostItemData;

function PostItem({ title, date, tags, path, preview }: PostItemProps) {
  return (
    <Link href={path} passHref>
      <ItemWrapper>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Preview>{preview}</Preview>
        <Tags>
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </Tags>
      </ItemWrapper>
    </Link>
  );
}

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.backgroundPrimary};
  margin: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0.2rem;
    height: 100%;
    background-color: deeppink;
    transform: translate3d(0, -100%, 0);
    transition: transform 0.5s;
  }

  &:hover::after {
    transform: translate3d(0, 0, 0);
  }
`;

const Title = styled.h3``;

const Date = styled.div`
  color: darkgrey;
`;

const Preview = styled.div`
  width: 100%;
  padding: 1rem 0 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Tags = styled.div`
  padding: 0.5rem 0;
  color: ${COLORS.primary};
  font-style: italic;

  & > span {
    &::before {
      content: '#';
    }
    &::after {
      content: ' ';
    }
  }
`;
