import styled from 'styled-components';
import CampCard from './CampCard';
import CommunityCard from './CommunityCard';
function CardSection({ title, cardType }) {
  return (
    <Container>
      <SectionHead>{title}</SectionHead>
      {cardType === 'camp' && (
        <Cards>
          <CampCard />
          <CampCard />
          <CampCard />
          <CampCard />
        </Cards>
      )}
      {cardType === 'community' && (
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
