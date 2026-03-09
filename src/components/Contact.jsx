import emailjs from "@emailjs/browser";
import { Email, LocationOn, Phone } from "@mui/icons-material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Please enter a valid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required")
});

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS keys are not configured.");
      }

      await emailjs.send(serviceId, templateId, values, { publicKey });
      setStatus("Message sent successfully.");
      resetForm();
    } catch (error) {
      setStatus("Message failed. Configure EmailJS keys in .env and try again.");
    } finally {
      setSubmitting(false);
      setTimeout(() => setStatus(""), 4000);
    }
  };

  return (
    <section id="contact" className="section-gap">
      <div className="container">
        <h2 className="section-title text-center">Contact</h2>
        <p className="text-center section-subtitle mb-5">Let's discuss your project.</p>
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="contact-card contact-info h-100">
              <small className="text-secondary">Contact Info</small>
              <h2>Let's Connect With Us</h2>
              <p>
                I’m passionate about creating seamless digital experiences.
                Feel free to reach out for collaboration, questions, or just to say hello!
              </p>

              <div className="contact-item d-flex align-items-center mb-3">
                <div className="icon-circle me-3">
                  <Phone fontSize="medium" className="contact-icon" />
                </div>
                <div>
                  <h6>Phone Number</h6>
                  <p>+880-1739820399</p>
                </div>
              </div>

              <div className="contact-item d-flex align-items-center mb-3">
                <div className="icon-circle me-3">
                  <Email fontSize="medium" className="contact-icon" />
                </div>
                <div>
                  <h6>Email Address</h6>
                  <p>tamimiqbal896@gmailcom</p>
                </div>
              </div>

                <div className="contact-item d-flex align-items-center mb-3">
                <div className="icon-circle me-3">
                  <LocationOn fontSize="medium" className="contact-icon" />
                </div>
                <div>
                  <h6>Address</h6>
                  <p>7 No Elephant Road, Dhaka-1201</p>
                </div>
              </div>

            </div>
          </div>

          <div className="col-lg-7">
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
              {({ isSubmitting, errors, touched }) => (
                <Form className="contact-form">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <Field
                      id="name"
                      name="name"
                      className={`form-control ${errors.name && touched.name ? "is-invalid" : ""}`}
                    />
                    <ErrorMessage component="div" className="invalid-feedback" name="name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className={`form-control ${errors.email && touched.email ? "is-invalid" : ""}`}
                    />
                    <ErrorMessage component="div" className="invalid-feedback" name="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <Field
                      id="subject"
                      name="subject"
                      className={`form-control ${errors.subject && touched.subject ? "is-invalid" : ""}`}
                    />
                    <ErrorMessage component="div" className="invalid-feedback" name="subject" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <Field
                      id="message"
                      as="textarea"
                      name="message"
                      rows="5"
                      className={`form-control ${errors.message && touched.message ? "is-invalid" : ""}`}
                    />
                    <ErrorMessage component="div" className="invalid-feedback" name="message" />
                  </div>
                  <button type="submit" className="btn btn-primary mainbtn" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  {status && <p className="small mt-3 mb-0">{status}</p>}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;