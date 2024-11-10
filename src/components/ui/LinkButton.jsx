import styled from "styled-components";

export const LinkButton = styled.button`
  font-size: 18px;
  color: #555;
  transition: ease 0.3s;
  margin: 10px;
  background: none;
  border: none;

  text-decoration: ${(props) => (props.active ? "underline" : "none")};

  &:hover {
    color: #111;
    transition: ease 0.3s;
    cursor: pointer;
  }
`;
