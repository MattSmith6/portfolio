import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div style={{ alignItems: 'center' }}>
        {props.icon}
      </div>
      <Card.Body style={{ paddingTop: "0px" }}>
        <Card.Title style={{ fontWeight: "bold", fontSize: "24px" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", paddingTop: "10px"  }}>
          {props.description}
        </Card.Text>
        
        {!props.isBlog && props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <div style={{ display: 'flex', verticalAlign: 'middle', alignItems: 'center', textAlign: 'center' }}>
              <BsGithub /> &nbsp;&nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </div>
          </Button>
        )}
        
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <div style={{ display: 'flex', verticalAlign: 'middle', alignItems: 'center', textAlign: 'center' }}>
              <CgWebsite /> &nbsp;&nbsp;
              {"Demos"}
            </div>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
