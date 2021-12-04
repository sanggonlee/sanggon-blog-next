import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  faGithub,
  faLinkedinIn,
  faMediumM,
} from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from './Head';
import { NavigationLink } from '../lib/navigation';
import { COLORS, WIDTH } from '../lib/styles';
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
      <Head />
      <HeaderWrapper>
        <Top>
          <HeaderTitle>
            <Link href={lang === 'kr' ? '/' : '/en'}>Sang-gon&apos;s blog</Link>
          </HeaderTitle>

          <LanguageLink>
            {lang === 'kr' ? (
              <Link href="/en">Go to English Blog -&gt;</Link>
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
        <Divider />
      </HeaderWrapper>
      <MainWrapper>
        <ChildWrapper>{children}</ChildWrapper>
      </MainWrapper>
      <Footer>
        <Divider />
        <SocialLinks>
          <a
            href="https://github.com/sanggonlee"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/sanggonlee/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="https://medium.com/@sanggon"
            target="_blank"
            rel="noreferrer"
          >
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

  @media (max-width: ${WIDTH.mobile}px) {
    height: inherit;
  }
`;

const HeaderWrapper = styled.header`
  flex: 0 0;
  color: ${COLORS.primary};
  padding: 2rem;
  padding-left: 4rem;
  font-family: Sans-serif;

  @media (max-width: ${WIDTH.mobile}px) {
    padding: 0.5rem;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${WIDTH.mobile}px) {
    flex-direction: column;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  padding-bottom: 1rem;
  padding-left: 2rem;

  @media (max-width: ${WIDTH.mobile}px) {
    font-size: 2rem;
    text-align: center;
  }
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
    padding: 0.5rem;
    padding-right: 2rem;

    &:not(:first-child) {
      padding-left: 2rem;
    }
  }

  @media (max-width: ${WIDTH.mobile}px) {
    & > * {
      display: inline-block;
      min-width: 6rem;
      padding: 0.5rem;
      padding-left: 0;
      padding-right: 0;
      text-align: center;

      &:not(:first-child) {
        padding-left: 0;
      }
    }
  }
`;

const LinkWrapper = styled.span`
  position: relative;
  font-weight: var(--weight);
`;

const HighlightIndicator = styled.sup`
  position: absolute;
  top: -0.2rem;
  width: 0.5rem;
  color: deeppink;
  margin-left: 0.2rem;
`;

const Divider = styled.div`
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

  @media (max-width: ${WIDTH.mobile}px) {
    padding: 0;
  }
`;

const ChildWrapper = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  bottom: 0;
  padding: 0 2rem 2rem 4rem;

  @media (max-width: ${WIDTH.mobile}px) {
    padding: 0 0.5rem 1rem 0.5rem;
  }
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

  @media (max-width: ${WIDTH.mobile}px) {
    justify-content: center;
  }
`;
