import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import color from '../styles/color';
function Nav() {
  const location = useLocation();
  return (
    <Container>
      <Main url={location.pathname}>
        <Link to='/'>
          {location.pathname === '/' ? (
            <Logo src='/Logo/caffein_w.svg' alt='caffein logo' />
          ) : (
            <Logo src='/Logo/caffein.svg' alt='caffein logo' />
          )}
        </Link>
        {location.pathname === '/' ? (
          <User src='/Icon/mypage_w.svg' alt='mypage icon' />
        ) : (
          <User src='/Icon/mypage.svg' alt='mypage icon' />
        )}
      </Main>
    </Container>
  );
}
export default Nav;

const Container = styled.div`
  position: absolute;
  width: 100%;
  z-index: 100;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  margin: 0 auto;
  max-width: 960px;
  background-color: ${(props) => (props.url === '/' ? 'none' : '#FFFFFF')};
`;

const Logo = styled.img`
  width: 71px;
  cursor: pointer;
`;

const User = styled.img`
  width: 14px;
  height: 18px;
  cursor: pointer;
`;
