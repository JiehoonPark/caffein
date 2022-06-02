import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import styled from 'styled-components';
function App() {
  return (
    <Container>
      <Routes>
        {/* <Route path='/' element={< />} />
      <Route path='/about' element={< />} /> */}
      </Routes>
      <Nav />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
