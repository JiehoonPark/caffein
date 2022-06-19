import styled from 'styled-components';
import CampCard from './CampCard';
import CommunityCard from './CommunityCard';
import { CardType } from '../types/type';
import font from '../styles/font';
import { useMediaQuery } from 'react-responsive';

interface IProps {
  title: string;
  cardType: CardType;
  cardData?: any[]; //TODO: community 카드 만들면 ? 제거
}

function CardSection({ title, cardType, cardData }: IProps) {
  const isMobile = useMediaQuery({ query: '(max-width: 375px)' });
  if (isMobile && cardType === 'community') {
    return null;
  }
  let type: string = '';
  if (title === '인기 부트 캠프') type = 'popular';
  if (title === '특가 할인 캠프') type = 'sale';
  return (
    <Container>
      <SectionHead>{title}</SectionHead>
      {cardType === 'camp' && (
        <CardWrapper>
          {cardData?.map((card, key) => {
            if (card.type === type) return <CampCard key={key} card={card} />;
          })}
        </CardWrapper>
      )}
      {cardType === 'community' && (
        //TODO: 실제 데이터로 교체
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
  overflow: hidden;
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

  @media (max-width: 375px) {
    margin: auto 0px;
    flex-direction: column;
    > div:not(:last-child) {
      margin: 0px 0px 8px 0px;
    }
  }
`;
