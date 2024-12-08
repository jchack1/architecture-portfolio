import styled from "styled-components";
import {Link} from "react-router-dom";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1000px;
  margin: 40px auto;
  width: 100%;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonLink = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  margin: 10px 20px;
  display: block;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }

  i {
    margin: 0 10px;
  }
`;

// TODO: think about if we want to have project names dynamic as well, so it's a name instead of just generic previous/next
export const NavigateButton = ({previousPath, nextPath}) => {
  return (
    <ButtonContainer>
      <ButtonLink
        to={{
          pathname: previousPath,
        }}
        hidden={!previousPath}
      >
        <i className="fa-solid fa-angle-left"></i>
        Previous
      </ButtonLink>

      <ButtonLink
        to={{
          pathname: "/",
        }}
      >
        <i className="fa-solid fa-house" style={{fontSize: 16}}></i>
        Home
      </ButtonLink>

      <ButtonLink
        to={{
          pathname: nextPath,
        }}
        hidden={!nextPath}
      >
        Next
        <i className="fa-solid fa-angle-right"></i>
      </ButtonLink>
    </ButtonContainer>
  );
};
