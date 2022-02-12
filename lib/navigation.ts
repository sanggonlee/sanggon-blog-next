export type NavigationLink = {
  label: string;
  href: string;
};

export const krNavigationLinks: NavigationLink[] = [
  { label: '소설', href: '/kr/stories' },
  { label: '포스팅', href: '/kr/posts' },
  { label: '여행', href: '/kr/trips' },
  { label: '책 리뷰', href: '/kr/reviews-book' },
  { label: '영화 리뷰', href: '/kr/reviews-movie' },
  { label: '음식 리뷰', href: '/kr/reviews-food' },
];

export const enNavigationLinks: NavigationLink[] = [
  { label: 'Tech', href: '/en/tech' },
  { label: 'News', href: '/en/news' },
  { label: 'Others', href: '/en/others' },
];
