import styled from "styled-components";
import {Link} from "react-router-dom";

export const ImageContainer = styled.div`
  height: ${(props) => (props.size === "large" ? "250px" : "200px")};
  width: ${(props) => (props.size === "large" ? "400px" : "300px")};
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;

  @media (max-width: 1020px) and (min-width: 800px) {
    height: ${(props) => (props.size === "large" ? "200px" : "200px")};
    width: ${(props) => (props.size === "large" ? "300px" : "300px")};
  }

  @media (max-width: 800px) {
    height: ${(props) => (props.size === "large" ? "200px" : "200px")};
    width: ${(props) => (props.size === "large" ? "300px" : "300px")};
  }
`;

const TextImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
`;

export const ImageLinkWithText = ({
  imageUrl,
  pagePath,
  text,
  size = "small",
}) => {
  console.log(pagePath);
  return (
    <Link
      to={{
        pathname: pagePath,
      }}
    >
      <TextImageContainer>
        <p>{text}</p>
        <ImageContainer imageUrl={imageUrl} size={size} />
      </TextImageContainer>
    </Link>
  );
};
