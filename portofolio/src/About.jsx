import { useEffect, useState } from "react";
import "./about.css";
import image from "./assets/cv.jpg";
import Projects from "./projects";

export default function About() {
  const [subArrays, setSubArrays] = useState([]);
  const [currentSubArrayIndex, setCurrentSubArrayIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [words, setWords] = useState("");

  useEffect(() => {
    function introduction(intro) {
      const arr = intro.map((sentence) => sentence.split(" "));
      setSubArrays(arr);
    }

    const intro = [
      "i am a software developer specializing in React, NodeJS, MongoDB |",
      "To be precise, I am a MERN STACK Developer |",
      "Ideally, I create restful APIs for my backend |",
      "The most important thing is I love teamwork and learning new concepts every day |",
      "A good communicator and love to challenge my abilities |",
      "I am NICHOLAS AYIM YAW YIRENKYI |",
      "You can call me NAYY for short |",
      "I am available to work with you |",
      "Please contact me |"
    ];

    introduction(intro);
  }, []);

  useEffect(() => {
    if (currentSubArrayIndex < subArrays.length) {
      const splitWords = subArrays[currentSubArrayIndex];
      if (currentWordIndex < splitWords.length) {
        const interval = setInterval(() => {
          setWords((prev) => prev + " " + splitWords[currentWordIndex]);
          setCurrentWordIndex((prev) => prev + 1);
        }, 500);

        return () => clearInterval(interval);
      } else {
        // Move to the next subArray or reset if it's the last one
        setCurrentWordIndex(0);
        setCurrentSubArrayIndex((prev) => (prev + 1) % subArrays.length);
        setWords("");
      }
    }
  }, [currentSubArrayIndex, currentWordIndex, subArrays]);

  return (
    <>
      <div></div>
      <div className="about-container">
        <img className="my-image" src={image} alt="no-image" />
        <p className="word-intro">{words}</p>

        <div className="skills-container">
          <div className="web-tech-container">
            <div>
              <small>Web Technologies :</small>
              <small>
                React, CSS3, Express.js, HTML5, MongoDB, Restful Api
              </small>
            </div>
            <div>
              <small>Programming Languages :</small>
              <small>Javascript, R Programming</small>
            </div>
          </div>
        </div>
      </div>
      <div className="project-title">
        <h3 className="projects">PROJECTS</h3>
      </div>
      <Projects />
    </>
  );
}
