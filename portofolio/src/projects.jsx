import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./project.css";
import image from "./assets/cv.jpg";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <>
      <div className="project-container">
        <Slider {...settings} className="project-gap">
          <div className="project-box">
            <img src={image} alt="no-image" className="project-image" />
            <h3 className="project-title">Nayy Chat</h3>
            <small className="project-description">Chat for hostel</small>
          </div>
          <div className="project-box">
            <img src={image} alt="no-image" className="project-image" />

            <h3 className="project-title">Music Player</h3>
            <small className="project-description">
              Dynamic music player for everyone
            </small>
          </div>
          <div className="project-box">
            <img src={image} alt="no-image" className="project-image" />

            <h3 className="project-title">modern Notepad</h3>
            <small className="project-description">Keep our diaries here</small>
          </div>
          <div className="project-box">
            <img src={image} alt="no-image" className="project-image" />

            <h3 className="project-title">my Portfolio</h3>
            <small className="project-description">connect with me here</small>
          </div>
        </Slider>
      </div>
    </>
  );
}
