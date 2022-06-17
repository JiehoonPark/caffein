import styled from 'styled-components';
import color from '../styles/color';
import font from '../styles/font';

function HeaderSection() {
  return (
    <Container>
      <Header>
        <div>개발은 카페인과 함께</div>
        <Banner />
      </Header>
    </Container>
  );
}
export default HeaderSection;

const Container = styled.div`
  display: flex;
  height: 560px;
  background-color: ${color.primary3};
  background: linear-gradient(
    97.88deg,
    #854bff -84.42%,
    #7179ff 15.02%,
    #6d83ff 36.89%,
    #698bff 54.79%,
    #6499ff 80.65%,
    #659bf7 108.49%,
    #669fea 148.27%,
    #69a9cd 197.99%,
    #6cb1b2 239.75%
  );
`;

const Banner = styled.div`
  width: 597.51px;
  height: 400px;
  border-radius: 10px;
  background: url('/Banner/home_header.svg');
  @media (max-width: 375px) {
    width: 100%;
    height: 200px;
  }
`;

const Header = styled.div`
  display: flex;
  height: 400px;
  justify-content: center;
  margin: 104px auto 120px auto;
  > div:nth-child(1) {
    //"개발은 카페인과 함께"
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 48px;
    line-height: 65px;
    color: #ffffff;
    margin-right: 80.32px;
    align-self: flex-end;
    border-bottom: 1px solid white;
    width: 278.84px;
    overflow: hidden;
    word-break: keep-all;
    -webkit-line-clamp: 2;
  }
  @media (max-width: 375px) {
    flex-direction: column;
    > div:nth-child(1) {
      ${font.H3}
      border-bottom: none;
    }
  }
`;
