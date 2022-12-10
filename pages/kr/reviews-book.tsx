import Layout from '../../components/Layout';
import ReviewList from '../../components/ReviewList';
import { krNavigationLinks } from '../../lib/navigation';

const reviews = [
  {
    title: `소년이 온다`,
    author: '한강',
    date: '2022.12',
    rating: 4,
    text: `
      담담한 시선을 유지하려는 노력이 보이고 그래서 소재에 비해 온도가 낮은 소설이라는 생각이 들었다. 생각만으로도 가슴을 아릿해지게 만드는 책.
      어쩌면 한강은 자신의 입지를 이용해 그 사건을 한번 더 기억해보자고 말하고 싶었던건 아닐까.
    `,
  },
  {
    title: `The Communist Manifesto (공산당 선언)`,
    author: 'Karl Marx & Friedrich Engels',
    date: '2022.11',
    text: `
      이걸 영어로 읽기로 한건 별로 좋은 생각이 아니었다. 인류의 역사를 바꾼 책이기도 하고 다른 책들과 묶어서 싸게 팔길래 충동구매함.
      당시 어째서 부르주아계급이 몰락하고 프롤레타리아계급이 부상할 것인지, 그리고 공산당의 비전을 제시하며 노동자들의 단결을 부르짖는 문장으로 끝을 맺는다.
      그나마 짧은 책이었기에 (120쪽) 도전할수 있지 않았나 싶다.
    `,
  },
  {
    title: `당신 생각하느라 꽃을 피웠을 뿐이에요`,
    author: '나태주 (엮음)',
    date: '2022.11',
    rating: 3.5,
    text: `
      이게 얼마만에 읽은 시집인지. 대부분이 나태주 본인의 시이고 세계적으로 유명한 시들도 있다. 시집을 가까이 두고 자주 들여다보면 좋겠다는 생각이 들었다.
    `,
  },
  {
    title: `아몬드`,
    author: '손원평',
    date: '2022.11',
    rating: 3.5,
    text: `
      감정이 없는 소년의 시선으로 보는 감정 가득한 사건들과 세상. 다른 부분은 묘사가 좋았는데 곤이쪽의 거친 세상쪽 대사가 어설퍼서 몰입감이 조금 떨어졌다.
      플롯이 전형적인 드라마성 구조를 따르고 있지만 서사가 훌륭하다. 영화로 제작되지 않을까 예상해본다.
    `,
  },
  {
    title: `Stories of Your Life and Others`,
    author: 'Ted Chiang',
    date: '2022.11',
    rating: 4,
    text: `
      벼르고 벼르던 테드 창의 단편집을 드디어 읽었다. 한마디로 굉장히 명석한 단편들이라는 생각이 들었다.
      건축, 수학, 언어학, 생물학, 신학 등 이 단편집에서 소재로 삼는 학문 수만 해도 무려 5가지가 넘으며 심지어 그 깊이도 경이로운 수준이다.
      또한 모든 단편들에서 꽤 심도있는 철학적 질문을 던진다.
      그 중에서 영화 <Arrival>의 원작소설인 <Story of Your Life>와 <지옥은 신의 부재: Hell is God's Absence>는 드라마성도 굉장히 훌륭하다.
    `,
  },
  {
    title: `The Brain`,
    author: 'David Eagleman',
    date: '2022.09',
    rating: 3.5,
    text: `
      무난했던 뇌과학 입문서. 처음엔 뇌과학을 조금이라도 접해본 사람이라면 알법한 내용들이 많았지만 중반부부터 새로 알게된 놀라운 사실들이 많았다.
      뇌과학이라는 분야가 하루가 다르게 새로운 연구결과가 나오고 있는 학문이다 보니 몇년 안가 또 새로운 입문서가 필요하지 않을까 생각이 들긴 하지만 그래도 흥미롭게 잘 읽었다.
    `,
  },
  {
    title: `2022 제13회 젊은작가상 수상작품집`,
    author: '임솔아, 김멜라, 김병운, 김지연, 김혜진, 서수진, 서이제',
    date: '2022.09',
    rating: 3.5,
    text: `
      문학동네 젊은작가상 수상작품집은 2017년것을 읽었던것 같은데 이 시리즈는 그 전해의 작품들에서만 선정하기 때문에 문학의 트렌드 (곧, 사회의 트렌드)를 알수 있어서 좋다.
      이번년도 작품들에서 두드러졌던 부분은 7편중 4편이 젠더, 동성애 코드를 담고 있었다는 것이다.
      2017년에도 그런 코드는 있었지만 비중이 더 늘었고 좀더 다차원적인 시선을 지닌다.
      예를 들면 <기다릴 때 우리가 하는 말들>에서는 동성애자인 화자가 더 비주류인 무성애자인 친구를 편견으로 대하는 모습이 나온다.
    `,
  },
  {
    title: `모순`,
    author: '양귀자',
    date: '2022.08',
    rating: 4.5,
    text: `
      선뜻 리뷰하기 쉽지 않은 책이다. 호불호가 많이 갈릴것 같은 소설. 일단 책 제목에 충실한 내용이었다고 생각한다.
      맛깔난 문장들로 지루하진 않았지만 후반까지 정말 무난한 내용이었다가 마지막에 연속 세번으로 세게 라이트 훅을 날린다.
      특히 두번째 훅은 그 다음날 밤까지 여파가 있었을 정도로 그 심상이 강력했다.
      삶이란 무엇인가, 행복과 불행, 그리고 사랑은 무엇인가를 명확히 대비되는 엄마-이모, 김장우-나영규의 구도로 그려내고 이를 '모순'이라는 설명으로 풀어낸다.
      수많은 생각을 불러일으킨 이 작품에게 찬사를 보낸다.
    `,
  },
  {
    title: `언어의 온도`,
    author: '이기주',
    date: '2022.08',
    rating: 3.5,
    text: `
      이런 종류의 에세이들은 삶의 거대한 방향을 제시해 준다기보다는 살면서 중간중간 멈춰서서 돌아볼 필요가 있음을 일깨워준다.
      따스한 언어의 온도로 마음을 따뜻하게 해주는 책.
    `,
  },
  {
    title: `완전한 행복`,
    author: '정유정',
    date: '2022.07',
    rating: 4,
    text: `
      오랜만에 정말 푹 빠져서 읽은 소설.
      플롯 자체는 두드러지는게 없지만 서스펜스를 조성하는 작가의 능력이 탁월하다.
      시점이 상당히 특이한데 주인공(이라기보다는 소설의 중심이 되는 인물)인 신유나의 주변인물들 사이로 시점이 시시각각 바뀌며 신유나의 시점으로 이야기가 진행되는 부분은 없다.
      이런 책은 배울게 많고 많이 읽어야겠다는 생각이 든다.
    `,
  },
  {
    title: `숨은 신을 찾아서`,
    author: '강유원',
    date: '2022.07',
    rating: 3,
    text: `
      개괄적으로 이런 책이다 라고 말하기 어려운 책이었다.
      일단은 찐 철학서라 그런지 내용이 꽤 어렵다.
      신의 존재유무 (혹은 그런 맥락의)에 관해 각종 분야에서 다각도로 고찰하는 내용을 기대했으나 전체적으로 과거에 신을 탐구했던 유명 사상가들의 논점에 대한 작가 나름의 성찰이 주를 이룬다.
      제일 많이 거론되는 것은 아우구스티누스의 “고백록"과 데카르트의 “성찰"이다.
      상당히 독특하다고 생각했던 것은 작가의 톤이 이런 고전들에 대해 상당히 신랄하다는 것이다. 특히 데카르트에게 굉장히 비판적이었던 부분들이 있었는데 이게 실제로 이런 비판적인 입장인건지 아니면 작가 특유의 화법인건지 잘 파악이 되지 않았다.
      이해가 되지 않는 부분들이 많아서 언제 한번 더 읽어봐야겠다고 생각한 책이다.
    `,
  },
  {
    title: `고전의 고전`,
    author: '강대진, 김주일, 이기백, 이준석, 장시은',
    date: '2022.06',
    rating: 3.5,
    text: `
      호메로스, 헤로도토스, 플라톤, 아리스토텔레스 등이 지은 고전 중의 고전들을 간략하게 해설해주며 왜 이 고전들이 고전들인지를 설명해주는 책.
      이 고전들중 하나만 다루어도 몇십권이 나올 작품들이라 이렇게 한 챕터씩만 할애하다보니 굉장히 맛배기 느낌이 강했다.
      그럼에도 선생님들이 차근차근 설명해주는 느낌이어서 흥미롭게 잘 읽었다. 인문고전들에 대해 조금 배우고 싶은데 엄두가 안나는 사람들에게 추천할만한 책.
    `,
  },
  {
    title: `50 Children: One Ordinary American Couple's Extraordinary Rescue Mission Into the Heart of Nazi Germany`,
    author: 'Steven Pressman',
    date: '2022.05',
    rating: 3,
    text: `
      미국에 사는 평범한 유대인 Kraus 부부가 2차 대전이 임박했을때 나치독일로 들어가 50명의 유대인 아이들을 미국으로 구출한 실화를 기자 Steven Pressman이 자료를 수집해 기록한, 기록물이다.
      같은 회사에 Eric Beller라는 사람의 아버지 Paul Beller가 이 50명의 아이들 중 한명이고 이분을 북클럽 모임 게스트로 초청한다고 해서, 이런건 또 못참기 때문에 읽게 되었다.
      일단 구출작전이라는 말에서 느껴지는 스펙타클함과는 거리가 좀 있었다. 더 정확하게 말하자면 미국에서 모든 적법한 절차를 거치고 오스트리아 비엔나에서 50명의 아이들을 선별해서 미국으로 이민시킨다는 내용이다.
      기자인 작가가 사실들을 나열하는 식으로 서술되어서 특히 초중반까지는 굉장히 지루했다. 아이들이 부모들과 헤어지는 장면이라던가 Kraus부부가 나치 사무실에서 SS Officer를 대면하는 장면은 그래도 드라마가 좀 있었다.
    `,
  },
  {
    title: 'The Fault In Our Stars',
    author: 'John Green',
    date: '2022.04',
    rating: 4,
    text: `
      폐암 말기로 한번 거의 죽었다가 기적적으로 살아나고 Cancer Support Group에 참가하는 16살 헤이젤 그레이스 랭캐스터의 주위에는 죽음이 가득하다.
      그래서 헤이젤이 삶과 암, 죽음을 바라보는 태도는 그런 상황에 놓여본적 없는 내가 읽기에는 당황스러울 정도로 담담하다. 어거스터스 워터스와의
      사랑, 그리고 An Emperial Affliction이라는 소설 뒤의 내용이 알고싶어 떠나는 암스테르담으로의 여행은 발랄하면서도 절절하다.
      너무 재밌게 읽었다. 전체적으로 로맨스소설의 형태를 띄고 있지만 살 날이 얼마 남지 않은 10대들의 생각과 곳곳에서 보이는 작가의 통찰은 절대 가볍지 않다.
      문장들도 쉽게쉽게 읽힌다. 앞으로 존 그린이라는 작가를 꽤 좋아하게 될 것 같다.
    `,
  },
  {
    title: '불교가 필요하다',
    author: '김규칠',
    date: '2022.03',
    rating: 3,
    text: `예전부터 불교에 관심이 있었지만 어떻게 접근해야될지 몰라서 불교 입문용으로 읽은 책. 결론부터 말하자면 
      초심자용 도서는 아니었던것 같다. 예를 들면 “일반적으로 불교는 이러이러하다는 인식이 있는데 실제 싯다르타는 그렇게 말하지 않았다” 
      같은 구절이 많은데 나로서는 “이러이러하다는 인식”에 대해서도 무지한 것이다. 개론서로 잘 고른건지 아닌지 잘 모르겠다. 
      용어라던가 표현이 상당히 어려운 것이 많았는데 (한국책을 읽으면서 이렇게 모르는 단어가 많을줄은 몰랐다…) 좀더 쉬운 글로 적었으면 
      어땠을까 하는 생각이 들었다. 핵심적인 내용을 배운 것만으로도 읽은것에 후회는 없다.`,
  },
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
