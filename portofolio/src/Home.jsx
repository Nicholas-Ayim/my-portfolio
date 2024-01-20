import "./home.css";
// import image from "./assets/cv.jpg";
import { useEffect, useRef, useState } from "react";
import About from "./About";
import Motivator from "./motivators";
import { useNavigate } from "react-router-dom";
import {
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
  FaTwitter,
  FaFacebook,
  FaAngleDown
} from "react-icons/fa";
export default function Home() {
  const myName = ["Hello, I am Nicholas Ayim"];
  const [name, setName] = useState("");
  const [countWord, setCountWord] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    const words = myName[0].split(" ");
    const interval = setInterval(() => {
      if (countWord < words.length) {
        setName((prevName) => prevName + " " + words[countWord]);
        setCountWord((prevCountWord) => prevCountWord + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countWord]);

  const [backgroundContainer, setBackgroundContainer] = useState(false);
  useEffect(() => {
    function handleView() {
      //get current scroll position
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      console.log("the current scroll", scrollPosition);

      if (scrollPosition > 5) {
        //set opacity to the background container
        setBackgroundContainer(true);
      } else {
        setBackgroundContainer(false);
      }
    }

    window.addEventListener("scroll", handleView);
  });

  const [splitWords, setSplitWords] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  useEffect(() => {
    let interval;
    function introduction(intro) {
      const arr = intro[0].split(" ");
      interval = setInterval(() => {
        if (currentWordIndex < arr.length) {
          setSplitWords((prevWord) => prevWord + " " + arr[currentWordIndex]);
          setCurrentWordIndex((prevCount) => prevCount + 1);
        } else {
          clearInterval(interval);
          setSplitWords("");
          setCurrentWordIndex(0);
        }
      }, 1000);
    }
    const intro = [
      "As MERN stack full-stack developer,I bring passion and expertise to every project. With a solid foundation in MongoDB, Express.js, React, and Node.js, I craft dynamic and efficient web applications. My commitment to clean code and innovative solutions ensures seamless user experiences. Let's collaborate to turn ideas into impactful digital solutions."
    ];
    introduction(intro);
    return () => clearInterval(interval);
  }, [currentWordIndex, splitWords]);

  function navigateContact(e) {
    e.preventDefault();
    navigate("/contact");
  }

  return (
    <>
      <div
        className={`background-container ${
          backgroundContainer ? "visible" : "show"
        }`}
      >
        <div className="my-name-intro">
          <h5 className="my-name">{name}</h5>
        </div>
        <div className="sub-intro">
          <small>{splitWords}</small>
        </div>
        <div className="drop-down-container">
          <small>
            <FaAngleDown className="drop-page drop-page1" />
          </small>
          <small>
            <FaAngleDown className="drop-page drop-page2" />
          </small>
          <small>
            <FaAngleDown className="drop-page drop-page3" />
          </small>
        </div>
      </div>
      <div className="home-container">
        <About />
        <Motivator />
      </div>
      <div className="contact-page">
        <button
          className="navigate-contact"
          onClick={(e) => navigateContact(e)}
        >
          Contact Me
        </button>
      </div>
    </>
  );
}
