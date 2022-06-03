import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <Container img={props.img || undefined}>
      <div>연구개발</div>
      <div>강의 제목2줄로작성</div>
      <div>2월 28일부터</div>
    </Container>
  );
}
export default Card;

const Container = styled.div`
  width: 224px;
  height: 280px;
  border-radius: 10px;
  border: 2px solid red;
  background: ${(props) => `url(${props.img})`};
  padding: 16.29px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  > div:not(:last-child) {
    margin-bottom: 10.8px;
  }
`;
