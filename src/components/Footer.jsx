import { Link } from "react-router-dom";
import "./css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>MedSafe</h3>
        <p>Your All in one Digital Medical Assistant</p>
      </div>

      <div>
        <h4>Features</h4>
        <p>Consult a Specialist</p>
        <p>Meditations</p>
        <p>Virtual Assistant</p>
      </div>

      <div>
        <h4>Learn more</h4>
        <p>About Us</p>
        <p>Blog</p>
      </div>

      <div>
        <h4>Support</h4>
        <p>Contact</p>
      </div>
    </footer>
  );
}
