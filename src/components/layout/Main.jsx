import styled from "styled-components";
import {Outlet} from "react-router-dom";
import {MobileMenu} from "./MobileMenu";
import {useNavigate} from "react-router-dom";

const HomeButton = styled.h1`
  &:hover {
    cursor: pointer;
  }
`;
const MainContainer = styled.main`
  margin: 0 6vw;
`;
const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 6vw;
`;

const LinkContainer = styled.div`
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
  @media (min-width: 700px) {
    display: flex;
  }

  button {
    font-size: 18px;
    color: #555;
    transition: ease 0.3s;
    margin: 10px;
    background: none;
    border: none;
  }

  button:hover {
    color: #111;
    transition: ease 0.3s;
    cursor: pointer;
  }
`;

export const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <NavigationContainer>
          <HomeButton onClick={() => navigate("/")}>Lyja Guevarra</HomeButton>

          <div>
            <MobileMenu />
            <LinkContainer>
              <button onClick={() => navigate("/architecture")}>
                Architecture Projects
              </button>
              <button onClick={() => navigate("/paintings-drawings")}>
                Paintings & Drawings
              </button>
              <button onClick={() => navigate("/photography")}>
                Photography
              </button>
              <button onClick={() => navigate("/about")}>About</button>
            </LinkContainer>
          </div>
        </NavigationContainer>
      </header>

      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};
