import react from "react";

import "../styles/about.css";

function About() {
  return (
    <div className="about m-top">
      <div className="profile">
        <img src="https://picsum.photos/200" alt="profile-photo"/>
      </div>

      <div className="about-text">
        <h1> Hi, I Am Bharat.</h1>
        <p>I am a Computer Science Pre-Final Btech Student.</p>
      </div>

    </div>
  );
}

export default About;
