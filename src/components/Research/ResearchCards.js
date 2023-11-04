import React from "react";
import Card from "react-bootstrap/Card";

function ResearchCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", fontSize: "24px" }}>{props.projectLink ? <a href={props.projectLink} style={{ textDecoration: 'none' }}>{props.title}</a> : props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", paddingTop: "10px", margin: "5px" }}>
          {props.description}
        </Card.Text>
        <ul className='uncentered'>
          {props.bullets.map((bullet, index) => {
            return (<li key={index} style={{ padding: '2px' }}>
              {bullet}
            </li>)
          })}
          </ul>
      </Card.Body>
    </Card>
  );
}
export default ResearchCard;
