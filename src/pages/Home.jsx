import styled from "styled-components";
import {Header} from "../components/ui/Header";
import {PageContent} from "../components/ui/PageContent";
import {ImageLinkWithText} from "../components/ui/images/ImageLinkWithText";
//images
import image1 from "../assets/images/header/image1.jpg";
import image2 from "../assets/images/header/image2.jpg";
import image3 from "../assets/images/header/image3.jpg";

const IntroParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
`;

const IntroContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Home = () => {
  return (
    <>
      <Header />

      <PageContent>
        <IntroParagraphContainer>
          <h1>
            My name is Lyja and I'm a sad, sad architectural technology student.
          </h1>

          <h2>Please give me job.</h2>

          <h3>Or don't. It's up to you.</h3>
        </IntroParagraphContainer>

        <IntroContentContainer>
          <ImageLinkWithText
            imageUrl={image1}
            pagePath="/architecture"
            text="Architecture"
          />

          <ImageLinkWithText
            imageUrl={image2}
            pagePath="/paintings-drawings"
            text="Paintings/Drawings"
          />

          <ImageLinkWithText
            imageUrl={image3}
            pagePath="/photography"
            text="Photography"
          />
        </IntroContentContainer>
      </PageContent>
    </>
  );
};
