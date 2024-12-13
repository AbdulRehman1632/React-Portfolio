import React from "react";
import { social } from "../../Utils/constant/Content";
import "./PersonalInfo.css";
import SocialLink from "../../Utils/constant/SocialLinks/SocialLink";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const PersonaInfo = ({ data }) => {
  const { Heading, SubHeading, ParaGraph, ImagePath } = data;

  return (
    <div>
      <div>
        <div className="HomeInfo ">
          <div className="container">
            <div className="row">
              <div
                data-aos-duration="1500"
                data-aos="fade-right"
                className="col-md-6 HomeContent"
              >
                <div className="heading">
                  <h2>{Heading}</h2>
                </div>
                <div className="Sub-heading">
                  <h4>{SubHeading}</h4>
                </div>

                <div className="paraa">
                  <p>{ParaGraph}</p>
                </div>

                <div className="links">
                  <SocialLink items={social} />
                </div>
              </div>

              <div className="col-md-6">
                <div
                  data-aos-duration="1500"
                  data-aos="fade-left"
                  className="ImageWrapper "
                >
                  <img src={ImagePath} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonaInfo;
