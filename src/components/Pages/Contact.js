import React from 'react'
import { Document, Page } from 'react-pdf';
import resume from "../../images/srinivasresume.pdf";
import { Nav } from 'react-bootstrap';
function Contact() {
  
  return (
    <>
    <div className='contact-page' id='contact'>
    <div className='secondary-heading'>Contact<span>.</span></div>
    <p className='text-description container text-center'>If you want to connect! Please reach out to my mail or contact number</p>
    <h6 className='ss-subhead text-center'><span>Email:</span> <a className="text-white" href="mailto:chadalapakasrinivas@gmail.com"> chadalapakasrinivas@gmail.com</a></h6>
    <div className='ss-subhead text-center'><span>Mobile:</span> 8074910580</div>
    <div className='button-primary p-4 mt-4'><Nav.Link href={resume} download>Download Resume</Nav.Link></div>
    </div>
    </>
  )
}

export default Contact