import React, { useEffect, useRef } from "react";

const description = "I’m a passionate frontend developer with a love for crafting intuitive, user-friendly interfaces. With a strong foundation in HTML, CSS, and JavaScript, I focus on delivering seamless web experiences that engage users. I believe in continuous learning and always look for new challenges to improve my skills and create innovative solutions.";

const skillsList = [
  "Web design",
  "User experience",
  "Front-End Developer",
  "HTML",
  "CSS",
  "JavaSript",
  "Bootstrap",
  "JQuery",
  "ReactJS",
  "NodeJS",
];

const detailedQuote = "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible-about");
          } else {
            entry.target.classList.remove("is-visible-about");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = aboutRef.current.querySelectorAll(".animated-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-container" ref={aboutRef} id="about">
      <h1 className="about-heading animated-section">About Me</h1>
      <p className="about-description animated-section">{description}</p>
      
      <h2 className="skills-heading animated-section">Skills</h2>
      <ul className="skills-list animated-section">
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      
      <blockquote className="about-quote animated-section">
        {detailedQuote}
      </blockquote>
    </div>
  );
};

export default About;
