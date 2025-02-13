import React from "react";
import Card from "react-bootstrap/Card";
import { ImBriefcase } from "react-icons/im";

function ExperienceCard() {
  return (
    <div>
      {/* Express Scripts */}
      <Card className="experience-card-view">
        <Card.Body>
          <Card.Title>
            <ImBriefcase /> Express Scripts | Austin, TX
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Software Engineer | Jan 2024 – Present
          </Card.Subtitle>
        </Card.Body>
      </Card>

      {/* Asiaa Data IT PVT LTD */}
      <Card className="experience-card-view">
        <Card.Body>
          <Card.Title>
            <ImBriefcase /> Asiaa Data IT PVT LTD | Bangalore, India
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Software Engineer | Feb 2020 – July 2022
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ExperienceCard;
