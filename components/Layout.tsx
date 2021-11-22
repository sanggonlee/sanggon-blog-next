import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  faGithub,
  faLinkedinIn,
  faMediumM,
} from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavigationLink } from '../lib/navigation';
import { COLORS } from '../lib/styles';
import { Language } from '../lib/types';

export const siteTitle = `Sang-gon's blog`;

type Props = {
  children: React.ReactNode;
  lang?: Language;
  navigationLinks?: NavigationLink[];
};

export default function Layout({
  children,
  lang = 'kr',
  navigationLinks = [],
}: Props) {
  const router = useRouter();
  return (
    <Wrapper>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Sang-gon's blog on software development articles, short stories, thoughts, etc"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <HeaderWrapper>
        <Top>
          <HeaderTitle>
            <Link href={lang === 'kr' ? '/' : '/en'}>Sang-gon's blog</Link>
          </HeaderTitle>

          <LanguageLink>
            {lang === 'kr' ? (
              <Link href="/en">English Blog</Link>
            ) : (
              <Link href="/">한글 블로그</Link>
            )}
          </LanguageLink>
        </Top>
        <LinksWrapper>
          {navigationLinks.map((link: NavigationLink) => {
            const isCurrent = link.href === router.pathname;
            return (
              <LinkWrapper
                key={link.href}
                style={{
                  '--weight': isCurrent ? 'bold' : 'normal',
                }}
              >
                <Link href={link.href}>{link.label}</Link>
                <HighlightIndicator>
                  {/*
                      Let HighlightIndicator still take the width, but render
                      the actual icon only for the current navigation.
                    */}
                  {isCurrent && <FontAwesomeIcon icon={faCircle} />}
                </HighlightIndicator>
              </LinkWrapper>
            );
          })}
        </LinksWrapper>
        <HeaderDivider />
      </HeaderWrapper>
      <MainWrapper>
        <ChildWrapper>{children}</ChildWrapper>
      </MainWrapper>
      <Footer>
        <HeaderDivider />
        <SocialLinks>
          <a href="https://github.com/sanggonlee" target="_blank">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/in/sanggonlee/" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://medium.com/@sanggon" target="_blank">
            <FontAwesomeIcon icon={faMediumM} />
          </a>
        </SocialLinks>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const HeaderWrapper = styled.header`
  flex: 0 0;
  color: ${COLORS.primary};
  padding: 2rem;
  padding-left: 4rem;
  font-family: Sans-serif;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  padding-bottom: 1rem;
  padding-left: 2rem;
`;

const LanguageLink = styled.div`
  text-align: right;
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
`;

const LinksWrapper = styled.div`
  font-size: 1rem;
  margin-top: 1rem;
  padding-left: 2rem;

  & > * {
    padding-right: 2rem;

    &:not(:first-child) {
      padding-left: 2rem;
    }
  }
`;

const LinkWrapper = styled.span`
  position: relative;
  font-weight: var(--weight);
`;

const HighlightIndicator = styled.sup`
  position: absolute;
  top: -0.5rem;
  width: 0.5rem;
  color: deeppink;
  margin-left: 0.2rem;
`;

const HeaderDivider = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  border-top: 0.2rem solid ${COLORS.primary};
`;

const MainWrapper = styled.main`
  display: flex;
  flex: 1;
  padding: 0 4rem;
  padding-bottom: 3rem;
  overflow-y: scroll;
`;

const ChildWrapper = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  bottom: 0;
  padding: 0 2rem 2rem 4rem;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
  color: ${COLORS.primary};

  & > * {
    display: flex;
    padding-right: 1rem;
    width: 2.5rem;
    transition: color 400ms ease;

    &:hover {
      color: deeppink;
    }
  }
`;
