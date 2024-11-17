import styled from "styled-components";

export const ImageContainerSquare = styled.div`
  height: 200px;
  width: 200px;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;
`;
