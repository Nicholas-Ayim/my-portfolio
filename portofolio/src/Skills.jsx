// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { data } from "./data";
// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 2,
//   slidesToScroll: 2
// };

// export default function Skills() {
//   return (
//     <>
//       <div className="container">
//         <Slider {...settings} className="container-slide">
//           {data.map((item, index) => (
//             <div key={index}>
//               <div className="carousel-container">
//                 <div className="image-container">
//                   <img src={item.url} alt="no-image" className="skill-image" />
//                 </div>
//                 <p>{item.name}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </>
//   );
// }
import "./skill.css";

export default function Skills() {
  return (
    <>
      <div className="skeleton">
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text last" />

        <br></br>

        <h5 className="loading">Loading...</h5>
        <br></br>
        <br></br>

        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text" />
      </div>
    </>
  );
}
