import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css";
import { Carousel } from "react-responsive-carousel";
export default function Slider() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://api.npoint.io/f89acb9ee900ca95b8dc");

      const info = await res.json();

      setImage(info.slice(0, 5));
    };

    getData();
  }, []);

  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={true}
      >
        {image.map((img) => {
          return (
            <>
              <div>
                <img src={img.featuredImage.link} alt=""></img>
              </div>
            </>
          );
        })}
      </Carousel>
    </>
  );
}
