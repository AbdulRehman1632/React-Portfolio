import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavInfo.css";
import Modal from "react-bootstrap/Modal";
import { namelogo } from "../../Utils/constant/Content";

const Navbars = () => {
  const [showModal, setShowModal] = useState(false);
  const { logo1, logo2, color, color2 } = namelogo;

  return (
    <div className="Nav-wrapper">
      <Navbar expand="lg" className="bg-body-black">
        <Container className="center">
          <Navbar.Brand>
            <div className="logo-wrapper d-flex">
              <img src="./public/assets/images/logo (2).png" alt="" />
              <p className="align">
                <i className={logo1}></i> Abdul-Rehman{" "}
                <span className="big">/ </span>
                <i className={logo2}></i>
              </p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0 link"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="list">
              <NavLink to={"/home"}>Home</NavLink>
              <NavLink to={"/about"}>About Me</NavLink>
              <NavLink to={"/skills"}>Skills</NavLink>
              <NavLink to={"/projects"}>Projects</NavLink>
              <NavLink to={"/contact"}>Contact Me</NavLink>
              </div>
            </Nav>
            <Form className="d-flex ">
              <>
                <Button variant="primary" onClick={() => setShowModal(true)}>
                  Resume
                </Button>

                <Modal
                  show={showModal}
                  onHide={() => setShowModal(false)}
                  dialogClassName="modal-90w"
                  aria-labelledby="example-custom-modal-styling-title"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <img
                      style={{
                        width: "450px",
                        marginTop: "10px",
                        objectFit: "contain",
                      }}
                      src="../assets/images/Cv.jpg"
                    />
                  </Modal.Body>
                </Modal>
              </>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
