import tamimImage from '../Asset/Image/tamim.png'

function About() {
  return (
    <section id="about" className="section-gap">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-5 col-sm-4">
            <img
              src={tamimImage}
              className="img-fluid rounded-4 about-image"
              alt="About Tamim"
            />
          </div>
          <div className="col-lg-7 col-sm-8">
            <h2 className="section-title">ABOUT ME</h2>
            <p className="lead mb-3">Working As A Professional Freelancer, WordPress Developer And Full-Stack Developer</p>
            <p className="mb-4">
             I Have Great Experience In React JS, WordPress, JQuery, JavaScript, PHP, HTML5, CSS3, 
             Bootstrap V5, Tailwind Css, Font-Awesome, Etc. I Can Help You With Anything Related To 
             WordPress Design And Development. I Can Create Any Kind Of Website. While Working With Me, 
             You'll Get A Fully Responsive And Professional WordPress Website. I Enjoy My Work. 

            </p>
            <div className="row g-3 mb-4">
              <div className="col-sm-4">
                <div className="stat-card">
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="stat-card">
                  <h3>80+</h3>
                  <p>Projects Completed</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="stat-card">
                  <h3>40+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary mainbtn">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
