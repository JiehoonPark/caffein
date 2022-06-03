import styled from 'styled-components';
import Card from './Card';
import CommunityCard from './CommunityCard';
function CardSection({ text, type }) {
  //캠프 카드 or 커뮤니티 카드
  //text, card 데이터
  return (
    <Container>
      <SectionHead>{text}</SectionHead>
      {type === 'camp' && (
        <Cards>
          <Card />
          <Card />
          <Card />
          <Card />
        </Cards>
      )}
      {type === 'community' && (
        <Cards>
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
        </Cards>
      )}
    </Container>
  );
}
export default CardSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 48px;
`;

const SectionHead = styled.span`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -0.01em;
  margin-bottom: 9px;
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  > div:not(:last-child) {
    margin-right: 21.5px;
  }
`;
