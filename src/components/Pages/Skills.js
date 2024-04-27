import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import reactimg from "../../images/reactjs.svg";
import css from "../../images/css.svg";
import bootstrapimg from "../../images/bootstrap.svg";
import javascriptimg from "../../images/javascript.svg";
import htmlsvg from "../../images/html.svg";
import angular from "../../images/angular.svg";
function Skills() {
  return (
    <>
    <div className="skills-page" id='skills'>
    <div className='secondary-heading'>Skills<span>.</span></div>
    <Container>
      <Row className='skill-card-main text-center'>
        <Col className='skill-card'>
          <img src={htmlsvg} />
          <h6>HTML</h6>
        </Col>
        <Col className='skill-card'>
        <img src={css} />
          <h6>CSS 3</h6>
        </Col>
        <Col className='skill-card'>
        <img src={bootstrapimg} />
          <h6>Bootstrap</h6>
        </Col>
        <Col className='skill-card'>
        <img src={javascriptimg} />
          <h6>JavaScript</h6>
        </Col>
        <Col className='skill-card'>
        <img src={reactimg} />
          <h6>React JS</h6>
        </Col>
        <Col className='skill-card'>
        <img src={angular} />
          <h6>Angular</h6>
        </Col>
      </Row>
      <Row className='skill-card-main mt-5'>
        
      </Row>
    </Container>
    </div>
    </>
  )
}

export default Skills