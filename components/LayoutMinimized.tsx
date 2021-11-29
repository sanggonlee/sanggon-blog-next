import styled from 'styled-components';
import Link from 'next/link';
import Head from './Head';
import { COLORS, WIDTH } from '../lib/styles';
import { Language } from '../lib/types';

type Props = {
  children: React.ReactNode;
  lang?: Language;
};

export default function LayoutMinimized({ children, lang = 'kr' }: Props) {
  return (
    <Wrapper>
      <Head />
      <HeaderWrapper>
        <Top>
          <HeaderTitle>
            <Link href={lang === 'kr' ? '/' : '/en'}>Sang-gon&apos;s blog</Link>
          </HeaderTitle>
        </Top>
        <HeaderDivider />
      </HeaderWrapper>
      <MainWrapper>
        <ChildWrapper>{children}</ChildWrapper>
      </MainWrapper>
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
    justify-content: center;
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
    padding-left: 0;
  }
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

  @media (max-width: ${WIDTH.mobile}px) {
    padding: 0;
  }
`;

const ChildWrapper = styled.div`
  flex: 1;
`;
