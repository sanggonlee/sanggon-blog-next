import styled from 'styled-components';
import {
  faStar as faSolidStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faStar as faEmptyStar,
  IconDefinition,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const starIcons: Record<'empty' | 'half' | 'full', IconDefinition> = {
  empty: faEmptyStar,
  half: faStarHalfAlt,
  full: faSolidStar,
};

type Props = {
  rating?: number;
  size?: number;
};

export default function StarRating({ rating, size = 18 }: Props) {
  if (!rating || !size) {
    console.error('StarRating | rating and size props are required');
    return null;
  }

  if (rating < 0 || rating > 5) {
    console.error('StarRating | rating must be in [0,5]');
    return null;
  }

  return (
    <Wrapper
      style={{
        '--size': size + 'px',
      }}
    >
      {generateStars(rating).map((star, i) => (
        <FontAwesomeIcon key={i} icon={starIcons[star]} />
      ))}
    </Wrapper>
  );
}

function generateStars(rating: number): string[] {
  let stars: string[] = [];
  let remaining = rating;
  for (let i = 0; i < 5; i++) {
    let star;
    if (remaining >= 1) {
      star = 'full';
    } else if (remaining > 0) {
      star = 'half';
    } else {
      star = 'empty';
    }
    stars = [...stars, star];
    remaining--;
  }

  return stars;
}

const Wrapper = styled.span`
  display: flex;
  color: orange;
  height: var(--size);
`;
