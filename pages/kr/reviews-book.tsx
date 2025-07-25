import Layout from '../../components/Layout';
import ReviewList from '../../components/ReviewList';
import { krNavigationLinks } from '../../lib/navigation';

const reviews = [
  {
    title: `[J] 낭만적 연애와 그 후의 일상`,
    author: '알랭 드 보통',
    date: '2025.07',
    rating: 3.5,
    text: `
      우리가 사랑이라는 것을 다룰 때는, 문학과 같은 매체에서건 현실에서건 낭만적인 부분에만 촛점을 맞추는 것이 사실이다.
      이 작품은 소설의 형식을 빌린 에세이로 (그런 점에서 이승우의 <사랑의 생애> 생각이 많이 났다), 사랑 초기 이후, 특히 결혼 이후의 현실과 작가 나름의 진정한 사랑의 모습을 지독히도 이성적이고 현실적으로 파헤치고 제시한다.
      여러 새로운 관점을 보여주는 점에서 다양한 시각을 얻을 수 있어서 좋았다.
      다만 번역의 문제인건지는 몰라도 현학적인 문장들은 어떨땐 몇번을 읽어도 무슨 말인지 전혀 알수가 없어 짜증이 났다.
      특별한 사람과 특별한 여정을 준비하면서 읽은 책이라서 뜻깊은 작품이었다.
    `,
  },
  {
    title: `최선의 삶`,
    author: '임솔아',
    date: '2025.06',
    rating: 3.5,
    text: `
      읍내동에 사는 강이는 항상 최선의 삶을 선택하지만, 어째서 그러면 그럴수록 현실은 일그러지기만 하는 것일까.
      전민동의 소영과 읍내동의 강이는 그저 사는 곳이 달랐을 뿐인데, 그 안에서 선택을 할 때마다 어떻게 이렇게도 갈리기만 하는 것일까.
      순문학은 읽는 사람의 마음을 불편하게 만든다, 라는 말에 더없이 순문학적인 면모를 보여주는 작품이다.
      임솔아는 아주 은근한 목소리로 밑바닥에서 끌어올린 진득한 현실을 한 국자 떠서 우리에게 보여주는 듯하다.
    `,
  },
  {
    title: `모리와 함께한 화요일`,
    author: '미치 앨봄',
    date: '2025.06',
    rating: 3.5,
    text: `
      어릴적에 엄마로부터 추천받았던 책인데 LA 알라딘 중고서점에서 절판된 책 칸에 있길래 드디어 사서 읽어보았다.
      어느 정도 알고 있는 내용이긴 했지만 이런 책은 살면서 미처 돌아보지 못했던 것들, 그리고 방향성을 알려준다. 다만 또 금방 잊어버리게 되는것도 사실이다.
      책 내용과는 상관없이 여러 새로운 사고를 해볼 수도 있어서 좋았다.
      모리 교수의 가르침에 삶의 중요한 부분들을 다시금 돌아볼 수 있었던 것은 물론이다.
    `,
  },
  {
    title: `거인의 노트`,
    author: '김익한',
    date: '2025.05',
    rating: 4,
    text: `
      기록이라는 것이 얼마나 매력적인 것인지 꽤나 설득력이 있었던 책. 크게 책, 일상, 계획을 기록하라는 내용이다.
      꽤 오랜만에 읽은 자기계발서이고 자기계발서이기 때문에 섣부르게 판단할 수는 없지만 일단 한번 실행에 옮겨보기로 했다. 몇개월 후나 몇년 후에 어땠는지 알 수 있겠지.
    `,
  },
  {
    title: `우리가 빛의 속도로 갈 수 없다면`,
    author: '김초엽',
    date: '2025.05',
    rating: 3.5,
    text: `
      김초엽의 단편소설집. SF단편들이어서 그런지 Stories of Your Life랑 조금 비슷한 느낌을 받았는데 그보단 과학쪽으로 더 깊게 들어가지 않고 더 가볍고 산뜻하다.
      SF라는 도구를 빌려 인본주의적이거나 현시대의 메세지를 전달한다.
      재밌고 쉽게 읽을 수 있으면서도 생각할 거리를 던져주었던 작품들이다.
      <우리가 빛의 속도로 갈 수 없다면>과 <관내분실>이라는 작품이 인상깊었다.
    `,
  },
  {
    title: `[J] 고래`,
    author: '천명관',
    date: '2025.04',
    rating: 3.5,
    text: `
      정말 뭔가 여타 소설들과는 다른 느낌의 소설이었다. 마치 무협소설의 그것과 비슷한 시원시원한 서술방식에 강하고 거침없는 상남자식 묘사들이 어우러져 확실히 재밌는 소설이라고 할만했다.
      뿐만 아니라 배경이 한국의 근현대임에도 조금 황당하고 과장스러운 판타지 서사도 많았는데 이 점들이 역시 이 소설은 재밌고자 하는 소설이라는 생각이 들게 했다.
      작품 전체에 수많은 "~는 ~의 법칙이었다"는 통찰을 끼워넣은 것은 너무 직접적이고 조금 조잡했으나 몇군데 굉장히 날카로운 지적이 보였던 것도 사실이다.
      "뭔가 불순한 의도를 가진 자들만이 세상을 쉽게 설명하려고 한다"가 이 작품을 관통하는 문장이라고 생각한다.
      그만큼 이 작품에는 비극적이지 않은 인물이 단 하나도 없을만큼 인과가 뒤엉켜있고 쉽게 설명될 수 없는 것들 투성이이기 때문이다.
    `,
  },
  {
    title: `유리알 유희`,
    author: '헤르만 헤세',
    date: '2025.04',
    text: `
      전기 형식을 취하고 있어 전체적으로, 특히 서문 부분이 굉장히 건조하고 밀도가 높았다.
      카스탈리엔이라는 이 가상의 설정에서 크네히트는 겉으로는 정말 순탄하고 엘리트적인 길을 걷는것 같아 보이지만 그 내면에는 고민과 갈등이 도사리고 있고 헤세는 이것을 정말 미묘하고 암시적으로 표현한다.
      읽어본 헤세의 이전 작품들과도 주제가 비슷한 부분이 많았지만 메세지는 더 모호했고 더 미묘했고 더 어려웠다.
      특히 전기의 결말 부분은 마치 단편소설의 결말과 비슷하다고 생각이 들었고 정말 이상하고 허무한 결말이라는 생각이 들었지만 동시에 묘한 여운을 남겼는데 이것은 어쩌면 미완성의 미학이라고도 할 수 있을 것이다.
    `,
  },
  {
    title: `[J] 자기 결정`,
    author: '페터 비에리',
    date: '2025.02',
    rating: 3.5,
    text: `
      엄청 새로운 내용이라고는 생각되지 않았지만 이런 새롭지 않은 내용을 집요하고 의식적으로 파고들어 명료한 의식의 수면위로 끌어올리는 것은 흔하지 않은 일일테고 그 점에서 자기인식이라는 이 책의 주제와 일맥상통하는 부분이 있었다.
      그 점에서 이 책이 단순한 자기계발서가 아니라 철학서라는 생각이 들었고 그런 자기인식을 자아상과 맞는지 점검하는 것이 필요하다는, 그리고 꼭 그렇게 해봐야겠다는 생각이 되었다.
      문학작품을 읽는 것과 특히 쓰는 것에 대한 견해는 신선했고 그 행위에 더 큰 정당성을 부여할 수 있게 된 것도 즐거운 점이었다.
    `,
  },
  {
    title: `소설 보다: 여름 2020`,
    author: '강화길, 서이제, 임솔아',
    date: '2025.02',
    rating: 3.5,
    text: `
      이미 조금은 익숙한, 현시대 한국문학을 이끌어가는 젊은 작가들의 중단편 세 편이 수록된 책이다.
      <가원>에서는 모순적이고 미묘한 인간심리에 대한 강화길의 지극히 섬세하면서도 예리한 시각을,
      <0%를 향하여>에서는 서이제의 형식을 파괴하는듯한 대담한 작법과 궁상맞다는 생각이 들 정도로 현실성에 입각한 주제의식을,
      <희고 둥근 부분>에서는 미묘한 인간 본성의 대칭성에 집요하게 파고드는 임솔아의 빗겨가는 시선을 볼 수 있었다.
    `,
  },
  {
    title: `싯다르타`,
    author: '헤르만 헤세',
    date: '2025.02',
    text: `
      헤세가 불교를 굉장히 깊게 연구하고 쓴 책이라는 사실을 느낄수 있었다.
      전체적으로 <데미안>과 내적 성장이라는 주제가 비슷하고 심지어 구성도 비슷하지만 나는 <데미안>보다 더 좋았다.
      오히려 신비주의적 색채는 많이 벗은 듯하다.
      싯다르타가 책의 시작부분에서 이미 만렙이라고 느꼈었는데 그 이후에도 내가 인식하지 못했던 수많은 깨달음의 겹들이 나를 놀라게 했다.
      진정한 가르침은 고매한 스승에게서 배울 수 없다는 것, 직접적인 경험을 통해 지극히 세속적인 것에서조차 가르침을 얻고, 궁극적으로는 내면의 목소리에 귀를 기울이는 것, 나에게 정말 많은 가르침을 주었다.
    `,
  },
  {
    title: `데미안`,
    author: '헤르만 헤세',
    date: '2025.01',
    text: `
      워낙에 많이 이야기를 들어와서 기대를 많이 했던 작품이었다.
      헤세가 이렇게 대담한 작가인지 몰랐다. 대담하다는 것은 철학사상에서도 그렇다는 것이지만, 이야기를 구성하는 방식에 있어서도 그렇다.
      신비주의적 색채가 강하고 실세계에서 경험하는 온갖 상징들과 은유들이 크게 와닿지는 않았지만
      궁극적으로 화자 싱클레어의 내면의 성장, 그리고 이어지는 외부세계와의 접점을 통해 성장을 다른 각도에서 볼 수 있어서 좋았다.
      니체에게 영향을 굉장히 많이 받은 것 같다는 생각이 들었다.
    `,
  },
  {
    title: `무진기행 외`,
    author: '김승옥',
    date: '2025.01',
    text: `
      무진기행을 비롯하여 여러 작품들을 수록해놓은 "필사의 힘" 이라는 책이었는데 필사는 한번 다 읽은 다음에 천천히 하기로 했다.
      50여년 전에 쓴 작품들인데도 불구하고 그렇게 생각되지 않는 문체, 즉 시대를 타지 않는 문체였다.
      역시 잘 쓰여진 한국문학은 읽는 것이 정말 즐겁다.
    `,
  },
  {
    title: `[J] 느리게 산다는 것의 의미`,
    author: '피에르 쌍소',
    date: '2024.12',
    rating: 2.5,
    text: `
      읽기가 상당히 버거웠던 책이었고 실제로 길지 않았는데도 읽는데 오래 걸렸다.
      의식의 흐름 기법을 썼다고도 표현할 수 있겠는데 문제는 이 책이 비문학이라는 것, 즉 독자를 배려하지 않은 작법, 불친절한 작법이라고 할 수 있겠다.
      한마디로 무슨 말을 하고 싶은건지 알기 어려울 때가 많았고 비약도 많았다.
      근현대에서 효율과 속도를 추구하는 방향은 전반적으로는 꽤나 일방적이었고 제목이 말해주듯이 이 책은 그것에 살며시 제동을 걸고자 하는 책 중 하나이다.
      하지만 이 작품에서 그 흐름에 반하는 이런 생각들은 필력의 문제인건지는 몰라도 신선하기보다는 괴이하다고 느껴지는 경우가 많았다.
    `,
  },
  {
    title: `[B] 인생`,
    author: '위화',
    date: '2024.11',
    rating: 4,
    text: `
      나는 소설이 가장 일차적으로 이야기로써 충실해야 한다고 생각해왔고 이 작품은 비록 평범한 사람의 인생을 다루고 있다고 하나 역사와 사회의 격변 속에 놓였을 땐 결코 평범하지만은 않은 이야기가 되었다. 
      또한 거시적이고 차갑게 보게 되는 역사서와는 달리 한 사람의 삶을 따라감으로써 훨씬 인간적인 관찰도구로 기능하는 모습을 보여주었다.
      미사여구를 쫙 뺀 담백한 문체로 담담히 한 사람의 기구한 인생을 서술하는데 정말 몰입해서 읽은 소설이다.
    `,
  },
  {
    title: `전상국 교수의 소설 쓰기 명강의`,
    author: '전상국',
    date: '2024.11',
    rating: 4,
    text: `
      다른 책들을 읽는 사이사이에 읽어 굉장히 오랜 기간 읽은 책.
      혹자는 뻔한 이야기가 많다고 하겠으나 나처럼 작법에 기초가 없는 사람에게는 전체적인 윤곽을 상당히 분명하게 제시해 주었고 덕분에 방향성을 많이 얻을 수 있었다.
      앞으로 참고서적으로도 유용할 것 같다.
    `,
  },
  {
    title: `[B] 나의 눈부신 친구`,
    author: '엘레나 페란테',
    date: '2024.10',
    rating: 4,
    text: `
      뉴욕타임즈가 선정한 21세기 최고의 책 100권 중 1위를 차지했다는 사실이 책을 읽는 동안 머릿속 한켠에 도사리고 있었다.
      거의 인물에 몰빵한 작품이라고 해도 될 만큼 사건이나 배경은 최소한만 가져가면서 인물의 심리묘사를 굉장히 직접적이고 세밀하게 하는데 이것이 이 책의 정말 빛나는 부분이라고 생각한다.
      작품의 중심이 되는 릴라와 화자 엘레나는 물론이고 등장하는 수많은 주변 인물들 중 입체적이지 않은 인물이 없고 격변하는 어린 시절을 겪으면서 형성되는 촘촘한 인물들 간의 관계도 정교하다.
      총 4편중 적어도 이 편만 봐서는 기성세대를 향한 경멸을 가지고 그 악의 세습과 끝없는 갈등을 끝내고 싶어하는 젊은이들의 소망이 으레 그러하듯이 좌절될 것처럼 보인다.
      훌륭한 작품이라고는 생각하지만 21세기 최고의 책이라고까지 생각되지는 않았다.
    `,
  },
  {
    title: `[B] 완벽에 대한 반론`,
    author: '마이클 샌델',
    date: '2024.09',
    rating: 3.5,
    text: `
      생명공학의 발전이 가져오는 윤리적 딜레마는 가히 현재 AI가 가져오는 그것의 이상일 것이다.
      이 책에서 다루는 신체강화와 맞춤아기를 설계하는 문제, 그리고 배아를 줄기세포 연구에 쓸수 있는가에 주제를 국한시킨다고 하더라도 매우 까다로울 수밖에 없는 문제들에 조심스럽게 논리를 전개해나간다.
      비록 모든 부분에서 동의할수는 없었지만 분명히 설득력 있는 주장들임은 분명했다.
      쉽게 따라갈수 있는 책은 아니었고 특히 초반부 질문을 많이 던지는데 이 부분에서 좋은 책이라는 생각이 들면서도 에너지 소모가 상당했다.
    `,
  },
  {
    title: `책 한번 써봅시다`,
    author: '장강명',
    date: '2024.09',
    rating: 4,
    text: `
      많은 용기를 얻을수 있었던 책이었다. 작법에 관한 내용도 있기는 하지만 그보단 작가라는것이 무엇인지, 또 업계 상황이라던가 작가가 되려면 어떻게 해야 하는지 등등 여러 주변지식들을 알려주는데 이것이 훨씬 더 많은 도움이 되었다.
    `,
  },
  {
    title: `[B] 가난한 사람들`,
    author: '표도르 도스토예프스키',
    date: '2024.09',
    text: `
      가난이라는 것은 사람을 얼마나 사람같지 않은 비참한 존재로 만드는지, 또 극빈에서 벗어나기만 한다면 그것만으로도 얼마나 주변의 인식이 바뀌는지.
      가난으로 인한 답답함과 빡빡함이 읽는 내 목까지 조여오는것 같았다.
      이런 작품이 처녀작이라니, 도스토예프스키는 역시 도스토예프스키다.
    `,
  },
  {
    title: `[J] Piranesi`,
    author: 'Susanna Clarke',
    date: '2024.09',
    rating: 3.5,
    text: `
      주인공 피라네시의 일지를 따라가면서 기억의 한 점에서 과거에 대한 묘사는 전혀 하지 않음으로써 완전한 미스터리로 남겨놓는 전개방식이 흥미로웠다.
      세계관과 그에 연결되는 상징들에서 조금 어려운 부분이 있었고 캐릭터는 크게 매력적이지 않았다. 이런 식으로의 스토리텔링도 가능하구나 라는것을 느끼게 해주었다.
    `,
  },
  {
    title: `[B] 100초 정치사회 수업`,
    author: 'CBS 노컷뉴스 씨리얼 제작팀',
    date: '2024.09',
    rating: 3,
    text: `
      어쩌면 초등학생 정도를 타겟으로 한 책이었던건지 정치에 무지한 내가 보기에도 기본적인 내용들이 많았고 깊이는 많이 떨어졌으나 그래도 여러 사회이슈들을 알기 쉽게 소개해주어서 몇가지 쉽게 배울수 있었다.
    `,
  },
  {
    title: `[J] 심판`,
    author: '베르나르 베르베르',
    date: '2024.08',
    rating: 2.5,
    text: `
      희곡을 너무 읽어본적이 없어서 그런것일까?
      베르나르 베르베르의 작품을 읽어보는건 정말 오랜만인데 내가 기억하던 그 재기발랄한 상상력은 어디로 간건지,
      특별한 구석을 찾아보기 힘든 작품이었다.
    `,
  },
  {
    title: `김지원 소설 선집 (3) - 물이 물속으로 흐르듯 외`,
    author: '김지원',
    date: '2024.08',
    rating: 3.5,
    text: `
      김지원이라는 소설가의 너무나도 여리고 소탈한 성품이 고스란히 느껴지는 작품들이었다.
      작품들 속에서 일관되게 이민 온 머나먼 이국 땅을 향한 두려움 가득한 시선과 남성중심적인 사회 안에서
      연약하게 흔들리는 한명의 여성이 있었다. 
    `,
  },
  {
    title: `사신의 영생 (삼체 3부)`,
    author: '류츠신',
    date: '2024.07',
    rating: 3.5,
    text: `
      장대한 스케일에도 놀라울 정도로 집약적이었던 1,2부에 비해 조금 서사가 이리저리 튄다는 느낌을 떨치기가 어려웠다.
      너무나도 까마득한 스케일이라 그래도 이정도면 준수하게 수습했다고도 볼수 있겠으나 이 대서사시의 마침표로는 조금 부족하지 않았나 싶다.
      특히 결말 부분은 어떻게 평해야 할지 감도 잘 오지 않는다. 플롯은 그래도 흥미진진하다.
    `,
  },
  {
    title: `[B] 뇌, 인간을 읽다`,
    author: '마이클 코벌리스',
    date: '2024.07',
    rating: 2.5,
    text: `
      뇌과학의 여러가지 사실들을 짧은 20개의 챕터로 나누어 알려주는데 상당히 흥미로운 내용도 있긴 했지만
      전체적으로 내용에 깊이가 부족하고 무엇보다 글이 중구난방하는 경향이 있어 전달력이 떨어졌다.
    `,
  },
  {
    title: `[B] 플라멩코 추는 남자`,
    author: '허태연',
    date: '2024.07',
    rating: 3,
    text: `
      빠르고 가볍게 읽을수 있는 무난한 작품이었다. 시대를 반영하려고 한 노력과 이혼가정으로 인한 헤어짐 등 새롭다면 새로운 주제들이 눈에 들어왔지만 큰 울림은 받을수 없었다.
    `,
  },
  {
    title: `암흑의 숲 (삼체 2부)`,
    author: '류츠신',
    date: '2024.06',
    rating: 4,
    text: `
      700페이지 분량의 꽤 호흡이 긴 작품이었음에도 우주라는 공간적 스케일 뿐 아니라 400년에 걸친 장대한 시간적 스케일로 인해 몰입도가 높았다.
      1부에 비교해서는 플롯의 설계 면에서 작가의 내공이 굉장한 수준이라는 것을 느낄수 있었다.
      또한 이 작품이 단순히 이야기로써 그치는 것이 아닌, 작가가 과학과 사실성에 기반해 페르미의 역설에 관해 고심한 흔적임을 엿볼수 있었다.
    `,
  },
  {
    title: `삼체문제 (삼체 1부)`,
    author: '류츠신',
    date: '2024.05',
    rating: 4,
    text: `
      과학이라는 틀 안에서의 상상력이 SF소설의 가장 큰 미덕이라고 본다면 그 점을 놀라운 완성도로 빚어낸 작품.
      상당히 과학적인 내용에 기반해 이해하기 어려운 내용들이 많았지만 몰입에 방해가 될 정도는 아니었고 SF소설이지만 미스터리 요소도 많아 굉장히 흥미롭게 읽을수 있었다.
    `,
  },
  {
    title: `The Maid`,
    author: 'Nita Prose',
    date: '2024.05',
    rating: 3,
    text: `
      캐릭터를 중심으로 전개한 소설이니만큼 캐릭터 자체와 결말부분의 성장은 비교적 흥미로웠으나 평이한 플롯과 민숭맨숭한 서스펜스 작업에 아쉬움이 남는 작품이었다.
      쉽게쉽게 읽히는 점이 장점이라면 장점.
    `,
  },
  {
    title: `[B] 노르웨이의 숲`,
    author: '무라카미 하루키',
    date: '2024.04',
    rating: 3.5,
    text: `
      무라카미 하루키의 장편들을 읽어보는건 계속 미루고만 있었는데 드디어 입문작이라고도 할수 있는 노르웨이의 숲을 읽게 되었다.
      그런데 잘 모르겠다. 많은 현대인의 의식 기저에 자리잡고 있는 허무함으로의 천착은 너무 미묘해 손에 잡힐듯 말듯 하다.
      다소 괴상하게 느껴지는 결말 부분은 더더욱 그랬다. 꽤나 적나라하게 성적인 묘사들이 많은 것도 선뜻 어떤 의미인지 알기 어려웠다.
      즐겁게 읽긴 했지만 왜 무라카미 하루키 신드롬의 기원이 된 작품이 된 것인지는 잘 이해하기 어려웠다.
    `,
  },
  {
    title: `[B] 가재가 노래하는 곳`,
    author: '델리아 오언스',
    date: '2024.03',
    rating: 4,
    text: `
      법정 스릴러, 추리, 로맨스 등 장르의 크로스오버라는 표현이 무색할 정도로 온갖 요소가 들어간 소설이지만
      그 모든 것을 군더더기로 느껴지게 할만큼 강렬하게 다가온 것은 카야의 사회적 고립, 그리고 거기에서 날카롭게 파고들어간 인간 내면과 다른 동물들과의 진화론적 연결성이다.
      빨려들어갔다고 해도 될만큼 몰입해서 읽은 책이고 플롯 자체보다는 일반적인 사람으로는 상상도 하기 힘든 삶을 산 카야의 서사가 특별한 경험을 선사했던 작품이었다.
    `,
  },
  {
    title: `[B] AI쇼크, 다가올 미래`,
    author: '모 가댓',
    date: '2024.03',
    rating: 3.5,
    text: `
      AI의 현재와 근미래에 다가올 특이점을 날카롭고 냉혹한 시선으로 진단, 예견하고 우리가 나아가야 할 방향을 제시한다.
      AI는 무조건 우리보다 똑똑해질 뿐만 아니라 자각, 감정, 윤리관을 가지게 될 것이다.
      하지만 결국은 우리를 보고 배우는 우리들의 자식일 뿐이고 따라서 모든건 우리에게 달려있다.
    `,
  },
  {
    title: `[B] 너의 췌장을 먹고 싶어`,
    author: '스미노 요루',
    date: '2024.02',
    rating: 3,
    text: `
      연애소설이라고 믿고 읽었지만 성장소설이었던 건에 관하여... 결말부분의 반전은 충격이었고 마음에 들었으나 오글거리는 대사들과 라이트노벨스러운 캐릭터성, 그리고
      성장소설이라는 각도에서 본다면 화자의 성장이 너무 억지스럽게 느껴졌다.
    `,
  },
  {
    title: `[B] 고등어`,
    author: '공지영',
    date: '2024.01',
    rating: 4,
    text: `
      대의와 이상을 위해 몸바쳤던 것이 결국엔 다 부질없는 것이었다고 말하는 명우에게, 운전면허 따위와는 바꿀수 없는 눈부신 시간이 있었다고 하는 은림의 말이
      작가가 하고 싶었던 말이지 않았을까 싶다. 뜨겁게 읽은 책이다.
    `,
  },
  {
    title: `[B] 공감의 배신`,
    author: '폴 블룸',
    date: '2024.01',
    rating: 3.5,
    text: `
      현시대에 사람들이 공감이라는 것에 보내는 믿음은 거의 종교적인 수준이다. 이 책은 데이터와 논리로 공감을 가치로 내세우는 것의 근거가 얼마나 빈약한지를 꼬집는다.
      다만 공감이라는 단어의 정의를 잘못, 혹은 다르게 알고 있는 것에서 오는 쟁점에 책의 상당부분을 할애했다고 보여진다.
      나도 이것 때문에 오는 인지부조화가 상당히 컸지만 결국에는 그래서 이 책에서 말하는 공감, 즉 정서적 공감으로 의미를 국한시킨다면 책의 주장이 유별나게 논쟁적이지는 않다고 느꼈다.
      그러나 이 점 외에도 스포트라이트 효과같은 강력한 논점이 있었고 이런 점들에서 정말 많은 부분을 얻을수 있었다.
    `,
  },
  {
    title: `[B] 그리고 아무 말도 하지 않았다`,
    author: '하인리히 뵐',
    date: '2023.12',
    text: `
      전후 독일의 잿빛 배경과 지독한 가난이라는 그림자가 오버랩되어 재를 들이마시는듯 무겁게 짓누르는 갑갑함으로 당시 시대의 모습을 표현한다는 소설의 본분에 충실한 작품이었던 같다.
      수수께끼같은 장면들이 더러 있어서 내가 무언가 놓치고 있는게 아닌가라는 생각이 들게 했다.
    `,
  },
  {
    title: `[B] 300불로 떠난 이민, 20년 세계일주가 되다`,
    author: '김현성',
    date: '2023.12',
    rating: 2.5,
    text: `
      20년동안 온 가족이 이곳 저곳을 옮겨다니며 산 경우가 정말 흔치 않을 것이고 그런 부분에서 분명 흥미로운 부분과 존경받아 마땅한 점이 많을 것이나,
      조금 더 자세히 들여다보면 그것이 부인과 아이들의 희생을 바탕으로 한 것이었다는 점에 조금 떨떠름한 박수를 보내게 되는 것도 사실이다.
      금전적인 부분에서 자랑한다는 욕 먹을 각오를 하고서라도 조금 더 자세한 내용을 적었다면 좋았을텐데 작가 나름의 철학이 너무 많은 내용을 이루었고 그조차도 특별남이 없었다는 점에서 일반적인 대중에게 추천할만한 책은 아니라는 생각이 들었다.
    `,
  },
  {
    title: `[B] 일론 머스크`,
    author: '월터 아이작슨',
    date: '2023.11',
    rating: 4,
    text: `
      700페이지에 달하는 꽤 방대한 분량이었는데도 평전을 읽으면서 이렇게 재미있을 줄은 몰랐다. 
      일론 머스크라는 인물 자체가 너무나도 흥미로운 만큼 그의 삶은 그야말로 드라마를 끌어들이는 자석같다.
      특히 SpaceX가 세번의 발사 실패 후 네번째 발사에서 극적으로 성공하는 장면은 그것 자체만으로 하나의 영화 각본으로 전혀 손색이 없을 것이다.
      내가 알고 들었던 사람중 가장 니체적 초인에 근접한 인물이 아닐까 싶다 (덮어두고 훌륭한 인물이라는 뜻은 아니다)
    `,
  },
  {
    title: `[B] 카오스`,
    author: '제임스 글릭',
    date: '2023.10',
    rating: 3,
    text: `
      과학서적이라고는 해도 일반대중을 겨냥해 쓰인 책이라고 생각했는데 생각보다 테크니컬한 내용이 많고 어려웠다.
      우리는 학문의 전환기에 살고 있는건지도 모른다. 아직도 이해 안가는 부분은 많지만 카오스에 대해 조금 더 많이 배울수 있었다.
    `,
  },
  {
    title: `[B] 젊은 베르테르의 슬픔`,
    author: '요한 볼프강 폰 괴테',
    date: '2023.10',
    text: `
      유려한 문체와 시적인 표현들, 어쩌면 당시로서는 파격적인 발상은 흥미로웠으나 지극히 감성적인 베르테르에게로의 몰입은 크게 되지 않았다.
    `,
  },
  {
    title: `[B] 김약국의 딸들`,
    author: '박경리',
    date: '2023.09',
    rating: 4,
    text: `
      누군가 순문학이 장르문학과 다른점은 개연성의 부재라 했던가. 현실은, 사건은, 불행은 기승전결이나 측은지심 따위 봐주면서 일어나주지 않는다.
      그저 일어날 뿐이고 그앞에 한없이 약한 인간은 받아들일 수밖에 없다.
      '침몰'이라는 챕터 제목은 보자마자 너무나 참담한 기분이 들었다.
      이 정도면 박경리 작가가 아주 작정하고 쓴 소설이라고밖에 생각되지 않았다.
    `,
  },
  {
    title: `[B] 남아있는 나날`,
    author: '가즈오 이시구로',
    date: '2023.09',
    rating: 3.5,
    text: `
      작가와 작품 모두 생소했던데다 소설 중반까지도 화자의 집사라는 직업에 대한 철학이 너무 깊게 다루어져 적잖이 당황스러웠다.
      하지만 중후반부에 가서 펼쳐지는 너무나도 인간적인 인물들 사이의 미묘한 감정들과 오로지 한가지 가치관에 매몰되어 살아온 삶에 대한 회의감 등에 많은 생각을 불러일으킨 소설이었다.
      다 읽고나서 작가소개를 읽을 때에야 노벨문학상을 수상했다는 사실을 알고 놀랐다.
    `,
  },
  {
    title: `인간실격`,
    author: '다자이 오사무',
    date: '2023.08',
    text: `
      이 책을 읽는 내내 행복했다. 물론 내용 자체는 음울하기 짝이 없었고 그것이 작가의 삶을 거의 그대로 반영했다는 것을 책에 수록된 작가의 일생을 읽으면서 알수 있었지만
      묘하게 작가, 혹은 주인공과의 동질감을 느낄수 있었다. 또한 전쟁 전후 특유의 분위기가 일제시대 한국의 문학과 굉장히 닮아있는 부분도 흥미로웠다.
    `,
  },
  {
    title: `시나리오 작가를 위한 심리학`,
    author: '윌리엄 인딕',
    date: '2023.07',
    rating: 3.5,
    text: `
      예상했던 것보다 읽기가 조금 힘들었다. 정말 공부하는 느낌이었고 그래도 덕분에 많이 배운것 같긴 하다.
      영화를 포함한 창작물들에서 조금 과장하자면 천편일률적이라고도 볼수 있는 형식이라는 것을 심리학적인 관점에서 분석한다고도 볼수 있는데,
      이미 <시학>이 헐리우드 영화들에서 교과서처럼 받아들여진다는 것을 알고 있었음에도 이 형식의 영향력이 이 책을 읽음으로써 상상 이상의 것이었음을 배울수 있었다.
    `,
  },
  {
    title: `종의 기원`,
    author: '정유정',
    date: '2023.06',
    rating: 4,
    text: `
      어떻게 글을 이렇게 잘 쓸수 있을까, 어떻게 하면 정유정 같은 필력을 가지게 될까.
      <완전한 행복>보다 더 잘 쓴 소설이라고 느꼈다. 심리묘사가 뛰어나고 하나의 미스터리가 풀리더라도 또 다른 미스터리가 항상 남겨져 있어 흡입력이 끊어지지 않았다.
    `,
  },
  {
    title: `인생에 한번은 차라투스트라`,
    author: '이진우',
    date: '2023.06',
    rating: 3.5,
    text: `
      <차라투스트라는 이렇게 말했다>를 다 읽어놓고도 할말이 '너무 어려웠다'밖에 없다는 사실이 아쉬워 읽게된 해설서.
      첫번째 읽을때는 이 책마저도 머릿속에 들어오는둥 마는둥 했는데 책모임에서 말할 요량으로 하이라이트해둔 부분을 다시 읽어보니 굉장히 많이 정리가 됐다.
      초인, 자기극복, 가볍게 사는것, 영원회귀. 정말 많은 것을 배울수 있었고 영감도 얻을수 있었다.
    `,
  },
  {
    title: `그 많던 싱아는 누가 다 먹었을까`,
    author: '박완서',
    date: '2023.05',
    rating: 4,
    text: `
      작가 본인의 말대로 이걸 소설이라고 할수 있을까라는 생각이 들긴 했지만 일제시대와 근대 사이의 독특한 시대에 위치한 박완서의 삶은 그 자체가 더없이 훌륭한 이야깃거리였다.
      거기다 마치 어제 있었던 일을 들려주는 듯한 생생한 전달력에 굉장히 읽는 맛이 있었다.
    `,
  },
  {
    title: `구의 증명`,
    author: '최진영',
    date: '2023.04',
    rating: 3.5,
    text: `
      초월적인 사랑에 관한 이야기는 수도 없이 있었지만 그것을 죽은 연인을 먹는다는 엽기적인 형태와 동시에 이렇게 먹먹하고 슬프게 표현한 작품은 있었을까?
    `,
  },
  {
    title: `미움받을 용기`,
    author: '기시미 이치로, 고가 후미타케',
    date: '2023.04',
    rating: 2.5,
    text: `
      숱하게 들어봤지만 결국 선물받아서 읽게 된 책.
      알프레드 아들러라는 심리학자에 대해서는 몰랐고, 그의 적잖이 낯설고 흥미로운 이론을 배우게 된 점에 있어서 이 책을 읽은 건 잘한 일이었다는 생각이 들었다.
      하지만 이 책이 내용을 전달하는 방식에 있어서는 많은 문제가 있다.
      먼저 아들러를 프로이트, 융과 함께 세계 3대 심리학자라고 소개하는데, 애초에 세계 3대 심리학자라는 건 이 책 외에서는 듣도보도 못한 것일 뿐더러, 만약 그런게 있다면 아들러는 고사하고 프로이트 대신 반듀라, 스키너, 피아젯 등이 들어가야 할 터였다.
      현시대엔 액면 그대로 받아들이는 사람들도 없는 프로이트의 이론들을 줄기차게 물고 씹고 뜯으니 이런걸 두고 쉐도우 복싱이라고 하는건가 싶었다.
      게다가 '철학자'라고 하는 현자 포지션의 아들러 전문가가 '청년'이라고 하는 사람에게 가르침을 전수하는 구성을 취하고 있는데, 이런 구성 자체가 psychological manipulation의 의도가 없다고 보기 어려워 굉장히 거북함이 들었다.
      그럼에도 이 책이 한국에서 신드롬급의 인기몰이를 한 것은 아마 시대적 상황과 맞물린 것이 크다고 생각된다.
      어찌됐건 이 책의 핵심 메세지 중 하나는 다른 사람이 너를 어떻게 평가하든 신경쓰지 말고 살아가라, 하는 것이고 요즘의 한국만큼 그 코드가 잘 들어맞는 곳은 없으니까.
      책 자체가 별로인 만큼 그런 책이 크게 인기몰이를 했을때 더 흥미로운 것 같고 그 덕분에 사회적인 흐름을 이해할수 있는 부가적인 효과도 있는것 같다.
    `,
  },
  {
    title: `Factfulness`,
    author: 'Hans Rosling, Ola Rosling, Anna Rosling Rönnlund',
    date: '2023.03',
    rating: 4.5,
    text: `
      이 책을 읽고나서 세상을 바라보는 시선이 바뀌었고, 대부분의 다른 사람들도 그럴 것이다.
      어째서 절대다수 사람들의 세상을 바라보는 시선이 실제 현실에 비해 많이 뒤틀려 있는지를 인간 본성과 심리에 의거해서 소개하며, 조금 더 세상을 이성적으로 바라볼수 있는 10가지 방안을 제시한다.
      분명히 조금 편협한 시선이 존재하고 의문스러운 점이 없진 않지만 완전히 다른 각도의 시선은 언제나 환영이고, 거기에다 그것이 탄탄한 데이터와 논리로 뒷받침되어 있다면 그것이 바로 훌륭한 책이 아닐까.
      이 책이 바로 그런 책이다.
    `,
  },
  {
    title: `작별인사`,
    author: '김영하',
    date: '2023.03',
    rating: 3.5,
    text: `
      인간처럼 생각하고 인간과 같은 신체를 가지고 있는 휴머노이드는 인간과 다르다고 할수 있을까? 인간의 배아를 복제시켜 탄생한 클론은 인간과 다르다고 할수 있을까?
      경계는 어디에도 없고, 결국 의식이란 무엇인가에 대한 물음으로 이어지지만, 작품 내에서 선이는 의식 중에도 이야기가 있는 의식과 이야기가 없는 의식이 있다고 말한다.
      수많은 질문을 던지는 작품이지만 전체적으로 그 질문들에는 통일성이 있다. 그리고 인류의 미래는 이 질문들에 어떤 답을 내놓느냐에 달려있다고 해도 과언이 아니다.
    `,
  },
  {
    title: `전쟁일기`,
    author: '올가 그레벤니크',
    date: '2023.02',
    rating: 3.5,
    text: `
      전쟁은 죽음이다. 내가 하루하루 신경쓰고 걱정하고 매달리는 일들이 전쟁 앞에서는 모두 의미를 잃게 된다는 점에서 그렇다.
      또한 피난을 위해 겨우 구한 택시기사가 10분 후에 오겠다고 했기 때문에 "내 인생 35년을 모두 버리는데 고작 10분밖에 주어지지 않았다"는 점에서 그렇다.
      8천킬로미터 떨어진 곳의 전쟁은 내게 겨우 기름값이 올라가는 것을 의미했을지 몰라도 이 일기는 그녀의 이름, 남편과 생이별해야 했던 것, 그녀의 아이들이 피난소의 벽에 '평화'라고 쓴것, 그리고 지금 이 시간에도 일어나는 일들이라는것을 일깨워주었다.
      그림의 양이 많고 텍스트의 양이 굉장히 적은데다 대부분 사실들을 나열한 일기형식이지만 전쟁이라는 특수한 상황이 부여하는 감정의 농도는 글로 이루 다 표현할수가 없다.
    `,
  },
  {
    title: `차라투스트라는 이렇게 말했다`,
    author: '프리드리히 니체',
    date: '2023.02',
    text: `
      꾸준히 책을 읽으니까 결국 이 책을 읽는 날도 오는구나 싶었다.
      예상한대로 너무 어려웠는데 안그래도 어려운 철학사상을 온갖 난해한 비유로 한겹 더 싸놓아서 이중으로 어려웠다.
      고백컨대 이 책에 대해서는 읽고나서 해설을 좀 찾아보았다.
      힘에의 의지나 영원회귀 사상 같은 경우에는 그저 흥미로운 통찰이라는데서 생각이 그쳤지만 초인사상은 내게 조금더 의미하는 바가 컸다.
      이 책에서 이야기하는 '말인'이 너무 나에 해당한다는 생각이 들었지만 그래도 초인은 창조하는 자여야 한다는 점에서 내가 지향하는 점이 같았다.
      따로 해설서를 한권 읽을까 진지하게 고민중이다.
    `,
  },
  {
    title: `달러구트 꿈 백화점 1,2`,
    author: '이미예',
    date: '2023.01',
    rating: 3,
    text: `
      꿈을 파는 백화점이라니, 생각만 해도 재밌고 영감을 많이 줄것 같아 한국에 있었을때 샀다.
      상상력 가득한 설정에 기반해서 옴니버스식 에피소드들도 완성도가 좋았고 문장력도 처녀작인 셈을 감안하면 뛰어났으나 불필요하고 늘어지는 묘사들 때문인지 이상하게 2권쯤 되니 지루하다는 느낌이 들었다.
    `,
  },
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
