import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import photography from "../../images/photo/photography (1).svg";
import drawing from "../../images/Drawing.svg";
function Hobbies() {
  const [newView,setNewView] = useState(false);
  const [toogle,SetToogle] = useState(false);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
    setNewView(true)
  };
  return (
    <>
    <div className="hobbies-page" id="hobbies">
      <div className="secondary-heading">
        Hobbies<span>.</span>
      </div>
      <div>
        <Container>
          <Row className="hobbies-card-main text-center">
            <Col></Col>
            <Col className="hobbies-card" role="link"
        onClick={() => openInNewTab("/photogallery")}>
            <img src={photography} />
              <h6>Photography</h6>
            </Col>
            <Col className="hobbies-card">
            <img src={drawing} />
              <h6>Drawing</h6>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
    </>
  );
}

export default Hobbies;
