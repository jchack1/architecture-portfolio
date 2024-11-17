import styled from "styled-components";
import {Header} from "../components/ui/Header";
import {PageContent} from "../components/ui/PageContent";
import {ImageContainerSquare} from "../components/ui/images/ImageContainerSquare";
//iamges
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

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
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
          <TextImageContainer>
            <p>Architecture</p>
            <ImageContainerSquare imageUrl={image1} />
          </TextImageContainer>

          <TextImageContainer>
            <p>Drawings/Paintings</p>
            <ImageContainerSquare imageUrl={image2} />
          </TextImageContainer>

          <TextImageContainer>
            <p>Photogrpahy</p>
            <ImageContainerSquare imageUrl={image3} />
          </TextImageContainer>
        </IntroContentContainer>
      </PageContent>
    </>
  );
};
