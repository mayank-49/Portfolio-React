import React from "react";
import PropTypes from "prop-types";
import image from "../images/profile2.jpg"
const Home = ({ imageSrc, name, title }) => {
  return (
    <section className="home">
      <div className="home-content">
        <h1 className="name">{name}</h1>
        <p className="title">{title}</p>
      </div>
        <img src={image} alt="" className="profile-image"/>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
