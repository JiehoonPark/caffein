import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  return (
    <Container isScrolled={isScrolled}>
      <div className="main">
        <Link to="/">
          <img className="logo" alt="로고" />
        </Link>
        <Link to="/community">
          <img className="ic-person" alt="프로필" />
        </Link>
      </div>
    </Container>
  );
};

export default Navigation;
const Container = styled.nav<{ isScrolled: boolean }>`
  z-index: 100;
  position: fixed;
  width: 100%;
  ${(props) =>
    props.isScrolled &&
    css`
      background-color: white;
      transition: 0.5s;
    `}
  .main {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;
  }
  .logo {
    width: 88px;
    height: 24px;
  }
  .logo {
    width: 80px;
    height: 22px;
  }
  .ic-person {
    width: 24px;
    height: 24px;
  }
`;
