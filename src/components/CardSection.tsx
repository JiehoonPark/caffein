import styled from 'styled-components';
import CampCard from './CampCard';
import CommunityCard from './CommunityCard';
import { CardType } from '../types/type';
<<<<<<< HEAD
import mockData from '../sample/mockData';
=======
import data from './data';
>>>>>>> 21e1ecb55b9b525b1c7c78acedc4997ca1fd0fe5
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
<<<<<<< HEAD
          {mockData.camp.map((card, key) => {
=======
          {data.map((card, key) => {
>>>>>>> 21e1ecb55b9b525b1c7c78acedc4997ca1fd0fe5
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
