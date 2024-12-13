import React from "react";
import "./About.css";
import { about } from "../../Utils/constant/Content";

const About = ({ data }) => {
  const { Heading, SubHeading, list1, list2, list3, ImagePath } = about;
  console.log(data);

  return (
    <div>
      <div>
        <div>
          <div className="AboutInfo top">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <div
                    data-aos-duration="1500"
                    data-aos="fade-up"
                    className="AImageWrapper"
                  >
                    <img src={ImagePath} alt="" />
                  </div>
                </div>

                <div
                  data-aos-duration="1500"
                  data-aos="fade-down"
                  className="col-md-6 HomeContent "
                >
                  <div className="heading">
                    <h2>{Heading}</h2>
                  </div>
                  <div className="Sub-heading">
                    <p>{SubHeading}</p>
                  </div>

                  <div className="list">
                    <ul>
                      <li>{list1}</li>
                      <li>{list2}</li>
                      <li>{list3}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
