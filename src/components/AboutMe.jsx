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
        Soon to be UNB Fullstack graduate with a passion for frontend! {<br />}I
        have a passion for learning and applying new concepts each and every
        day,{<br />} if I am not learning, then I am not growing!
      </p>
    </div>
  );
}

export default AboutMe;
