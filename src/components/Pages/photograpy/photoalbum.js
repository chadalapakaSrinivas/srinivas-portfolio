import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
//import "../../Styles/main.scss";
import image1 from '../../../images/gallery/1.JPG';
import image2 from '../../../images/gallery/2.JPG';
import image3 from '../../../images/gallery/3.JPG';
import image4 from '../../../images/gallery/4.JPG';
import image5 from '../../../images/gallery/5.JPG';
import image6 from '../../../images/gallery/6.JPG';
import image7 from '../../../images/gallery/7.JPG';
import image8 from '../../../images/gallery/8.JPG';
import image9 from '../../../images/gallery/9.JPG';
import image10 from '../../../images/gallery/10.JPG';
import image11 from '../../../images/gallery/11.JPG';
import { Col, Row } from "react-bootstrap";
const images = [
  {
     src: image3,
     width: "100%",
     height: "100%",
  },
  {
     src: image1,
     width: "100%",
     height: "100%",
  },
  {
     src: image2,
     width: "100%",
     height: "100%",
  },
 {
  src: image4,
  width: "100%",
  height: "100%",
},
{
  src: image6,
  width: "100%",
  height: "100%",
},
{
  src: image7,
  width: "100%",
  height: "100%",
},
{
  src: image8,
  width: "100%",
  height: "100%",
},
{
  src: image9,
  width: "100%",
  height: "100%",
},
{
  src: image5,
  width: "100%",
  height: "100%",
},
{
  src: image10,
  width: "100%",
  height: "100%",
},
{
  src: image11,
  width: "100%",
  height: "100%",
},
];
const styleSmall = () =>{
  return ({
    border:'4px solid #ffffff81',
    display: 'block',
    width: '100%',
    height:'100%',
    //padding:'3px',
    borderRadius :'8px',
    //margin:'5px',
    pointerEvents: 'none',
    backgroundColor :'transparent',
    //boxShadow :'0px 0px 10px #fffff'
 });
}
function Photoalbum() {
  return (
    <>
      <div className="about-page" id="about">
        <h2 className="secondary-heading">
        <span>Photo </span>Gallery<span>.</span>
        </h2>
        <div className="container mt-5">
          {/* <Row>
            <Col md={4}>
            <img src={image1} width="100%" />
            <img src={image1} width="100%" />
            </Col>
            <Col md={4}>
            <img src={image2} width="100%" />
            <img src={image4} width="100%" />

            </Col>
            <Col md={4}>
            <img src={image3} width="100%" />
            </Col>
            <Col md={4}>
            <img src={image1} width="100%" />
            </Col>
            <Col md={4}>
            <img src={image2} width="100%" />
            </Col>
            <Col md={4}>
            <img src={image4} width="100%" />
            </Col>
          </Row> */}
          <Gallery enableImageSelection={false} 
          thumbnailStyle={styleSmall}
          images={images} />

        </div>
      </div>
    </>
  )
}

export default Photoalbum