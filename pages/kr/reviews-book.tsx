import Layout from '../../components/Layout';
import ReviewList from '../../components/ReviewList';
import { krNavigationLinks } from '../../lib/navigation';

const reviews = [
  {
    title: '눈물을 마시는 새',
    author: '이영도',
    date: '2022.02',
    rating: 3.5,
    text: `대부분의 판타지 소설들이 그렇듯이 술술 읽히는 재미가 있었다. 이영도의 서사방식은 때론 
      그 내용의 어두움에도 불구하고 전체적으로 굉장히 밝고 쾌활하다. 눈마새의 경우 세계관이 상당히 독특한데, 
      특히 용이 식물이면서도 동시에 동물이라는 설정은 그 어디에서도 상상하지 못한 것임과 동시에 작가의 철학을 
      잘 녹여냈다.
      문체는 드래곤 라자와 비교해서 덜 해학적이면서도 많이 세련되어졌다. 다만 그때보다 오히려 더 현학적으로 
      된듯한 느낌을 받았다. "티나한은 그 강대한 전사라는 자들이 일하기 싫어서 집을 뛰쳐나온 청년들이거나 무전취식을 
      필생의 야망으로 삼는 건달들일 테고, 공짜 밥을 먹을 수 있기에 기치 창검을 높이 들며 국왕 폐하 어쩌고저쩌고 
      하는 놀이에 동참하고 있을 거라는 짐작을 내비치지는 않았다.” 예를 들자면 이런 식이다. 
      또한 작가 자신이 고찰한 점들을 종종 끼워맞춘다는 느낌이 들정도로 집착적으로 관철한다. 
      재밌게 읽긴 했지만 기대했던 것만큼은 아니라 피마새를 읽을지 말지 고민하게 한다.`,
  },
  {
    title: '카라마조프가의 형제들',
    author: '표도르 도스토예프스키',
    date: '2021.08',
    text: `죄와 벌보다는 확실히 어려운 작품이었다. 플롯을 따라가기는 어렵지 않지만 이렇다 하고 
      포인트를 집는것이 쉽지 않았다. 표도르 파블로비치의 살인이라는 이야기의 큰 줄기가 있기는
      하지만, 전체적으로 하나의 이야기로써 매듭지어지는 죄와 벌과는 달리 여기저기서
      상관없어보이는 이야기들이 따로 전개되어서 마치 일일연속극을 보는 느낌이었다.
      그와중에 심리묘사는 역시나 탁월했다. 특히 인간의 이중적이고 모순적인 심리에 대한
      묘사가 여러군데서 두드러진다. 또한 상당히 종교적인 소설이라고 할수 있을 정도로 기독교에
      관한 내용들이 많은데, 특히 이반의 서사시는 굉장한 통찰이 있어서 어쩌면 도스토예프스키
      자신의 고뇌를 투영한 것이 아닐까 생각하게 한다. 전술했듯이 나는 작품을 명쾌하게 이해하는데
      애를 먹었다. 주제를 굳이 한 단어로 요약하자면 "사랑"이겠으나, 죄와 벌처럼 강렬한 메세지를
      받지는 못했다.`,
  },
  {
    title: '프란츠 카프카 단편집',
    author: '프란츠 카프카',
    date: '2020.12',
    text: `다 읽지 못했다. 정말이지 너무나도 난해했다. 총 78편의 단편이 수록되어 있는데, 일부 "카프카 사후 유고집에 수록된 단편집"을 제외하고 다 읽긴 했지만 이해할수 있었던 작품이 대표작인 "변신"을 제외하고 단 하나도 없었다. 그나마 "변신"이 제일 덜 난해한데, 특히 "선고" 같은 경우는 두번 읽었지만 여전히 종잡을수 없었다. 읽다가 더이상 읽는건 의미가 없을것 같아 나중에 조금더 카프카스러운 작품들을 더 잘 이해할수 있게 되면 재도전해보자고 생각했다. 다만 "카프카스럽다 (kafkaesque)"라는 말은 무슨 뜻인지 어느정도 이해할수 있게 되었다.`,
  },
  {
    title: '죄와 벌',
    author: '표도르 도스토예프스키',
    date: '2020.12',
    text: `처음으로 읽었던 도스토예프스키 장편인데 한번 읽는 것만으로도 정말 도스토예프스키가 왜 위대한 작가인지 뼈저리게 느낄수 있게 해주었다. (또한 이 부분은 따로 긴 리뷰로도 쓸까 생각 중이지만 나에게는 개인적으로 절망을 느끼게 해준 작품이기도 하다.) 크게 두 점을 꼽고 싶은데 첫째는 라스콜니코프라는 인물의 마음속으로 소름끼칠만큼 깊게 파고들어가 한 사람의 거대한 사고체계를 구축했다는 점. 내 자신의 심리라 할지라도 이렇게 집요하고 깊게 의식적으로 탐구하지는 못했을 것이다. 둘째는 에필로그에서 "변증법 대신에 삶이 도래했다"라는 문장으로 귀결되는, 작품 전체를 관통하며 흐르는 어마어마한 빌드업이다. 내가 어느정도 이해했다는 점에서 작품의 난이도도 크게 높지는 않다. 도스토예프스키를 읽어본적이 없다면 한번 권해보고 싶은 작품이다.`,
  },
  {
    title: 'A Terrible Country',
    author: 'Keith Gessen',
    date: '2020.09',
    rating: 3.5,
    text: `영어로 읽었는데 일단 쉬운 문장들로 쓰여져서 쉽게 읽을수 있었다. 해외 1.5세 교포의 입장에서 공감되는 부분이 많았고 러시아라는 나라의 현대 상황에 대해서 많이 알수 있었다 (특히 소비에트 붕괴 이후의 관점에서). 처음엔 Terrible Country라는 제목이 반어법이지 않을까 예상했지만 정말로 내용에서도 그런 뜻이었고 다만 신랄하게 러시아를 비판하는 톤은 아니다. 가슴아픈 결말 때문에 여운이 더 오래 남는다.`,
  },
];

export default function KrReviewsBook() {
  return (
    <Layout navigationLinks={krNavigationLinks}>
      <ReviewList reviews={reviews} />
    </Layout>
  );
}
