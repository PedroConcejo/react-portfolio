import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education, index) {
      return (
        <div className="language" key={index}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work, index) {
      return (
        <div className="language" key={index}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
          <p className="line"></p>
        </div>
      );
    });

    var skills = data.proficiency.map(function (skills, index) {
      return (
        <div className="language" key={index}>
          <h3>{skills.name}</h3>
          <div className="wrapper">
          {
            skills.framework.map((element, index) => 
            <button className="proficiency" key={index}>
              <span>{element}</span>
            </button>
            )
          }
          </div>
        </div>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>
          <div>
            {skills}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
