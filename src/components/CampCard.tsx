import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ICamp } from '../types/type';
import font from '../styles/font';

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
  background-repeat: no-repeat;

  padding: 16.29px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: 'Spoqa Han Sans Neo';
  color: #ffffff;

  > div:nth-child(1) {
    ${font.Body2}
  }
  > div:nth-child(2) {
    ${font.Body1}
  }
  > div:nth-child(3) {
    ${font.Caption}
  }

  > div:not(:last-child) {
    margin-bottom: 10.8px;
  }

  @media (max-width: 375px) {
    width: 327px;
    height: 280px;
    background-size: cover;
  }
`;
