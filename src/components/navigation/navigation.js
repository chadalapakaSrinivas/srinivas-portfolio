import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import resume from "../../images/srinivasresume.pdf";
// import srinivasResume from "../../images/resume.pdf"
//import "../../Styles/main.scss";
import {
  Link,
} from "react-scroll";


function Navigation() {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="transparent"
        data-bs-theme="dark"
        sticky="top"
      >
        <Container className="text-description">
          <Navbar.Brand href="#" className="ss-subhead">Srinivas<span>.</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                as={Link}
                activeClass="active"
                className="Home"
                to="home"
                spy={true}
                smooth={true}
                duration={50}
                offset={20}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                activeClass="active"
                className="About"
                to="about"
                spy={true}
                smooth={true}
                duration={50}
                offset={-70}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                activeClass="active"
                className="Experience"
                to="experience"
                spy={true}
                smooth={true}
                duration={50}
                offset={-40}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                as={Link}
                activeClass="active"
                className="Skills"
                to="skills"
                spy={true}
                smooth={true}
                duration={50}
                offset={-40}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                as={Link}
                activeClass="active"
                className="Hobbies"
                to="hobbies"
                spy={true}
                smooth={true}
                duration={50}
                offset={-40}
              >
                Hobbies
              </Nav.Link>
              <Nav.Link
                as={Link}
                activeClass="active"
                className="Contact"
                to="contact"
                spy={true}
                smooth={true}
                duration={50}
                offset={-40}
              >
                Contact
              </Nav.Link>
              <div className="button-primary"><Nav.Link href={resume} download>Resume</Nav.Link></div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
