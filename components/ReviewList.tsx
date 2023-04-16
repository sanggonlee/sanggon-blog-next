import styled from 'styled-components';
import StarRating from './StarRating';
import { byDescendingDate } from '../lib/utils';

type ReviewData = {
  title: string;
  author?: string;
  location?: string;
  poster?: string;
  date?: string;
  rating?: number;
  text: string;
};

type Props = {
  reviews: ReviewData[];
};

export default function ReviewList({ reviews }: Props) {
  return (
    <Wrapper>
      {[...reviews]
        .sort(byDescendingDate)
        .map((review: ReviewData, index: number) => (
          <ReviewItem key={index} {...review} />
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

function ReviewItem({
  title,
  author,
  location,
  date,
  poster,
  rating,
  text,
}: ReviewData) {
  return (
    <ReviewItemWrapper>
      {poster && (
        <Poster>
          <img src={poster} alt={title} loading="lazy" />
        </Poster>
      )}
      <div>
        <Title>{title}</Title>
        {author && <Author>{author}</Author>}
        {location && <Location>{location}</Location>}
        <Date>{date}</Date>
        {rating && (
          <StarRatingWrapper>
            <StarRating rating={rating} />
          </StarRatingWrapper>
        )}
        <Text>
          {text.split('\n').map(((t, i) => (
            <Line key={i}>{t}</Line>
          )))}
        </Text>
      </div>
    </ReviewItemWrapper>
  );
}

const ReviewItemWrapper = styled.div`
  display: flex;
  margin: 2rem 0;
`;

const Title = styled.strong``;
const Author = styled.div``;
const Location = styled.div``;
const Date = styled.div``;

const Poster = styled.div`
  flex: 0 0 8rem;
  min-height: 12.5rem;
  margin-right: 1rem;
`;

const StarRatingWrapper = styled.div`
  padding: 0.5rem 0;
  margin-left: -0.2rem;
`;

const Text = styled.p`
  margin-block-start: 1rem;
`;

const Line = styled.p`
  margin-block-start: 0rem;
  margin-block-end: 0rem;
`;
