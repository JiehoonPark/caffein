import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import CampDetail from './pages/CampDetail';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<CampDetail />} /> */}
      </Routes>
    </>
  );
}

export default App;
