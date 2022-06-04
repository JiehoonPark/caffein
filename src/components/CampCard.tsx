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
  border: 1px solid black;
  background: ${(props) => `url(${props.img})`};
  padding: 16.29px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  > div:not(:last-child) {
    margin-bottom: 10.8px;
  }
`;
