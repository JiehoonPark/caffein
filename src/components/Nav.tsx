import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  return (
    <Container url='/'>
      <Link to='/'>
        {location.pathname === '/' ? (
          <Logo src='/Nav/caffein_h.svg' alt='caffein logo' />
        ) : (
          <Logo src='/Nav/caffein.svg' alt='caffein logo' />
        )}
      </Link>
      {location.pathname === '/' ? (
        <User src='/Nav/Vector_h.svg' alt='user icon' />
      ) : (
        <User src='/Nav/Vector.svg' alt='user icon' />
      )}
    </Container>
  );
}
export default Nav;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 16px 247px;
  background-color: ${(props) => (props.url === '/' ? 'none' : '#FFFFFF')};
`;

const Logo = styled.img`
  width: 71px;
  height: 32px;
  cursor: pointer;
`;

const User = styled.img`
  align-self: center;
  width: 14px;
  height: 18px;
  cursor: pointer;
`;
