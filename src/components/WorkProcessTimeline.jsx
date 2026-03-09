import React from "react";
import {
  FaComments,
  FaClipboardList,
  FaDraftingCompass,
  FaCode,
  FaShareSquare,
  FaCheckCircle,
} from "react-icons/fa";
import "./WorkProcessTimeline.css";

const steps = [
  {
    id: 1,
    title: "Discussion",
    description:
      "To understand your project needs and requirements, I discuss every detail with you. If needed, we can communicate through video or audio calls.",
    icon: <FaComments size={28} />,
  },
  {
    id: 2,
    title: "Planning",
    description:
      "Then I create a clear project plan. It includes delivery milestones, required website data from you, and all implementation details.",
    icon: <FaClipboardList size={28} />,
  },
  {
    id: 3,
    title: "Design",
    description:
      "I focus on clean, service-oriented, and modern design. A strong design improves user trust and supports business growth.",
    icon: <FaDraftingCompass size={28} />,
  },
  {
    id: 4,
    title: "Coding",
    description:
      "I build the website with clean, developer-friendly code to ensure performance, maintainability, and long-term stability.",
    icon: <FaCode size={28} />,
  },
  {
    id: 5,
    title: "Submit for Review",
    description:
      "After design and development, I submit the project for your review. If revisions are needed, I update everything based on your feedback.",
    icon: <FaShareSquare size={28} />,
  },
  {
    id: 6,
    title: "Website Is Ready!",
    description:
      "Once everything is approved, I deploy the website. I also provide full post-launch support for each project.",
    icon: <FaCheckCircle size={28} />,
  },
];

const WorkProcessTimeline = () => {
  return (
    <section id="workprocess" className="workprocess section-gap">
      <div className="container">
        <div className="row g-5">
          {steps.map((step, index) => (
            <div key={step.id} className="col-12 col-sm-6 col-lg-4">
              <article className="wpt-card">
                <div className={`wpt-icon-wrap ${((index + 1) % 3 === 0 ? "wpt-last-lg" : "")}`}>
                  <div className="wpt-icon-circle">{step.icon}</div>
                </div>
                <h5 className="wpt-title">
                  {step.id}. {step.title}
                </h5>
                <p className="wpt-desc">{step.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessTimeline;
