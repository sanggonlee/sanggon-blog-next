import Layout from '../../components/Layout';
import ReviewList from '../../components/ReviewList';
import { krNavigationLinks } from '../../lib/navigation';

const reviews = [
  {
    title: "Inside Out 2 (2024)",
    date: '2024.06',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/220px-Inside_Out_2_poster.jpg',
    rating: 4,
    text: `
      한 사람의 감정선을 따라가는 것에 있어서 문자 그대로 감정들을 보여주는 것만큼 직관적으로 묘사할수 있는 방법이 또 있을까?
      인사이드 아웃 1이 심리학의 중요한 부분들을 기발하고 재밌는 상상력으로 빚어낸 좋은 작품이었는데 그 점을 잘 계승한 작품이었다.
      라일리라는 한 사람의 인생을 따라가는 시리즈들이 계속 나오지 않을까 생각한다.
    `,
  },
  {
    title: "The Notebook (2004)",
    date: '2024.04',
    poster:
      'https://m.media-amazon.com/images/M/MV5BN2I3ZmRjODAtMjBiNy00ZmEwLWEzZjItZjM4NGZhNGYyNTA0XkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_.jpg',
    rating: 3.5,
    text: `
      재밌게 봤다. 사실 부잣집 딸과 가난한 청년의 사랑은 너무나 닳고 닳은 소재이지만 그럼에도 매번 통할수 밖에 없는 소재인듯도 하다.
    `,
  },
  {
    title: "파묘 (2024)",
    date: '2024.03',
    poster:
      'https://newsimg.sedaily.com/2024/03/12/2D6LVKWGAX_1.jpg',
    rating: 3.5,
    text: `
      묘를 파헤친다는 행위인 파묘라는 섬뜩한 소재로 미스터리를 몰아가는 초중반 연출이 정말 좋았다. 중후반에서 약간 삼류영화 느낌도 나고 좀 뻔하게 느껴지는 부분이 있어서 초반과 대비되는 면이 컸다.
    `,
  },
  {
    title: "Dune: Part Two (2024)",
    date: '2024.03',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Dune_Part_Two_poster.jpeg/220px-Dune_Part_Two_poster.jpeg',
    rating: 4,
    text: `
      듄 1편을 봤을때 생각나는 것이 훌륭한 영상미였다면 이번 파트2는 그에 더해 전반적으로 더 세심한 연출로 전달력이 더 좋았다. 원작을 읽어보지는 않았지만 이보다 더 어떻게 잘 구현할수 있을까 싶다.
    `,
  },
  {
    title: "Margin Call (2011)",
    date: '2024.02',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjE5NzkyNDI2Nl5BMl5BanBnXkFtZTcwMTYzNDc2Ng@@._V1_.jpg',
    rating: 3.5,
    text: `
      좋은 몰입도과 높은 현실감. 재밌었다.
    `,
  },
  {
    title: "Talk to Me (2022)",
    date: '2024.01',
    poster:
      'https://images.ctfassets.net/22n7d68fswlw/4ywI5B98p5hNQMeccOXrpj/ac7e14aae8571476c35374cfd9b3beba/TalkToMe_VOD_Poster.jpg',
    rating: 3.5,
    text: `
      상당히 흡입력 있는 영화였다. 클리셰는 조금 있었지만 그래도 전체적으로 뻔한 전개는 아니었고 재밌게 봤다.
    `,
  },
  {
    title: "Don't Look Up (2021)",
    date: '2023.12',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNzk0OWQzMDQtODg1ZC00Yjg2LWJjYzAtNGRjMjE2M2FlYjZjXkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_.jpg',
    rating: 3.5,
    text: `
      블랙 코미디이고 그런 맥락에서 영화의 내러티브는 분명히 과장된 톤이 들어가 있지만 실제 인류가 갑자기 종말론적인 위기에 놓인다고 해도 이후 벌어질 일은 크게 다르지 않을것 같고 그 점이 공포스럽게 다가온다.
    `,
  },
  {
    title: 'Her (2013)',
    date: '2023.11',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg',
    rating: 3.5,
    text: `
      재밌게 봤다. 기대했던 것만큼 독창적인 영화라고는 생각되지 않았다.
      이 영화에서 상당히 포지션을 잘 잡은것은 주인공이 사회 부적응자같은 것이 아닌, 상당히 매력적인 캐릭터로 그려졌고 그런 사람이 AI와 사랑에 빠졌다는 점이다.
    `,
  },
  {
    title: 'The Creator (2023)',
    date: '2023.10',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDUyNTIzNDQtYTZmMi00M2FlLTgyZjUtYWViZWNhMDYzMjE4XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
    rating: 3.5,
    text: `
      그런대로 재밌게 봤다. 플롯이 전형적인 헐리우드의 방식을 따르고 있고 서사도 하나하나 따져보면 어느것 하나 새로운게 없지만 그럼에도 여전히 헐리우드의 공식은 통한다는걸 보여주는듯 하다.
    `,
  },
  {
    title: '브로커 (2022)',
    date: '2023.07',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/4/41/Broker_%282022_film%29.jpg',
    rating: 4.5,
    text: `
      고레에다 히로카즈는 빛을 참 잘쓰는 감독이라는 생각이 들었다. 미장센이 단연 압권이다. 특히 대관람차씬은 잊을수가 없다.
    `,
  },
  {
    title: '길복순 (2023)',
    date: '2023.07',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Kill_Boksoon.jpg/220px-Kill_Boksoon.jpg',
    rating: 3,
    text: `
      아무 생각없이 보면 재밌게 볼수 있는 영화인것 같고 실제로도 그런 의도로 제작되었을수도 있겠지만 그럼에도 뭔가 미묘한 것이 있다는 인상을 지울수 없었다.
      가령 킬러들의 세계가 일반인이 쉽게 이해할수 없는 것이라고 해도 캐릭터들이 너무 가볍게 느껴지는 것과 상황과의 간극에서 오는 일종의 판타지가 만들어내는 위화감?
    `,
  },
  {
    title: 'Dungeons & Dragons: Honor Among Thieves (2023)',
    date: '2023.07',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/0/03/Theatrical_poster_for_Dungeons_and_Dragons%2C_Honor_Among_Thieves.jpg',
    rating: 3.5,
    text: `
      재밌게 봤다. 플롯은 뻔한것 같으면서도 뻔하지 않은것 같았다가 뻔했지만 D&D 세계관의 톡톡 튀는 설정들과 세계관 연출을 보는 것만으로도 즐거움이 있었다. 코미디도 좋았음.
    `,
  },
  {
    title: 'Coherence (2013)',
    date: '2023.06',
    poster:
      'https://resizing.flixster.com/KE2obuYCV6mRcnA1Ap4ic1pYi2A=/206x305/v2/https://flxt.tmsimg.com/assets/p10678538_p_v8_ak.jpg',
    rating: 3,
    text: `
      초반부가 조금 엉뚱한 이유로 정말 좋았는데 뭔가 지극히 서양인스러운 파티를 볼수 있었기 때문이다. 플롯도 좋았고 연출도 좋았지만 이상하게도 소재가 조금 식상하게 느껴졌다.
    `,
  },
  {
    title: 'Donnie Darko (2001)',
    date: '2023.05',
    poster:
      'https://resizing.flixster.com/Lmz185ZcvAqNcdNNv0JBnbnTfOY=/206x305/v2/https://flxt.tmsimg.com/assets/p27378_p_v8_aq.jpg',
    rating: 3.5,
    text: `
      재밌게 보긴 했지만 조금 어려웠고 메세지도 조금 모호했다. 좋은 의미로 머릿속을 혼란스럽게 했던 영화였다.
    `,
  },
  {
    title: 'The Ninth Gate (1999)',
    date: '2023.04',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYWMwM2E4MGEtMGMwNy00ODdlLWJkMGYtMDQzNTBlMDZhZTllXkEyXkFqcGdeQXVyOTM3NjgzNTE@._V1_.jpg',
    rating: 3.5,
    text: `
      그런대로 재밌게 봤다. 오컬트적인 부분을 더 기대했는데 그보다는 스릴러가 주류를 이룬다.
    `,
  },
  {
    title: 'The Unholy (2021)',
    date: '2023.04',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/b/b2/The_Unholy_2021_Film_Poster.png',
    rating: 2,
    text: `
      초반엔 그러려니 하고 봤는데 후반으로 갈수록 허접한 연출과 연기, 식상한 플롯 등 그냥 별로였던 영화.
    `,
  },
  {
    title: '헤어질 결심 (2022)',
    date: '2023.04',
    poster:
      'https://upload.wikimedia.org/wikipedia/ko/c/c6/%ED%97%A4%EC%96%B4%EC%A7%88_%EA%B2%B0%EC%8B%AC_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
    rating: 3.5,
    text: `
      나는 박찬욱의 영화가 좋다. 조금 어려웠지만 색감이 강렬하게 기억에 남는다.
    `,
  },
  {
    title: 'The Menu (2022)',
    date: '2023.01',
    poster:
      'https://i.ytimg.com/vi/LpUbk70YZd8/movieposter_en.jpg',
    rating: 3.5,
    text: `
      쉽사리 이해되지는 않았지만 신선함과 메세지에 점수를 주고싶다. 
    `,
  },
  {
    title: 'Everything Everywhere All at Once (2022)',
    date: '2022.12',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg',
    rating: 4,
    text: `
      가볍지 않은 주제를 코미디와 기발한 설정, 액션으로 굉장히 잘 버무렸다.
    `,
  },
  {
    title: 'Christmas With You (2022)',
    date: '2022.11',
    poster:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcsOQ0IJOSZn3W_35Hq4AYMiNQoPdAe89inJR03te1u8Bnh-NkkhXQkzFHDsyyQ8DsfQgszGQvB5JR0gL-FTANnUFtWdIr3-1zECwfHbu5yHd49tgRyk2Yit81AaddbvXHTJUAr80Elu1vpY0Aj9imdvWd5GX18BmLMsNuhSzLM_T6k83mMWi0w3NjKQ/s585/ChristmaswithYou.JPG',
    rating: 1.5,
    text: `
      난 크리스마스 영화에서 뭘 기대했던 걸까?
    `,
  },
  {
    title: 'Hellhole (2022)',
    date: '2022.11',
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlYjMisjmHQ8fgMtp1S9n0AGeN19UDpcdSgPCB8bvFrJA3993vSfYPN2PW_jKndbC260&usqp=CAU',
    rating: 3.5,
    text: `
      좀 기분나쁜 내용들이 있긴 했지만 후반부가 뻔하지 않아서 좋았다. 재밌게 봤다.
    `,
  },
  {
    title: 'Moonfall (2022)',
    date: '2022.10',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmVkMDhiYjgtNjQxMC00NzA4LWFmYTAtNTgxODc3MDQxMjk4XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
    rating: 3.5,
    text: `
      달이 지구에 충돌한다는 전무후무한 설정으로 지구의 물이 달의 중력에 빨려들어가는 와중에 발사되는 로켓 등의 멋지고 유니크한 장면들이 연출되었다.
      거기에 Sci-fi 미스터리까지 끼얹어서 꽤 재밌게 봤다. 단점이라면 씬들이 너무 빨리빨리 지나가서 감정이 빌드업될 시간이 부족했다.
    `,
  },
  {
    title: 'R.R.R (2022)',
    date: '2022.09',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/220px-RRR_Poster.jpg',
    rating: 3,
    text: `
      인도의 발리우드 영화들에는 일정한 공식이 있는듯하다.
      명확히 대비되는 선과 악. 어이없어서 웃음이 나올정도로 초인적인 주인공들. 마지막을 예외없이 장식하는 떼춤.
      나름 재밌게 봤다. 인도의 영국에 대한 반감이 이렇게 적나라한게 표현된것은 처음 봤다.
    `,
  },
  {
    title: '옥자 (2017)',
    date: '2022.09',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/f/f6/Okja.png',
    rating: 3.5,
    text: `
      동물보호단체와 미자가 그렇게 몸을 던져 노력했음에도 불구하고 결국 옥자를 구해내는건 황금이다.
      그마저도 옥자 단 하나만 구해냈을뿐, 다른 수많은 수퍼돼지들은 도살장에 남음으로써 수퍼돼지 양식이 본격화될것임을 암시한다.
      돈을 위해 수퍼돼지를 사육했고 미자는 동물보호엔 별로 관심이 없지만 옥자를 구하기 위해 그들이 하는 게임에 동참한 셈이다.
      굴복했다는 표현이 맞는 것일지는 모르겠다.
      결말부분엔 너무 슬펐고 그건 영화의 슈퍼돼지를 닭이나 돼지같은 일반가축으로 대입해도 변함이 없겠지만, 나는 감독이 비인도적인 동물사육보다 더 궁극적으로 자본주의에 대해 말하고 싶었다고 생각한다.
    `,
  },
  {
    title: 'Incantation (2022)',
    date: '2022.08',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/b/b5/Incantation_%28film%29.jpeg',
    rating: 4.5,
    text: `
      굉장히 재밌게 봤다. 설정도 좋았고 충격적인 반전과 연결시킨 연출기법, 미스터리 요소가 특히 마음에 들었다. 여운이 꽤 오래 남는다.
    `,
  },
  {
    title: 'The Dark Tower (2017)',
    date: '2022.07',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/4/49/The_Dark_Tower_teaser_poster.jpg',
    rating: 2,
    text: `
      이게 뭘까 싶었던 영화. 다크 판타지 설정, 플롯, 액션 뭐 하나 제대로 담아낸 것이 없었다. 설정이 생소하면 전달이라도 제대로 해야하는데 그러지 못했고, 플롯은 식상 그 자체였으며 액션은 절정부분 딱 하나정도가 간신히 평타 친 수준. 
    `,
  },
  {
    title: '마녀 Part 2: The Other One (2022)',
    date: '2022.07',
    poster: 'https://dimg.donga.com/wps/NEWS/IMAGE/2022/05/16/113415337.2.jpg',
    rating: 3.5,
    text: `
      재밌다. 재밌어! 서사구조, 흥행공식 등은 개나 줘버린 작품이고 유머요소도 어설프지만 그래도 재밌다. 마녀 1편을 꽤 재밌게 봤었기 때문에 나름 기대했던 작품이었는데 크게 새로운 느낌은 없었다.
    `,
  },
  {
    title: 'Top Gun: Maverick (2022)',
    date: '2022.06',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmIwZDMyYWUtNTU0ZS00ODJhLTg2ZmEtMTk5ZmYzODcxODYxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg',
    rating: 4,
    text: `
      정말 재밌게 봤다. 액션성이 많이 높은 영화들은 판타지성 영화들이었던지라 (미션임파서블, 007 등) 미 공군 이야기라는게 오히려 적응이 안됐달까. 플롯, 연출 등 전부 따봉이었던 영화.
    `,
  },
  {
    title: 'Saw (2004)',
    date: '2022.05',
    poster:
      'https://lionsgate.brightspotcdn.com/d6/db/61660ed04791889f139fca4ab595/saw-1-movies-he-poster-01.jpg',
    rating: 3.5,
    text: `
      워낙 좋은 이야기를 많이 들어서 기대하고 봤는데 그정도는 아니었다. 반전도 중간반전은 쉽게 예상할수 있는 정도였지만 몰입도는 정말 좋았음.
    `,
  },
  {
    title: 'Source Code (2011)',
    date: '2022.04',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/e/e5/Source_Code_Poster.jpg',
    rating: 3.5,
    text: `
      재밌게 봄. 미국스러운 영화다 라는 느낌이 많이 들었음.
    `,
  },
  {
    title: '젊은이의 양지 (2019)',
    date: '2022.04',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNzUyNWVhMWYtYWYxYy00YWUzLWE3ZjEtYTBhMzU0ZWIzZTMyXkEyXkFqcGdeQXVyNzA3ODUyNzY@._V1_.jpg',
    rating: 4,
    text: `
      어디서부터 잘못된 것일까. 혹은 누구의 잘못일까. 영화에서 비극을 초래하는 모든 사람들이 또한 비극의 희생자다. 몇번 울었다.
      처음으로 감독과의 대화 행사에서 본 영화. 감독과의 질답에서 감독이 직접 말한대로 영화 제목 "젊은이의 양지"는 역설적이다. 이 영화에서 젊은이의 양지는 없기 때문이다.
      영화의 상황과 배경이 너무 과장된것이 아닐까 생각이 들었지만 행사 관객중에 이런 콜센터에서 일했던 사람이 있었고 전혀 과장이 아니라고 증언해주었다.
    `,
  },
  {
    title: '랑종 (2021)',
    date: '2022.03',
    poster:
      'https://w.namu.la/s/2df291471786eddab777fc94d47fe4dcb6aea61b1a9004bc3298936f43e701be09bd688c61a0d38a3a177f3c15b21a560725b6b33bb5232409a38d0b9de5f33acebd880a0976aae96d44848c81893f5ecba1656081577344f07f4f95168db19e',
    rating: 3.5,
    text: `돈을 내고 보려고 해도 어디서도 볼 방법이 없어서 못보고 있었는데 드디어 이번에 볼수 있었다. 
      초중반 무서운 장면이 전혀 없는데 페이크 다큐 형식으로 실제 무당, 신내림을 취재하는 듯한 연출 덕분에 흥미진진하게 볼수 있었다. 
      제일 무서웠던 부분은 단연 설치해놓은 카메라 영상이었지만 많이 무섭지는 않았다. 재밌게 봤다.`,
  },
  {
    title: '완벽한 타인 (2018)',
    date: '2022.03',
    poster:
      'https://ww.namu.la/s/3818a261819d3b6ca3be1026449f9e0318cea12ce510d17babbd09e81474a3815036d2fbc5058bc5b0f524e169db64f9aaf7a50216137371c24eeff3e9a9b141c4d281db67219f7051046799db1c184e1a782f8b7e2162922b6ff9abc1269e99',
    rating: 3.0,
    text: `소재만으로도 꽤 기대를 했던 작품이었는데 그런대로 재밌게 봤다. 씁쓸하면서도 빵터질만큼 웃긴것을 이번에 처음 경험했다. 플롯도 억지스러운 부분이 있고 구성도 매끄럽지 못하다는 느낌이어서 잘 만든 영화라고는 생각되지 않았다. 이서진 연기가 생각보다 좋아서 놀랐다.`,
  },
  {
    title: '밀양 (2007)',
    date: '2022.03',
    poster:
      'https://upload.wikimedia.org/wikipedia/ko/7/79/%EB%B0%80%EC%96%91_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
    rating: 4.0,
    text: `이런 영화인줄 몰랐다. 전도연의 신들린 연기, 마치 고향인 포항이나 구룡포를 떠올리게 하는 한국의 시골마을 연출도 좋았지만 가장 강렬했던 것은 너무나도 인간적인 한 사람에 대한 심리묘사였다.`,
  },
  {
    title: '원더풀 라이프 (1998)',
    date: '2022.02',
    poster:
      'http://t1.daumcdn.net/movie/9880acedb2d58f87e4c3620746a4dc5af37529e7',
    rating: 4.0,
    text: `창문으로 들어오는 따뜻한 햇살을 배경으로 인터뷰를 하는듯한 씬들이 너무 좋았다. "당신의 인생에서 가장 행복했던 단 하나의 순간만을 골라야 한다면 무엇입니까?" 난 쉽게 정하지 못할것 같다.`,
  },
  {
    title: 'The Summit of the Gods (2021)',
    date: '2022.01',
    poster:
      'https://pics.filmaffinity.com/le_sommet_des_dieux-229611884-large.jpg',
    rating: 4.0,
    text: `산을 오르는 사람들의 이야기는 언제나 경외감을 불러일으킨다. 홀로 산을 오르는 등반가와 그를 찍으려는 사진가의 이야기는 새로우면서도 극적이지만 동시에 시리도록 사실적이다. "한번 경험하고 나면, 세상의 다른 어떤것도 의미를 잃어버려" 라고 하는 하부의 말은 현실세계에 사는 우리들이 산악인이라는 다른 세계에 있는것 같은 사람들의 끄트머리라도 이해하게 해주는 말이 아니었을까 싶다.`,
  },
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
    text: `한마디로 레퍼런스로 떡칠을 한 영화. 스파이더맨 팬들에겐 최고의 영화겠지만 그와 동시에 팬서비스 이상의 것은 거의 없는 영화. 레퍼런스 나올때마다 팬들이 호들갑 떠는거 꼴보기 싫어서 이러는건 아님.`,
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
      'https://upload.wikimedia.org/wikipedia/en/2/28/The_8th_Night_poster.jpg',
    rating: 3,
    text: `설정도 정교하지 않고 연출도, 플롯도 평타정도만 치는 수준. 완성도가 높은 영화라고 할수는 없지만 오컬트 영화를 좋아하는지라 나름 재밌게 봤다.`,
  },
  {
    title: '모가디슈 (Escape from Mogadishu) (2021)',
    date: '2021.08',
    poster:
      'https://t1.daumcdn.net/movie/8606d47d1447d6c8f77e9dfe91aba7ce53c09488',
    rating: 3.5,
    text: `재밌게 봤다. 소재도 좋았고 현장감을 정말 잘 살린점이 인상적이다. 남북분단을 소재로 활용한 것은 조금 식상한 면이 있었지만 감정선을 과하지 않게 처리한 점이 마음에 들었다.`,
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
    text: `재밌게 봄. 매력적인 악역이라는 것의 전형을 보여준 영화. 꽤 오래전 나온 영화지만 몰입도는 최고다. 이 영화를 따라해서 지금은 클리셰가 되버린 것들도 보였다.`,
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
    date: '2021.06,2016.11',
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
    rating: 4,
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
