import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/AboutMe">About me</a>
        </li>
        <li>
          <a href="/Projects">Projects</a>
        </li>
        <li>
          <a href="/ContactMe">Contact me</a>
        </li>
        <li>
          <a href="/Resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
