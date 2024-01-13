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
  const intro = [
    "As a MERN stack full-stack developer, I bring passion and expertise to every project. With a solid foundation in MongoDB, Express.js, React, and Node.js, I craft dynamic and efficient web applications. My commitment to clean code and innovative solutions ensures seamless user experiences. Let's collaborate to turn ideas into impactful digital solutions."
  ];
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const words = intro[0].split(" ");

    const interval = setInterval(() => {
      if (wordIndex < words.length) {
        setCurrentWord((prev) => prev + " " + words[wordIndex]);
        setWordIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [wordIndex]);

  const myName = ["Hello , I am Nicholas Ayim"];
  const [name, setName] = useState("");
  const [countWord, setCountWord] = useState(0);

  useEffect(() => {
    const words = myName[0].split(" ");
    const interval = setInterval(() => {
      if (countWord < words.length) {
        setName((prevName) => prevName + " " + words[countWord]);
        setCountWord((prevCountWord) => prevCountWord + 1);
      } else {
        clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [countWord]);

  return (
    <>
      <div className="home-container">
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
        <div className="my-profile">
          <div className="introduction">
            <h4>{name}</h4>
            <h6>MERN STACK DEVELOPER</h6>
          </div>
          <div className="intro-words">
            <small className="my-intro">{currentWord}</small>
          </div>
          <div className="contactMe">
            <button className="contactMe-btn">Contact Me</button>
            <small className="forward">
              {" "}
              <FaForward />
            </small>
          </div>
        </div>
        <div className="my-image">
          <img src={image} className="cv-image" />
        </div>
      </div>
    </>
  );
}
