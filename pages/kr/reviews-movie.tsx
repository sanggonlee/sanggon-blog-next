import Layout from '../../components/Layout';
import ReviewList from '../../components/ReviewList';
import { krNavigationLinks } from '../../lib/navigation';

const reviews = [
  {
    title: '남한산성 (2017)',
    date: '2021.12',
    poster:
      'https://upload.wikimedia.org/wikipedia/ko/0/0b/%EB%82%A8%ED%95%9C%EC%82%B0%EC%84%B1_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
    rating: 3.5,
    text: `그런대로 재밌게 봤다. 조금 전형적인 사극의 느낌이 있긴 했지만 무능하고 이기적인 지배층과 충신의 대립 뿐만 아니라 충신과 충신의 대립이 주를 이루었다는 점에서는 조금 새로웠다.`,
  },
  {
    title: 'Spider-Man: No Way Home (2021)',
    date: '2021.12',
    poster:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg',
    rating: 3,
    text: `한마디로 레퍼런스로 떡칠을 한 영화. 스파이더맨 팬들에겐 최고의 영화겠지만 그와 동시에 팬서비스 이상의 것은 거의 없는 영화. 레퍼런스 나올때마다 팬들이 호들갑 떠는거 꼴뵈기 싫어서 이러는건 아님.`,
  },
  {
    title: 'Dune (2021)',
    date: '2021.11',
    poster:
      'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
    rating: 3.5,
    text: `일단 스케일과 배경을 퀄리티 있게 구현해냈다는 점이 큰 매력으로 다가왔다. 연춛도 좋았고 재미도 있었지만 이상하게 크게 여운이 남지는 않았다.`,
  },
  {
    title: 'The Pursuit of Happyness (2006)',
    date: '2021.09',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/8/81/Poster-pursuithappyness.jpg',
    rating: 3.5,
    text: `실화바탕이라는 것이 중심적인 역할을 해준 영화. 1980년대 까딱하면 거리에 내몰릴 흑인 서민층의 삶을 보는것은 정말 흡입력이 있었고 도저히 믿기 어려운 크리스 가드너의 성공신화는 오직 실화였기에 생명력을 얻었다. 기대했던 것만큼은 아니었지만 재밌게 봤다.`,
  },
  {
    title: 'Shang-Chi and the Legend of the Ten Rings (2021)',
    date: '2021.09',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg/220px-Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg',
    rating: 3.5,
    text: `꽤 재밌게 봤다. 액션영화로써의 액션은 충분히 보여준것 같고 그래픽도 좋았다. 유머요소도 괜찮았다.`,
  },
  {
    title: '제8일의 밤 (2021)',
    date: '2021.09',
    poster:
      'https://t1.daumcdn.net/movie/8606d47d1447d6c8f77e9dfe91aba7ce53c09488',
    rating: 3,
    text: `설정도 정교하지 않고 연출도, 플롯도 평타정도만 치는 수준. 완성도가 높은 영화라고 할수는 없지만 오컬트 영화를 좋아하는지라 나름 재밌게 봤다.`,
  },
  {
    title: '모가디슈 (Escape from Mogadishu) (2021)',
    date: '2021.08',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg/220px-Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg',
    rating: 3.5,
    text: `      재밌게 봤다. 소재도 좋았고 현장감을 정말 잘 살린점이 인상적이다. 남북분단을 소재로 활용한 것은 조금 식상한 면이 있었지만 감정선을 과하지 않게 처리한 점이 마음에 들었다.`,
  },
  {
    title: '셔터 (Shutter) (2004)',
    date: '2021.08',
    poster:
      'https://resizing.flixster.com/fPOAUM2K2MTyiWGpUdltM3kNl0Q=/206x305/v2/https://flxt.tmsimg.com/assets/p177092_p_v10_ab.jpg',
    rating: 3.5,
    text: `다 보고나서 든 생각은 듣던거보다 무섭지 않은데? 였지만 그날밤 자다가 설핏 깼을때 잠을 설치게 만들 정도로는 충분했다. 이렇게 오래전에 나온 영화인줄도 몰랐다. 꽤 잘 만든 공포영화.`,
  },
  {
    title: '양들의 침묵 (The Silence of the Lambs) (1991)',
    date: '2021.08',
    poster:
      'https://images.fathomevents.com/image/upload/w_360,dpr_1.5/fl_attachment/v1617643589/Events/2021/1513/Silence_ofthe_Lambs_1000x1480_Fathom_Website.jpg.jpg',
    rating: 3.5,
    text: `      재밌게 봄. 매력적인 악역이라는 것의 전형을 보여준 영화. 꽤 오래전 나온 영화지만 몰입도는 최고다. 이 영화를 따라해서 지금은 클리셰가 되버린 것들도 보였다.`,
  },
  {
    title: 'Black Widow (2021)',
    date: '2021.07',
    poster:
      'https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_disneyplus_21043-1_63f71aa0.jpeg',
    rating: 3,
    text: `무난했던 액션영화. 재밌게 봄. 특별히 인상적이었던 부분은 없는듯.`,
  },
  {
    title: 'The Woman in Black (2012',
    date: '2021.07',
    poster: 'https://flxt.tmsimg.com/assets/p8694014_p_v13_al.jpg',
    rating: 2.5,
    text: `초반부엔 조금 무서웠는데 중반부부터 너무 안무서워서 놀람. 결말도 난해하다기보다는 이상하다는 느낌.`,
  },
  {
    title: '노인을 위한 나라는 없다 (2007)',
    date: '2021.07',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg',
    rating: 3,
    text: `      어려운 영화였다. 흥미위주의 영화라고 볼수는 없었고 메세지가 있는것 같긴 했는데 모호했다. 여러가지로 관념의 경계를 타파하면서 봐야하는 영화인가 싶기도 했다.`,
  },
  {
    title: 'Arrival (2016)',
    date: '2016.11,2021.06',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg',
    rating: 5,
    text: `감히 인셉션, 매트릭스에 비견하고 싶은 작품이다. 보면서 황홀함을 느꼈던 손꼽히는 영화였고 내가 유일하게 두번 본 영화이기도 하다.`,
  },
  {
    title: 'The Imitation Game (2014)',
    date: '2021.06',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_.jpg',
    rating: 3.5,
    text: `재밌게 봤다. Computer Science 전공한 사람으로써 Alan Turing을 모를수는 없었지만 배경같은건 잘 몰랐고 개인의 생애에 대해서도 몰랐는데 덕분에 조금 알수 있게 되었다. 극적인 효과를 위해서 여기저기 양념을 친 티가 나긴 했다.`,
  },
  {
    title: 'Run (2020)',
    date: '2021.06',
    poster: 'https://upload.wikimedia.org/wikipedia/en/4/45/Run_poster.jpeg',
    rating: 3,
    text: `재밌게 봤다. 뒤로 갈수록 더 심장을 쫄깃하게 만드는 연출은 좋았는데 분명 어디선가 본듯한 플롯과 소재여서 신선함은 전혀 없었다.`,
  },
  {
    title: 'The Invisible Guest (2016)',
    date: '2021.06',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/6/6e/Contratiempo_poster.jpg',
    rating: 3.5,
    text: `잘 만들어진 영화다. 나는 이런류의 관객을 농락하는 영화를 좋아한다. 플롯의 (액자식) 구성 자체를 꼬아서 반전의 요소로 활용한 것이 재미있다.`,
  },
  {
    title: '범죄와의 전쟁 (2012)',
    date: '2021.06',
    poster:
      'https://upload.wikimedia.org/wikipedia/ko/4/48/%EB%B2%94%EC%A3%84%EC%99%80%EC%9D%98_%EC%A0%84%EC%9F%81%2C_%EB%82%98%EC%81%9C%EB%86%88%EB%93%A4_%EC%A0%84%EC%84%B1%EC%8B%9C%EB%8C%80_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
    rating: 3.5,
    text: `재밌게 봤다. 건달세계에서의 비열함과 한국사회에 깊이 뿌리박은 혈연문화를 잘 보여줬고 달콤쌉싸름한 결말도 나쁘지 않았다.`,
  },
  {
    title: '이웃집 토토로 (1988)',
    date: '2021.05',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg',
    rating: 4.5,
    text: `나는 동심에 대한 깊은 향수를 가지고 있다. 환상과 현실, 꿈을 넘나들며 이야기를 전하는 방식은 지브리 스튜디오 초창기 작품인데도 굉장히 완성도가 높아 지브리의 장인정신을 보여준다. 넷플릭스에 떠서 이제야 보게된 오래된 작품이지만 30년 후에도 전해주는 그 감동은 전혀 바래지 않았다.`,
  },
  {
    title: 'Oxygen (2021)',
    date: '2021.05',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMWQ3N2EzNjYtMzgwYS00YjdmLThmOTUtMzc4NDUxZjZkY2RhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    rating: 3,
    text: `베리드(Buried)라는 수작이 강한 기억을 남겨서인지 자꾸 너무 비슷한 부분이 많다는 생각이 들었다. 베리드에서 폐쇄공간이 주는 압박감에 숨이 막힐 정도였다면 여기선 인공지능이 답답해서 숨이 막힌다. 반전에 너무 힘을 줘서 오히려 그 효과가 반감되는 느낌이 있었고 개연성도 조금 떨어져서 아쉬웠지만 플롯 자체는 나쁘지 않았다.`,
  },
  {
    title: 'The Vast of Night (2019)',
    date: '2021.05',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/2/2a/The_Vast_of_Night_poster.jpg',
    rating: 3,
    text: `나쁘지 않았는데 끝부분의 연출이 좀 아쉬웠다. 카메라를 고정해놓고 찍는 롱테이크씬이 많았는데 이건 탁월한 선택이었다고 생각했다. 플롯은 크게 신선한 부분은 없다.`,
  },
  {
    title: 'The Block Island Sound (2020)',
    date: '2021.05',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjM3NDg0ODQtMGQ5NC00ZmQ4LTk3ZDItYzExNmZhYmNmZTU3XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg',
    rating: 3.5,
    text: `코즈믹 호러를 다룬 영화는 그리 많지 않고, 잘 연출하기는 더 어렵다. 공포 자체보다는 서사를 이끌어가는 미스테리에 점수를 더 주고싶다. 재밌었다.`,
  },
  {
    title: 'Soul (2020)',
    date: '2021.04',
    poster:
      'https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg',
    rating: 4.5,
    text: `픽사 애니메이션들은 왠만해선 실망시키진 않는듯. 삶은 꿈이 아니다. 가벼운 느낌으로 다가오지만 본질주의와 실존주의에 대한 깊은 고찰을 다룬다. 또한 깊게 생각하고 보지 않아도 이야기만으로도 재밌다.`,
  },
  {
    title: 'Sound of Metal (2019)',
    date: '2021.04',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMWU0NmI2NDMtYTBmYy00YzE5LTlhMDQtMWZkYzljMjMyZDZjXkEyXkFqcGdeQXVyNjM5MDU2NTk@._V1_FMjpg_UX1000_.jpg',
    rating: 3.5,
    text: `재밌게 봄. 청각 장애를 가지고 있는것이 어떤 느낌이고 그것이 어떻게 결함이 아닐수도 있는지를 관객에게 이해시키기 위해 들인 노력이 돋보이는 작품. 다만 과거나 배경을 설명하는데에 있어서 약간 불친절함은 있었다.`,
  },
  {
    title: '미드소마 (2019)',
    date: '2021.04',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Midsommar_%282019_film_poster%29.png/220px-Midsommar_%282019_film_poster%29.png',
    rating: 3.5,
    text: `기괴하다. 공포로의 접근방식이 상당히 새롭다. 초반부의 카메라 기법같은건 과감했지만 잘 모르는 내가 보기로는 어려웠다. 배경, 등장인물, 소품까지 공포와 대조되는 모든 요소들로 어떻게 오히려 더 공포를 불러일으킬수 있는지 잘 보여준 작품.`,
  },
  {
    title: '그랜드 부다페스트 호텔 (2014)',
    date: '2021.03',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg',
    rating: 3,
    text: `플롯과 메세지가 왠지 잘 융화되지 못한 느낌이라 플롯은 흥미롭기엔 조금 부족했고 메세지는 내겐 조금 어려웠다. 미장센은 정말 좋았다. 연출방식이 굉장히 옛날 티비프로를 보는것 같은게 있었지만 세련되게 다듬어져서 보는 즐거움이 있었다.`,
  },
  {
    title: '피아니스트의 전설 (The Legend of 1900) (1998)',
    date: '2021.03',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMzIwOTdmNjQtOWQ1ZS00ZWQ4LWIxYTMtOWFkM2NjODJiMGY4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_.jpg',
    rating: 4.5,
    text: `최근 1-2년 내에 본 영화중에서는 최고인듯. 3시간 가까이 되는 러닝타임이 전혀 길게 느껴지지 않는다. 배 안에서 태어나서 평생동안 한번도 땅을 밟아본적 없는 사람이 바라보는 세상은 어떤 느낌일까. 기억에 많이 남을것 같은 작품.`,
  },
  {
    title: '승리호 (Space Sweepers) (2021)',
    date: '2021.02',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZTUxN2M3ZWYtMzc1MC00NTc4LWFhZDItMzViZDg2NmFjMzBhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
    rating: 2,
    text: `한국의 SF 기술력이 이정도까지 발전했다는 것을 보여준 것에 이 영화의 유일한 의의가 있는듯. 여기저기 클리셰 범벅에다 한국영화 특유의 눈물 짜내기까지. 우주 액션신도 몰입도가 떨어진다.`,
  },
  {
    title: 'Ex Machina (2014)',
    date: '2021.02',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_.jpg',
    rating: 3.5,
    text: `재밌게 봄. 전체적으로 3명의 등장인물에 빠르지 않은 페이스로 이야기를 응집도 있게 풀어냈다. 영화에서 구현된 AI는 실제 기술발전과 상당히 거리가 있지만 그럼에도 위화감이 들지 않고 이런식의 AI도 머지않아 나올수도 있을거라는 생각이 들게 한다.`,
  },
  {
    title: 'I Origins (2014)',
    date: '2021.01',
    poster: 'https://flxt.tmsimg.com/assets/p10704263_p_v10_ar.jpg',
    rating: 4,
    text: `꽤 여운이 강하게 남았던 영화. 소재 자체가 일단 굉장히 매력적이고 전체적으로 가라앉은 분위기인데도 불구하고 전개방식이 흥미진진하고 몰입력이 있다.`,
  },
  {
    title: 'The Invisible Man (2020)',
    date: '2020.12',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/3/3a/The_Invisible_Man_%282020_film%29_-_release_poster.jpg',
    rating: 3.5,
    text: `재밌게 봄. 미스터리로 긴장감을 빌드업시키는 방식이 좋았음. 흠이라면 후반부에 절정으로 치닫기 전인데도 주인공이 사회적 고립에서 벗어나서 공포감이 많이 옅어졌고 그래서 영화가 의도하는 긴장감의 리듬과 관객이 느끼는 리듬이 싱크가 안맞음.`,
  },
];

export default function KrReviewsMovie() {
  return (
    <Layout navigationLinks={krNavigationLinks}>
      <ReviewList reviews={reviews} />
    </Layout>
  );
}
