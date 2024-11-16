import {useEffect, useState} from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  height: 50vh;
  width: 100vw;
`;

const getRandomImage = (images) => {
  const randomIndex = Math.floor(Math.random() * (images.length - 1));
  return images[randomIndex];
};

const defaultImageURL =
  "/src/assets/images/alexander-sinn-rOxuWWhLxXU-unsplash.jpg";

export const Carousel = ({images}) => {
  const [currentImage, setCurrentImage] = useState(defaultImageURL);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomImage = getRandomImage(images);

      if (!randomImage) {
        setCurrentImage(defaultImageURL);
      } else {
        setCurrentImage(randomImage);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <CarouselContainer>
      <img src={currentImage}></img>
    </CarouselContainer>
  );
};
