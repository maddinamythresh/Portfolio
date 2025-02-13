import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mythresh</span> from <span className="purple">Overland Park KS</span>.
            <br />
            I’m a software engineer with over three years of experience in building scalable, high-performance applications. My passion for programming started early and has only grown stronger over time.
            <br />
            I am fluent in <strong>C#</strong>, <strong>JavaScript</strong>, and <strong>.NET</strong>, and specialize in creating innovative web technologies and products. I have worked on projects ranging from <strong>HIPAA-compliant healthcare systems</strong> to <strong>real-time applications</strong>, and have extensive experience in <strong>Node.js</strong>, <strong>React.js</strong>, <strong>Next.js</strong>, and integrating <strong>payment gateways</strong>.
            <br />
            
           
          </p>
          

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
