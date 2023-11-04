import React from "react";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ResearchCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", fontSize: "24px" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", paddingTop: "10px", margin: "5px" }}>
          {props.description}
        </Card.Text>
        <ul className='uncentered'>
          {props.bullets.map(bullet => {
            return (<li>
              {bullet}
            </li>)
          })}
          </ul>
      </Card.Body>
    </Card>
  );
}
export default ResearchCard;
