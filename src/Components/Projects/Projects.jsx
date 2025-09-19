import React from "react";
import Card from "react-bootstrap/Card";
import { projects } from "../../Utils/constant/Content";
import "./Projects.css";
import CustomButton from "../../Utils/constant/Button/CustomButton";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="container ">
        <h1 className="project-h">Projects!</h1>
      </div>
      <div
        data-aos-duration="1000"
        data-aos="zoom-in-down"
        className="d-flex ProjectsCard "
      >
        {projects.map((value, index) => {
          const { name, description, image, path ,credentials } = value;
          return (
            <div key={index} className="CardContent">
              <NavLink target="_blank" to={path}>
                <Card style={{ width: "18rem",height:"535px" }}>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    {credentials && (
              <a
                href={credentials}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-link p-0"
                style={{ fontSize: "0.8rem", }}
              >
                Attendance Credentials
              </a>
            )}
                  </Card.Body>
                </Card>
              </NavLink>
            </div>
          );
        })}
      </div>
      <div className="ProjectsButton">
        <NavLink to="https://github.com/AbdulRehman1632">
          <CustomButton title="More Projects" />
        </NavLink>
      </div>
    </>
  );
};

export default Projects;
