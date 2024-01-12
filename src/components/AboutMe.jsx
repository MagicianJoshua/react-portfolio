import portfolioPic from "../../public/PlaceHolder.jpg";
import "../styles/AboutMe.css";
function AboutMe() {
  return (
    <div className="AboutMeBox" id="AboutMe">
      <figure>
        <img src={portfolioPic} className="Headpic"></img>
        <figcaption>Joshua Kennedy-Dedam</figcaption>
      </figure>
      <p>
        Soon to be UNB Fullstack graduate with a passion for frontend! This
        portfolio is still in development.
      </p>
    </div>
  );
}

export default AboutMe;
