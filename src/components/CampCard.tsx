import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ICamp } from '../types/type';

interface IProps {
  card: ICamp;
}

function CampCard({ card }: IProps) {
  return (
    <Container img={card.thumbnail}>
      <div>{card.status}</div>
      <div>{card.name}</div>
      <div>{card.startDate}</div>
    </Container>
  );
}
export default CampCard;

const Container = styled.div`
  width: 224px;
  height: 280px;
  border-radius: 10px;
  background: linear-gradient(
      180deg,
      rgba(39, 63, 40, 0) 0%,
      rgba(89, 89, 89, 0) 15.62%,
      #000000 70.83%
    ),
    ${(props) => `url(${props.img})`};

  padding: 16.29px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: 'Spoqa Han Sans Neo';
  color: #ffffff;

  > div:nth-child(1) {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.01em;
  }
  > div:nth-child(2) {
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
  }
  > div:nth-child(3) {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }

  > div:not(:last-child) {
    margin-bottom: 10.8px;
  }
`;
