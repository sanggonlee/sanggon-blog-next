import Layout from '../../components/Layout';
import ReviewList from '../../components/ReviewList';
import { krNavigationLinks } from '../../lib/navigation';

const reviews = [
  {
    title: 'Bokko Toast & Dalgona Latte (JJIN Toast)',
    location: '792 Bathurst St, Toronto, ON',
    rating: 4,
    text: `기대했던 맛이었고 그래서 맛있었다. 옆구리가 자꾸 터지는거랑 토스트 치고 좀 비싸다는 점만 빼면.. 캐나다에서 먹을수 있다는것만으로도 감사감사. 달고나 라떼는 생각보다 안달아서 좋았음.
      집근처에 있었으면 자주 사먹었을듯.`,
  },
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
