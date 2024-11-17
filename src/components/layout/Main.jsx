import styled from "styled-components";
import {Outlet} from "react-router-dom";
import {MobileMenu} from "./MobileMenu";
import {useNavigate} from "react-router-dom";
import {LinkButton} from "../ui/LinkButton";

const HomeButton = styled.p`
  font-size: 40px;
  font-family: "Special Elite", system-ui;
  margin: 10px;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;

const MainContainer = styled.main``;

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
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
`;

export const Main = () => {
  const navigate = useNavigate();

  const page = window.location.pathname;

  return (
    <>
      <header>
        <NavigationContainer>
          <HomeButton onClick={() => navigate("/")}>Lyja Guevarra</HomeButton>

          <div>
            <MobileMenu />
            <LinkContainer>
              <LinkButton
                onClick={() => navigate("/architecture")}
                active={page === "/architecture"}
              >
                Architecture Projects
              </LinkButton>
              <LinkButton
                onClick={() => navigate("/paintings-drawings")}
                active={page === "/paintings-drawings"}
              >
                Paintings & Drawings
              </LinkButton>
              <LinkButton
                onClick={() => navigate("/photography")}
                active={page === "/photography"}
              >
                Photography
              </LinkButton>
              <LinkButton
                onClick={() => navigate("/about")}
                active={page === "/about"}
              >
                About
              </LinkButton>
            </LinkContainer>
          </div>
        </NavigationContainer>
      </header>

      <MainContainer>
        <Outlet />
      </MainContainer>

      <Footer>
        <i class="fa-brands fa-instagram" style={{fontSize: 30}}></i>
      </Footer>
    </>
  );
};
