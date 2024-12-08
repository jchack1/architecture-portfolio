import {useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {LinkButton} from "../ui/LinkButton";

const MenuContainer = styled.div`
  position: relative;
  z-index: 10;

  @media (max-width: 700px) {
    display: block;
  }
  @media (min-width: 700px) {
    display: none;
  }
`;

const Icon = styled.div`
  font-size: 30px;
  cursor: pointer;
  z-index: 20;
  color: #555;
`;

const CloseIcon = styled(Icon)`
  margin: 20px;
  text-align: right;
`;

const SlideOutMenu = styled.div`
  position: fixed;
  top: 0;
  right: -250px;
  width: 250px;
  height: 100%;
  background-color: white;
  color: #777;
  transition: right 0.3s ease;
  z-index: 9;
  right: ${(props) => (props.isOpen ? 0 : "")};
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 50px;
`;

const ListItem = styled.li`
  padding: 20px;
  text-align: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? 0.3 : 0)};
  transition: ease 0.3s;
  z-index: 9;
`;

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const page = window.location.pathname;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContainer>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />

      <Icon onClick={toggleMenu}>
        <i className="fa fa-bars" />
      </Icon>

      <SlideOutMenu isOpen={isOpen}>
        <CloseIcon onClick={toggleMenu}>
          <i className="fa fa-times" />
        </CloseIcon>

        <List>
          <ListItem>
            <LinkButton
              onClick={() => {
                navigate("/architecture");
                toggleMenu();
              }}
              active={page.includes("/architecture")}
            >
              Architecture Projects
            </LinkButton>
          </ListItem>

          <ListItem>
            <LinkButton
              onClick={() => {
                navigate("/paintings-drawings");
                toggleMenu();
              }}
              active={page === "/paintings-drawings"}
            >
              Paintings & Drawings
            </LinkButton>
          </ListItem>
          <ListItem>
            <LinkButton
              onClick={() => {
                navigate("/photography");
                toggleMenu();
              }}
              active={page === "/photography"}
            >
              Photography
            </LinkButton>
          </ListItem>
          <ListItem>
            <LinkButton
              onClick={() => {
                navigate("/about");
                toggleMenu();
              }}
              active={page === "/about"}
            >
              About
            </LinkButton>
          </ListItem>
        </List>
      </SlideOutMenu>
    </MenuContainer>
  );
};
