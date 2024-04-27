import React from "react";
//import "../../Styles/main.scss";
import cardimage from "../../images/ss.png";
import maingif from "../../images/sri.gif";
import mainjpg from "../../images/sri.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Home() {
  return (
    <>
      <div className="homemain" id="home">
        <div className="overlay">
          <div className="home-text">
            <Container>
              <Row className="home-description">
                <Col className="card-image">
                  <div>
                    {/* <img src={cardimage} height="600px" /> */}
                    <img className="thumbnail" src={mainjpg} height="500px" />
                  </div>
                </Col>
                <Col className="card-text">
                  <h6 className="ss-subhead">Hey, I'm</h6>
                  <h1 className="primary-heading">
                    Srinivas Chadalapaka<span>.</span>
                  </h1>
                  <p className="ss-subTitle ml-5"><span>Web Developer</span></p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
