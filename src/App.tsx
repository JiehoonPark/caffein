import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import CampDetail from './pages/CampDetail';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/camp/:id' element={<CampDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
