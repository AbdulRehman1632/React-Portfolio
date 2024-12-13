import React from "react";
import "./Skills.css";
import { skills, skillscontent } from "../../Utils/constant/Content";

const Skills = () => {
  const { para } = skillscontent;

  return (
    <div className="SkillWrapper top">
      <div className="container SkillHeading">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Skills!</h1>
            <p>{para}</p>
          </div>
        </div>
      </div>

      <div data-aos-duration="1000" data-aos="flip-up" className="skills">
        {skills.map((value, index) => {
          return (
            <div key={index}>
              <img src={value.logo} />
              <p className="text-center">{value.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
