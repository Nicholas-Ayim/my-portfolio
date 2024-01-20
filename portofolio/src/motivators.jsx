import image from "./assets/cv.jpg";
import "./motivator.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
export default function Motivator() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  const [randomQuote, setRandomQuote] = useState("");
  const [randomImage, setRandomImage] = useState("");
  const [randomName, setRandomName] = useState("");

  useEffect(() => {
    let interval;
    const fetchData = async () => {
      try {
        interval = setInterval(async () => {
          const quoteResponse = await fetch("https://api.quotable.io/random");
          const quoteData = await quoteResponse.json();
          setRandomQuote(quoteData.content);
          setRandomName(quoteData.author);

          const imageResponse = await fetch("https://picsum.photos/200/300");
          const imageUrl = imageResponse.url;
          setRandomImage(imageUrl);
        }, 5000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => clearInterval(interval);
  }, [randomQuote, randomImage, randomName]); // Empty dependency array to ensure useEffect runs only once

  return (
    <>
      <div className="slider-container">
        <Slider {...settings} className="slider">
          <div className="motivator-container">
            <div>
              <img
                src={randomImage}
                className="motivator-image"
                alt="no-image"
              />
              <small className="motivator-name">{randomName}</small>
              <small className="motivators-words">{randomQuote}</small>
            </div>
          </div>
          <div className="motivator-container">
            <div>
              <img
                src={randomImage}
                className="motivator-image"
                alt="no-image"
              />
              <small className="motivator-name">{randomName}</small>
              <small className="motivators-words">{`"${randomQuote}"`}</small>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
