import "./contact.css";
import myCv from "./assets/CV_MERNSTACK.pdf";
import { useRef } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLocationArrow,
  FaWhatsapp,
  FaDownload
} from "react-icons/fa";
export default function Contact() {
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = myCv;
    link.download = "myCv.pdf";
    link.click();
  };
  const inputRef = useRef();
  return (
    <>
      <div className="get-in-touch">
        <h5 className="sub-title">get in touch</h5>
        <h3 className="contact-title">CONTACT</h3>
      </div>
      <div className="main-container">
        <div className="my-contact-container">
          <div className="phone-contact">
            <div className="phone-icon">
              <FaPhone className="phone" />
            </div>
            <small className="phone-number">+233(55)-(632)-7844</small>
          </div>
          <div className="gmail-contact">
            <div className="gmail-icon">
              <FaEnvelope className="gmail" />
            </div>
            <small className="gmail-number">nicholasayim7@gmail.com</small>
          </div>
          <div className="location-contact">
            <div className="location-icon">
              <FaLocationArrow className="location" />
            </div>
            <small className="loaction-number">Accra-Ghana</small>
          </div>
          <div className="whatsapp-contact">
            <div className="whatsapp-icon">
              <FaWhatsapp className="whatsapp" />
            </div>
            <small className="loaction-number">+233(55)-(632)-7844</small>
          </div>
        </div>

        <div className="bar"></div>

        <div className="my-form-contanier">
          <form action="https://formspree.io/f/xvoegzon" method="POST">
            <div className="form-container">
              <input
                type="text"
                name="Name"
                placeholder="First Name"
                className="firstName"
                required
                ref={inputRef}
              />
              <input
                type="text"
                name="Email"
                placeholder="Email"
                className="email"
                required
              />
              <textarea
                type="text"
                name="Name"
                placeholder="message"
                className="message"
                spellCheck="true"
                required
              ></textarea>
              <button type="submit" className="send-message">
                send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="download-cv">
        <button className="hire-me" onClick={() => inputRef.current.focus()}>
          Hire Me
        </button>
        <button className="download" onClick={(e) => handleDownload(e)}>
          <FaDownload /> CV
        </button>
      </div>
    </>
  );
}
