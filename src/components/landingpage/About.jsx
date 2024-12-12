import React from "react";

const About = () => {
  return (
    <div className="about_main">
      <div className="firstset">
        <div>
          <h1>Welcome to Wenager</h1>
          <h3>
            At Wenager, we're passionate about helping you manage your online
            presence with ease and efficiency. Our platform is designed to
            streamline your social media management, saving you time and effort.
          </h3>
        </div>
        <div>
          <img src="/about1.jpeg" alt="img" />
        </div>
      </div>
      <div className="secondset">
<div>
            <img src="/about2.jpeg" alt="" />
        </div>
        <div className="secondtext">

        
      <h1>Our Promise</h1>
        <h3>
          We're committed to delivering exceptional service, ensuring your
          online experience is seamless, secure, and enjoyable. Our core values{" "}
          <br />
          <b>Privacy:</b> Your data is safeguarded with the highest level of
          encryption and security protocols. Accuracy: We strive for precision
          and reliability in every aspect of our service.
          <br />
          <b>Efficiency: </b> Our platform is optimized for speed and
          performance, ensuring you get the most out of your time. <br />
          <b> Innovation:</b> We're constantly updating and refining our
          services to meet the evolving needs of our users.
        </h3>
        </div>
        
      </div>
    </div>
  );
};

export default About;
