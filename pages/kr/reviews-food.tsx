import Layout from '../../components/Layout';
import ReviewList from '../../components/ReviewList';
import { krNavigationLinks } from '../../lib/navigation';

const reviews = [
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
