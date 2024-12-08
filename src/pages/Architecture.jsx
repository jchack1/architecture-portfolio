import styled from "styled-components";
import {ImageLinkWithText} from "../components/ui/images/ImageLinkWithText";
import {PageContent} from "../components/ui/PageContent";

import image1 from "../assets/images/header/image1.jpg";
import image2 from "../assets/images/header/image2.jpg";
import image3 from "../assets/images/header/image3.jpg";
import image4 from "../assets/images/header/image4.jpg";

const ImageLinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  // justify-content: ${(props) => props.justify ?? "center"};
  justify-content: center;
  margin-bottom: 100px;
`;

const H2 = styled.h2`
  text-align: center;
`;

export const Architecture = () => {
  return (
    <PageContent>
      {/* residential projects */}
      <H2>Residential</H2>
      <ImageLinkContainer>
        <ImageLinkWithText
          imageUrl={image1}
          pagePath="/architecture/projects/project1"
          text="Project 1"
          size="large"
        />
        <ImageLinkWithText
          imageUrl={image2}
          pagePath="/architecture/projects/project2"
          text="Project 1"
          size="large"
        />
        <ImageLinkWithText
          imageUrl={image3}
          pagePath="/architecture"
          text="Project 1"
          size="large"
        />
        <ImageLinkWithText
          imageUrl={image4}
          pagePath="/architecture"
          text="Project 1"
          size="large"
        />
        <ImageLinkWithText
          imageUrl={image1}
          pagePath="/architecture"
          text="Project 1"
          size="large"
        />
        <ImageLinkWithText
          imageUrl={image2}
          pagePath="/architecture"
          text="Project 1"
          size="large"
        />
        <ImageLinkWithText
          imageUrl={image3}
          pagePath="/architecture"
          text="Project 1"
          size="large"
        />
        <ImageLinkWithText
          imageUrl={image4}
          pagePath="/architecture"
          text="Project 1"
          size="large"
        />
      </ImageLinkContainer>

      {/* commercial projects */}
      <H2>Commercial</H2>
      <ImageLinkContainer justify="start">
        <ImageLinkWithText
          imageUrl={image1}
          pagePath="/architecture"
          text="Project 1"
          size="large"
        />
      </ImageLinkContainer>
    </PageContent>
  );
};
