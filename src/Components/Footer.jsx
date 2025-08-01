import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import './Footer.css';

export default function Footers() {
  return (
    <footer className="Footersection">
      
        <p>&copy; 2025 <span>Nishanth</span>. All rights reserved.</p>
        <p>Made with 💜 By <span>Nishanth</span></p>
     
      <div className="footerbtns">
      
          <FaGithub className="footicon" />
        
      
          <FaLinkedin className="footicon" />

        
          <FaEnvelope className="footicon" />
     
      </div>
    </footer>
  );
}
