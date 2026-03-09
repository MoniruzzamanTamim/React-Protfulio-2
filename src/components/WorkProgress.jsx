import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaComments,
  FaClipboardList,
  FaDraftingCompass,
  FaCode,
  FaShareSquare,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Discussion",
    description:
      "To understand the project needs & requirements it’s very important for me, for that I discuss with every details to related projects if needed I communicate by video or audio conversations.",
    icon: <FaComments size={30} />,
  },
  {
    id: 2,
    title: "Planning",
    description:
      "Then I can create a plan for the interior projects. Planning gives high potential to every projects. Every single detail listed in the plan.",
    icon: <FaClipboardList size={30} />,
  },
  {
    id: 3,
    title: "Design",
    description:
      "I give highly concentration to website design, every time I try to give my best to do clean and services related awesome design for the website.",
    icon: <FaDraftingCompass size={30} />,
  },
  {
    id: 4,
    title: "Coding",
    description:
      "The website is built by web language that’s why we need to code for every website. Clean and developer friendly coding is very important.",
    icon: <FaCode size={30} />,
  },
  {
    id: 5,
    title: "Submit for Review",
    description:
      "After design and coding, I send for review to client. If there are revisions, I happily make the changes.",
    icon: <FaShareSquare size={30} />,
  },
  {
    id: 6,
    title: "Website Is Ready!",
    description:
      "After reviewing everything, the final step is publishing the website and providing full support to the client.",
    icon: <FaCheckCircle size={30} />,
  },
];

const WorkProgress = () => {
  return (
    <section id="workprocess" className="section-gap py-5">
      <Container>

        <h3 className="text-center mb-4">How do I work?</h3>

        <Row className="g-4">
          {steps.map((step) => (
            <Col key={step.id} lg={4} md={6}>
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body>
                  <div className="mb-3 text-primary cart-body">{step.icon}</div>
                  <Card.Title>
                    {step.id}. {step.title}
                  </Card.Title>
                  <Card.Text>{step.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
};

export default WorkProgress;