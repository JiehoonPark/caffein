import styled from 'styled-components';
import HeaderSection from '../components/HeaderSection';
import CardSection from '../components/CardSection';

const Home = () => {
  return (
    <Container>
      <HeaderSection />
      <Header>
        <div>개발은 카페인과 함께</div>
        <Banner />
      </Header>
      <Main>
        <CardSection text={'인기 부트 캠프'} type={'camp'} />
        <CardSection text={'특가 할인 캠프'} type={'camp'} />
        <div>현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝</div>
        <CardSection text={'커뮤니티'} type={'community'} />
      </Main>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin: 0 auto;
`;

const Banner = styled.div`
  width: 597.51px;
  height: 400px;
  border-radius: 10px;
  background: url('/Banner/home_header.svg');
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 560px;
  justify-content: center;
  padding: 104px 0px 56px 0px;
  > div:nth-child(1) {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 65px;
    color: #ffffff;
    margin-right: 80.32px;
    align-self: flex-end;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;

  > div:nth-child(3) {
    //중간위치 배너 "현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝"
    width: 960px;
    height: 100px;
    margin: 56px auto 6px auto;
    padding: 33px 42px;
    background: #7471ff;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: -0.01em;
    color: #ffffff;
  }
`;
