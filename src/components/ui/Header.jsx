import {useEffect, useState} from "react";
import styled from "styled-components";
//images
import image1 from "../../assets/images/header/image1.jpg";
import image2 from "../../assets/images/header/image2.jpg";
import image3 from "../../assets/images/header/image3.jpg";
import image4 from "../../assets/images/header/image4.jpg";

const images = [image1, image2, image3, image4];

const HeaderContainer = styled.div`
  width: 100vw;
`;

const ImageContainer = styled.div`
  height: 60vh;
  width: 100vw;
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const getRandomImage = (images) => {
  const randomIndex = Math.floor(Math.random() * (images.length - 1));
  return images[randomIndex];
};

export const Header = () => {
  const [currentImage, setCurrentImage] = useState(image1);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomImage = getRandomImage(images);

      setCurrentImage(randomImage);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <HeaderContainer>
      <ImageContainer imageUrl={currentImage}></ImageContainer>
    </HeaderContainer>
  );
};
