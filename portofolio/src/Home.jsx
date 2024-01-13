import "./home.css";
import image from "./assets/cv.jpg";
import { useEffect, useState } from "react";
import {
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
  FaTwitter,
  FaFacebook,
  FaForward
} from "react-icons/fa";
export default function Home() {
  const myName = ["Hello , I am Nicholas Ayim"];
  const [name, setName] = useState("");
  const [countWord, setCountWord] = useState(0);

  //loading structure
  const [animationLoaded, setAnimationLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [socialLoaded, setSocialLoaded] = useState(false);

  const intro = [
    ". As MERN stack full-stack developer, I bring passion and expertise to every project. With a solid foundation in MongoDB, Express.js, React, and Node.js, I craft dynamic and efficient web applications. My commitment to clean code and innovative solutions ensures seamless user experiences. Let's collaborate to turn ideas into impactful digital solutions."
  ];
  useEffect(() => {
    const words = myName[0].split(" ");
    const interval = setInterval(() => {
      if (countWord < words.length) {
        setName((prevName) => prevName + " " + words[countWord]);
        setCountWord((prevCountWord) => prevCountWord + 1);
      } else {
        introduction(intro);

        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countWord]);

  const [currentWord, setCurrentWord] = useState("");
  // const [wordIndex, setWordIndex] = useState(0);

  async function introduction(intro) {
    const words = intro[0].split(" ");

    let i = 0;
    const interval = setInterval(() => {
      if (i < words.length) {
        setCurrentWord((prev) => prev + " " + words[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    // Clear the interval when all words are processed
    await new Promise((resolve) => {
      setTimeout(() => {
        clearInterval(interval);
        resolve();
        setAnimationLoaded(true);
      }, 300 * words.length);
    });
    if (animationLoaded) {
      setImageLoaded(true);
      console.log("social");
    }
    setSocialLoaded(true);
  }

  return (
    <>
      <div className="home-container">
        <div className="my-name-intro">
          <h5 className="my-name">{name}</h5>
        </div>
        <div className="sub-intro">
          {currentWord && <h6 className="career-intro">{currentWord}</h6>}
        </div>
        {animationLoaded && (
          <div className="portfolio-image">
            <img
              className="cv-image"
              src={image}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        )}
        {imageLoaded && (
          <div className="social-media">
            <small>
              <FaLinkedinIn />
            </small>
            <small>
              <FaYoutube />
            </small>
            <small>
              <FaWhatsapp />
            </small>
            <small>
              <FaTelegram />
            </small>
            <small>
              <FaTwitter />
            </small>
            <small>
              <FaFacebook />
            </small>
          </div>
        )}
        {socialLoaded && (
          <div className="contactMe">
            <small>contact</small>
          </div>
        )}
      </div>
    </>
  );
}
