import { useEffect, useRef, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaGitAlt, FaGithub, FaReact, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiPostgresql, SiDjango } from "react-icons/si";

const skillsData = [
  { name: "React.js", progress: 88, icon: <FaReact /> },
  { name: "Python / Django", progress: 85, icon: <SiDjango /> },
  { name: "PHP", progress: 82, icon: <FaPhp /> },
  { name: "WordPress", progress: 90, icon: <FaWordpress /> },
  { name: "HTML", progress: 95, icon: <FaHtml5 /> },
  { name: "CSS", progress: 92, icon: <FaCss3Alt /> },
  { name: "JavaScript", progress: 87, icon: <FaJs /> },
  { name: "MySQL", progress: 80, icon: <SiMysql /> },
  { name: "PostgreSQL", progress: 75, icon: <SiPostgresql /> },
  { name: "Git", progress: 78, icon: <FaGitAlt /> },
  { name: "GitHub", progress: 75, icon: <FaGithub /> },
  { name: "Tailwind CSS", progress: 85, icon: <SiTailwindcss /> },
];

function Skills() {

  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section-gap section-alt">

      <div className="container">

        <h2 className="section-title text-center">Skills</h2>
        <p className="text-center mb-5 section-subtitle">
          Core technologies I use to build modern web applications.
        </p>

        <div className="row g-4">

          {skillsData.map((skill) => (

            <div key={skill.name} className="col-md-6 col-lg-4">

              <div className="skill-card p-4 shadow-sm rounded">

                <div className="d-flex justify-content-between align-items-center mb-2">

                  <div className="d-flex align-items-center gap-2">
                    <span className="skill-icon">{skill.icon}</span>
                    <h3 className="h6 mb-0">{skill.name}</h3>
                  </div>

                  <span className="small">
                    {startAnimation ? skill.progress : 0}%
                  </span>

                </div>

                <div className="progress">

                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{
                      width: startAnimation ? `${skill.progress}%` : "0%",
                      transition: "width 1.5s ease"
                    }}
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;