import React from "react";
//import "../../../Styles/main.scss";
import ExperienceMockUp from "./ExperienceMockUp";
import { Container, Row ,Col} from "react-bootstrap";
const data = {
  ExperienceData: [
    {
      id: 1,
      companyName: "Cognizant",
      companyStart: 2021,
      companyEnd: "Present",
      Role: "Associate Projects",
      Responsibilities: [
        "Worked in using React JS function components, Props, State, Hooks, Forms, Events, Keys, Router, Animations, and Flux concepts",
        "Implemented stable React components and stand-alone functions to be added to any future pages.",
        "Excel-Builder was added to allow React users to obtain tabular data in Excel format.",
        "Utilized React Js Libraries like react query, react render, redux, and react material Ui & Core UI.",
        "React JS was used for templating to speed up compilation and create reusable components.",
      ],
      client: "Standard Chartered",
      Technologiesused: "React JS",
    },
    {
      id: 2,
      companyName: "Infosys",
      companyStart: 2019,
      companyEnd: 2021,
      Role: "Senior Systems engineer",
      Responsibilities: [
        "Responsible for delivering a complete frontend application ensuring high performance on mobile and desktop.",
        "Creating custom, general use modules and components which extend the elements and modules of core Angular.",
        "Experience with creating custom directives, decorators, and services to interface with restful services. ",
        "Implemented HTTP requests using RxJS Observable library to handle multiple values over time.",
        "Worked on GIT as a version control. Utilized NPM scripts for build and test environments in a Node.js application.",
        "Designed and developed the application using Agile Scrum methodology by breaking down the project to several sprints",
      ],
      client: "Warner Bros",
      Technologiesused:
        "HTML5, CSS3, Bootstrap3, SASS, Angular 2/4, ES6,Webpack, JSON, XML, Git, Visual Studio Code.",
    },
    {
      id: 3,
      companyName: "Infosys",
      companyStart: 2019,
      companyEnd: 2021,
      Role: "Angular Developer",
      Responsibilities: [
        "Enhanced application performance by Angular 6 Component based development in view of future Angular framework transitions.",
        "Helped in migrated an application developed in Angular 5.0 to Angular 10.0 .",
        "Created Typescript reusable components and services to consume REST API's using Component-based architecture provided by Angular ",
      ],
      client: "Telstra",
      Technologiesused:
        "HTML5, CSS3, Bootstrap3, SASS, Angular 2/4, ES6,Webpack, JSON, XML, Git, Visual Studio Code.",
    },
    {
      id: 4,
      companyName: "Tekenrich Pvt. Ltd. (JSS Pro Pvt. Ltd.)",
      companyStart: 2018,
      companyEnd: 2019,
      Role: "Executive UI Developer",
      Responsibilities: [
        "Involved in the development of User Interface using HTML/HTML5, CSS/CSS3, and JavaScript.",
        "Created reusable templates and style sheets based on UI standards and guidelines. Performed functional tasks using specifications and wireframes.",
        "Extensive usage of Bootstrap for layout as well as responsive design and SASS for Responsive design.",
        "Collaborating with designers to ensure designs were efficient and technically sound.",
      ],
      client: "Telstra",
      Technologiesused:
        "HTML, CSS 3, BOOTSTRAP 4, JAVASCRIPT, JQUERY, WordPress, GIT",
    },
    {
      id: 5,
      companyName: "Commlab India",
      companyStart: 2017,
      companyEnd: 2018,
      Role: "Associate Technology",
      Responsibilities: [
        "Improved the performance lags by implementing the caching to the application.",
        "Creating website layout/user interfaces by using standard HTML/CSS practices.",
        "Designing and debugging in the website development.",
        "Designing and converting web pages into responsive pages.",
        "Designing and implementing HTML email templates and newsletters & for marketing campaigns.",
        "Development of LMS Pages",
      ],
      client: "Commlab India",
      Technologiesused:
        "HTML, CSS 3, BOOTSTRAP 4, JAVASCRIPT, JQUERY, WordPress, PHP , MySQL",
    },
  ],
};
function Experience() {
  return (
    <>
      <div className="experience-page" id="experience">
        <Container>
          <Row>
            <Col md={12}>
            <h6 className="secondary-heading h6">
              Experience<span>.</span>
            </h6>
            </Col>
          </Row>
          <ExperienceMockUp data={data} />
        </Container>
      </div>
    </>
  );
}

export default Experience;
