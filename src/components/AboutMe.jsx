import portfolioPic from "../../public/PlaceHolder.png";
import "../styles/AboutMe.css";
function AboutMe() {
  return (
    <div className="AboutMeBox">
      <figure>
        <img src={portfolioPic} className="Headpic"></img>
        <figcaption>Joshua Kennedy-Dedam</figcaption>
      </figure>
      <p>Soon to be UNB Fullstack graduate</p>
    </div>
  );
}

export default AboutMe;
