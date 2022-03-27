import Layout from '../../components/Layout';
import ReviewList from '../../components/ReviewList';
import { krNavigationLinks } from '../../lib/navigation';

const reviews = [
  {
    title: 'Hamachi Nabe (You Don Ya)',
    location: '108 Dundas St W, Toronto, ON',
    rating: 3.5,
    text: `그런대로 맛있었음. 달군 냄비에 밥과 하마치 사시미를 올린 다음에 달짝지근한 소스를 끼얹어서 먹는다. 물론 사시미는 얼마 안가서 바로 익는데 밥과의 조화가 썩 훌륭한 느낌은 아니었다.`,
  },
  {
    title: 'Donkotsue Ramen (Ikkousha Ramen)',
    location: '249 Queen St W, Toronto, ON',
    rating: 4.5,
    text: `일본의 이치랑 라멘을 생각나게 함. 뫄이쩡`,
  },
];

export default function KrReviewsFood() {
  return (
    <Layout navigationLinks={krNavigationLinks}>
      <ReviewList reviews={reviews} />
    </Layout>
  );
}
