import styled from 'styled-components';
import HeaderSection from '../components/HeaderSection';
const Home = () => {
  return (
    <Container>
      <HeaderSection></HeaderSection>
      <Main></Main>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin: 0 auto;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
