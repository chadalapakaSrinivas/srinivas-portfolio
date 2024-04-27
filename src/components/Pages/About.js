import React, { useState } from "react";
//import "../../Styles/main.scss";
import cardimage from "../../images/set1.png";
import { Col, Container, Row, Image } from "react-bootstrap";
function About() {
  const [skill,setSkill] = useState(["Html","Css3","Bootstrap","React Js","Material React","Redux","Github","Jira"]);
  return (
    <>
      <div className="about-page" id="about">
        <h2 className="secondary-heading">
          About Me<span>.</span>
        </h2>
        <div className="about-description">
          <Container>
            <Row>
              <Col md={3} className="image-card">
                <Image src={cardimage} alt="card image" thumbnail />
              </Col>
              <Col md={9}>
                <p className="text-description">
                  A highly accomplished Web Developer with over six years of
                  professional experience. Proven ability to create user
                  interface components using React.js and Angular and
                  troubleshoot complicated challenges. Have contributed
                  significantly to the creation of high-quality code with
                  outstanding uptime and performance. I'm looking forward to
                  delivering robust and unique solutions.
                </p>
                <Row>
                  <Col md={8}>
                  <h6 className="ss-subhead">Technical <span>proficiency:</span> </h6>
                  <p className="text-description">Expertise in React.js, JavaScript, CSS, and HTML. I have extensive experience building and optimizing user interface components.</p>
                  <h6 className="ss-subhead">Problem-solving  <span>skill:</span> </h6>
                  <p className="text-description">Strong ability to debug code, identify issues, and execute effective coding solutions.</p>
                  <h6 className="ss-subhead">Team <span>collaboration:</span> </h6>
                  <p className="text-description">Skilled in working collaboratively with a team to create and ensure the robustness of front-end components.</p>
                  </Col>
                  <Col md={4}>
                  <h6 className="ss-subhead">Use at <span>Work:</span> </h6>
                <div className="stat-grid">
                  {skill.map(skillSet => <span className="stat-grid-des">{skillSet}</span>)}
                </div>
                  </Col>
                </Row>
                
                <div>

                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default About;
