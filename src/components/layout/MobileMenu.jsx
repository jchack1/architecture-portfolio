import {useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

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

const HamburgerIcon = styled.div`
  font-size: 30px;
  cursor: pointer;
  z-index: 10;
  position: absolute;
  top: ${(props) => (props.isOpen ? "-70px" : "-20px")};
  right: ${(props) => (props.isOpen ? "0px" : "20px")};
  color: #555;
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

  button {
    font-size: 18px;
    color: #555;
    transition: ease 0.3s;
    background: none;
    border: none;
  }
  button:hover {
    color: #111;
    transition: ease 0.3s;
    cursor: pointer;
  }
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContainer>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />

      <HamburgerIcon isOpen={isOpen} onClick={toggleMenu}>
        <i className={`fa ${isOpen ? "fa-times" : "fa-bars"}`} />
      </HamburgerIcon>

      <SlideOutMenu isOpen={isOpen}>
        <List>
          <ListItem>
            <button
              onClick={() => {
                navigate("/architecture");
                toggleMenu();
              }}
            >
              Architecture Projects
            </button>
          </ListItem>

          <ListItem>
            <button
              onClick={() => {
                navigate("/paintings-drawings");
                toggleMenu();
              }}
            >
              Paintings & Drawings
            </button>
          </ListItem>
          <ListItem>
            <button
              onClick={() => {
                navigate("/photography");
                toggleMenu();
              }}
            >
              Photography
            </button>
          </ListItem>
          <ListItem>
            <button
              onClick={() => {
                navigate("/about");
                toggleMenu();
              }}
            >
              About
            </button>
          </ListItem>
        </List>
      </SlideOutMenu>
    </MenuContainer>
  );
};
