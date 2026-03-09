import { useEffect, useMemo, useState } from "react";
import { Facebook, LinkedIn, Twitter,Instagram } from "@mui/icons-material";
import { SiFiverr } from "react-icons/si"; 

import cv from '../Asset/Documents/MoniruzzamanTamimCV.pdf'
import tamimImage from '../Asset/Image/tamim.png'

function Banner() {
  const roles = useMemo(
    () => [
      "Professional WordPres Developer",
      "Professional Front-end Developer with React",
      "skills in PHP, Python, MySQL, and Django framework",
      "Wordpress Theme Developer"
    ],
    []
  );
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!deleting && typedText.length < current.length) {
        setTypedText(current.slice(0, typedText.length + 1));
      } else if (deleting && typedText.length > 0) {
        setTypedText(current.slice(0, typedText.length - 1));
      } else if (!deleting && typedText.length === current.length) {
        setTimeout(() => setDeleting(true), 1000);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, deleting, roleIndex, roles]);

  return (
    <section id="home" className="banner-section section-gap">
      <div className="banner-overlay" />
      <div className="container position-relative">
        <div className="row align-items-center gy-4">
          <div className="col-lg-7 col-sm-7">
            <p className="text-uppercase small fw-semibold mb-2">Hello! I'm </p>
            <h1 className="display-5 fw-bold mb-3">MD MONIRUZZAMAN TAMIM</h1>
            <h2 className="typewriter-text h4 mb-4">
              I am <span>{typedText}</span>
              <span className="type-cursor">|</span>
            </h2>
            <div className="d-flex flex-wrap gap-3 mb-4">
              <a href="#contact" className="btn btn-primary mainbtn px-4">
                Contact Me
              </a>
              <a href={cv} download className="btn btn-outline-light  px-4">
                Download CV
              </a>
            </div>
            <div className="d-flex align-items-center gap-3">
              <a href="https://facebook.com/moniruzzamantamim99" target="_blank" rel="noreferrer" className="social-icon">
                <Facebook />
              </a>
              <a href="https://www.linkedin.com/in/moniruzzamantamim/" target="_blank" rel="noreferrer" className="social-icon">
                <LinkedIn />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">
                <Twitter />
              </a>
              <a href="https://fiverr.com" target="_blank" rel="noreferrer" className="social-icon">
                <SiFiverr />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
                <Instagram />
              </a>
           
            </div>
          </div>
          <div className="col-lg-5 col-sm-5 text-center">
            <img
              className="img-fluid banner-image"
              src={tamimImage}
              alt="Moniruzzaman Tamim"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
