import styled from 'styled-components';
import HeaderSection from '../components/HeaderSection';
import CardSection from '../components/CardSection';
import font from '../styles/font';

const Home = () => {
  return (
    <Container>
      <HeaderSection />
      <Main>
        <CardSection title={'인기 부트 캠프'} cardType={'camp'} />
        <CardSection title={'특가 할인 캠프'} cardType={'camp'} />
        <div>현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝</div>
        <CardSection title={'커뮤니티'} cardType={'community'} />
      </Main>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  > div:nth-child(2) {
    max-width: 960px;
    margin: 0 auto;
    padding-bottom: 242px;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  > div:nth-child(3) {
    //중간위치 배너 "현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝"
    width: 100%;
    height: 100px;
    margin: 56px auto 6px auto;
    padding: 33px 42px;
    background: #7471ff;
    ${font.H2}
    color: #ffffff;
    @media (max-width: 375px) {
      word-break: keep-all;
      padding: 22px 3px 22px 16px;
      margin: 116px 0px 0px 0px;
    }
  }
  :last-child {
    margin-bottom: 242px;
  }
  @media (max-width: 375px) {
    :last-child {
      margin-bottom: 0px;
    }
  }
`;
