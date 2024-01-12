import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#AboutMe">About me</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#ContactMe">Contact me</a>
        </li>
        <li>
          <a href="https://docs.google.com/document/d/1gEgRLULMYqT5is6GQIqoBPsf2MSUrKVdHB0LAU8jwnk/edit?usp=sharing">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
