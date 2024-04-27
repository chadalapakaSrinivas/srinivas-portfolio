import React from "react";

function ExperienceMockUp(props) {
  console.log(props.data.ExperienceData.map((data) => data.Responsibilities));
  const listItems = props.data.ExperienceData.map((person) => (
    <li>{person.Responsibilities}</li>
  ));
  return (
    <>
      {props.data.ExperienceData.map((data, index) => (
        <div className="container">
          <div className="company-name ss-subhead">{data.companyName}</div>
          <div className="company-Duration ss-highlight">
            {data.companyStart} - {data.companyEnd}
          </div>
          <div className="client text-description"><i>{data.client}</i></div>
          <ul className="text-description">{listItems}</ul>
          <div className="Technologiesused text-description"><b>Technologiesused:</b> {data.Technologiesused}</div>
        </div>
      ))}
    </>
  );
}

export default ExperienceMockUp;
