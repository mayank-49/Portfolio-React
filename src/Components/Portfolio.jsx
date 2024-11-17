import React , { useEffect, useRef } from "react";

const projectList = [
  {
    title: "Amozon Clone (Not Responsive)",
    description:
      "I’ve built a static Amazon clone using HTML, CSS, and JavaScript. This project mimics the design and layout of the Amazon homepage.",
    url: "https://amazon-clone1221.netlify.app",
  },
  {
    title: "Rock Paper Scissor Game",
    description:
      "I’ve built a Rock Paper Scissor game using HTML , CSS and JS that is played between you and the computer.",
    url: "https://rock-paper-scissor1221.netlify.app",
  },
  {
    title: "Calculator",
    description:
      "I've built a responsive calculator using HTML, CSS, and JavaScript that performs basic arithmetic operations like addition, subtraction, multiplication, and division",
    url: "https://calculator-1221.netlify.app",
  },
  {
    title: "Currency Converter",
    description:
      "I've created a currency converter using HTML, CSS, JavaScript, and a real-time API. The application fetches live exchange rates and allows users to convert currencies.",
    url: "https://currency-converter1221.netlify.app",
  },
  {
    title: "TO-DO List",
    description:
      "I've built a to-do list application using HTML, CSS, and JavaScript that allows users to add, edit, and delete tasks and the app is fully responsive.",
    url: "http://todoapp1221.netlify.app",
  },
  {
    title: "Text-It App",
    description:
      "A text-it is designed to manipulate and transform text effortlessly,offering features like text formatting, case conversion, removing extra spaces, changing fonts and more.",
    url: "https://text-it1221.netlify.app",
  },
  {
    title: "Weather App",
    description:
      "Created a dynamic and responsive weather app which delivers real-time weather updates fetched via an API. It provides accurate forecast.",
    url: "https://weather-app1221.netlify.app",
  },
  {
    title: "Portfolio",
    description:
      "Created a professional and responsive website built using HTML, CSS,and JavaScript, designed to effectively showcase my skills, experience, and projects.",
    url: "https://portfolio-1221.netlify.app",
  },
];


const Portfolio = () => {
  const portfolioRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = portfolioRef.current.querySelectorAll(".project-card");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-container" ref={portfolioRef} id="portfolio">
      <h1 className="portfolio-heading animated">My Portfolio</h1>
      <div className="portfolio-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card animated">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
