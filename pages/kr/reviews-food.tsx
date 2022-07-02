import Layout from '../../components/Layout';
import ReviewList from '../../components/ReviewList';
import { krNavigationLinks } from '../../lib/navigation';

const reviews = [
  {
    title: '마라탕 (Bone Soup Malatang)',
    location: '5320 Yonge St, North York',
    rating: 3.5,
    text: `처음 먹어본 마라탕! 꽤 괜찮았다. 아주 가끔씩 먹을듯.`,
  },
  {
    title: 'P.E.I Lobster Mac and Cheese & Maine XL Oyster (Oyster Boy)',
    location: '872 Queen St W, Toronto',
    rating: 3.5,
    text: `굴은 달랑 하나를 시켰는데 그래도 3가지 소스 (레몬, 칵테일, 바나나페퍼)를 다 줬다. 그릇도 얼핏보면 무슨 20개정도 올려져있는줄 알거같은 플레이팅. 정말 크긴 했다. 맛있었음.
      맥앤치즈는 웨이트리스가 자기는 바나나페퍼를 얹어서 먹는걸 좋아한다고 해서 그렇게 먹어봤는데 진짜 느끼함도 덜하고 괜찮았다.`,
  },
  {
    title: 'Steak Tartare (Union)',
    location: '72 Ossington Ave, Toronto, ON',
    rating: 3.5,
    text: `이렇게 괜찮은데가 집근처에 있었다니. 타르타르보다 빵이 특히 맛있었다. 매일 재료가 신선한지에 따라 메뉴가 바뀐다고 하는데 웬만하면 크게 바뀌진 않는듯.`,
  },
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
