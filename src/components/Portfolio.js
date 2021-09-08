import React from "react";
// --------------FONT AWESOME IMPORTS --------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import {
  PopupboxManager,
  PopupboxContainer,
} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

import data_projects from "../portfolio/projects"

const Portfolio = () => {
  const popupboxConfig = {
    titleBar: {
      enable: false,
      text: "Portfolio project item",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  const mappedProjects = data_projects.map((item, idx) => {
    const openPopupbox = () => {
      const content = (
        <>
          <div>
            <b>{item.name}</b>{" "}
            <hr/>
          <img
            className="portfolio-image-popupbox"
            src={item.src}
            alt={item.name}
          />
          </div>
          <h5 className="summary-popup">{item.desc}</h5>
          <h5 className="summary-popup tech"><b>{item.tech}</b></h5>
          <p className="hyper-link" onClick={() => window.open(item.link)}>
            <p className="link-popup">Visit the website</p> 
          </p>
        </>
      );
      PopupboxManager.open({ content });
    };

    return (
        <div key={idx} className="portfolio-image-box" onClick={openPopupbox}>
          <img className="portfolio-image" src={item.src} alt={item.name} />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
    );
  });

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5" style={{color: 'white'}}>Portfolio</h1>
        <p className="text-center" style={{color: 'white', fontSize: '1.7rem'}}>Visit my github <a href="https://github.com/yaduveer20" target="_blank" rel="noreferrer" style={{color: 'light blue'}}>https://github.com/yaduveer20</a></p>
        <div className="image-box-wrapper row justify-content-center">
        {mappedProjects}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfig} />
    </div>
  );
};

export default Portfolio;
