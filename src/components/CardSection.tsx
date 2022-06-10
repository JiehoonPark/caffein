import styled from 'styled-components';
import CampCard from './CampCard';
import CommunityCard from './CommunityCard';
import { CardType } from '../types/type';
import mockData from '../sample/mockData';
import font from '../styles/font';

interface IProps {
  title: string;
  cardType: CardType;
}

function CardSection({ title, cardType }: IProps) {
  return (
    <Container>
      <SectionHead>{title}</SectionHead>
      {cardType === 'camp' && (
        <CardWrapper>
          {mockData.camp.map((card, key) => {
            return <CampCard key={key} card={card} />;
          })}
        </CardWrapper>
      )}
      {cardType === 'community' && (
        <CardWrapper>
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
        </CardWrapper>
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
  ${font.H2}
  margin-bottom: 9px;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  > div:not(:last-child) {
    margin-right: 21.5px;
  }
`;
