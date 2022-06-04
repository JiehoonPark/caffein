import styled from 'styled-components';
import CampCard from './CampCard';
import CommunityCard from './CommunityCard';
import { CardType } from '../types/type';
import data from './data';

interface IProps {
  title: string;
  cardType: CardType;
}

function CardSection({ title, cardType }: IProps) {
  return (
    <Container>
      <SectionHead>{title}</SectionHead>
      {cardType === 'camp' && (
        <Cards>
          {data.map((card, key) => {
            return <CampCard key={key} card={card} />;
          })}
          {/* <CampCard />
          <CampCard />
          <CampCard />
          <CampCard /> */}
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
