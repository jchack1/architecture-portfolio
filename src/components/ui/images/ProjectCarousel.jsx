import {useState} from "react";
import styled from "styled-components";

//provides 'window' for viewing images
const ProjectCarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  max-height: 500px;
  margin: auto;
  overflow: hidden;
`;

//arranges all the images horizontally so we can slide between each
const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const CarouselImageContainer = styled.div`
  width: 100%;
  flex-shrink: 0;

  transform: ${(props) => `translateX(-${props.currentIndex * 100}%)`};
  transition: transform 0.5s ease-in-out;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
`;
const LeftButton = styled(ArrowButton)`
  left: 10px;
`;
const RightButton = styled(ArrowButton)`
  right: 10px;
`;
export const ProjectCarousel = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <ProjectCarouselContainer>
      <CarouselWrapper>
        {images.map((image, index) => (
          <CarouselImageContainer
            key={`${index}-image`}
            currentIndex={currentIndex}
          >
            <img src={image} alt={`slide ${index}`} />
          </CarouselImageContainer>
        ))}
      </CarouselWrapper>
      {/* Left arrow */}
      <LeftButton onClick={goToPrevious}>&#60;</LeftButton>

      {/* Right arrow */}
      <RightButton onClick={goToNext}>&#62;</RightButton>
    </ProjectCarouselContainer>
  );
};
