import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <Logo src='/Logo/caffein.svg' />
      <div className='footer_text'>
        대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호
        <br />
        <br />
        Copyright by (주)카페인. All right reserved.
        <br />
        이용약관 개인정보처리방침
      </div>
      <div className='footer_icons'>
        <Temp />
        <Temp />
        <Temp />
      </div>
    </Container>
  );
}
export default Footer;

const Container = styled.div`
  height: 160px;
  display: flex;
  justify-content: space-between;
  padding: 32px 0px 72px 0px;
  background: #eeeeee;
  > .footer_text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #484848;
  }
  > .footer_icons {
    display: flex;
    gap: 5.53px;
  }
`;

const Logo = styled.img`
  width: 71px;
  height: 32px;
  cursor: pointer;
`;

const Temp = styled.div`
  width: 29.51px;
  height: 32px;
  border-radius: 50%;
  background: #cccccc;
`;
