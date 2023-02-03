import react from "react";
import { SocialIcon } from 'react-social-icons';
import Skills from "./skills";
import "../styles/about.css";

function About() {
  return (
    <>
    <div className="about m-top max-width-1">

      <div className="about-text">
        <h1> Hi, I Am Bharat.</h1>
        <p>I am a Computer Science Pre-Final Btech Student.</p>
        <div className="socials">
          <div className="social"> 
            <SocialIcon url="https://github.com/Bharatbardiya" />
          </div> 
          <div className="social">
            <SocialIcon url="https://www.linkedin.com/in/bharatbardiya/" />
          </div>
          <div className="social">
            <SocialIcon url="https://www.instagram.com/bharat_bardiya/" />
          </div>
          <div className="social">
            <a href="https://leetcode.com/bharat_bardiya"><img src="/img/leetcode.avif"></img></a>
          </div> 
        </div>
      </div>
      <div className="profile">
        <img src="https://picsum.photos/200" alt="profile-photo"/>
      </div>
    </div>
    <Skills/>
    </>
  );
}

export default About;
