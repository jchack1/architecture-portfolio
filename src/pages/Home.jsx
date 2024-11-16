import {useEffect, useState} from "react";
import {Carousel} from "../components/ui/Carousel";

const imageFiles = import.meta.glob("../assets/images/*.{jpg,jpeg,png,gif}"); //too slow, need faster way

export const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imagePromises = Object.values(imageFiles).map(
      (importFn) => importFn().then((module) => module.default) // module.default contains the resolved URL
    );

    Promise.all(imagePromises).then(setImages);
  }, []);
  return (
    <>
      <Carousel images={images} />
      <p>
        My name is Lyja and I'm a sad, sad architectural technology student.
      </p>

      <p>Please give me job.</p>

      <p>Or don't. It's up to you.</p>
    </>
  );
};
