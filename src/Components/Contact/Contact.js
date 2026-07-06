import React, { useState } from "react";
import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";

import "../../styles/contactStyles.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [alert, setAlert] = useState({
    show: false,
    type: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    console.log("EMail : ", email)

    emailjs
      .send(
        "service_x6ywm5f",
        "template_buir34s",
        templateParams,
        "m8Jesgit46igATag7",
      )
      .then(() => {
        setAlert({
          show: true,
          type: "success",
          message: "Your message has been sent successfully!",
        });

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");

        setTimeout(() => {
          setAlert({
            show: false,
            type: "",
            message: "",
          });
        }, 5000);
      })
      .catch((error) => {
        console.error(error);

        setAlert({
          show: true,
          type: "danger",
          message: "Failed to send message. Please try again.",
        });

        setTimeout(() => {
          setAlert({
            show: false,
            type: "",
            message: "",
          });
        }, 5000);
      });
  };

  return (
    <Element>
      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Left Side */}
            <div className="col-lg-5">
              <div className="info-wrap">
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i
                    className="fa-solid fa-location-dot fa-2xl"
                    style={{ color: "rgb(116, 192, 252)" }}
                  ></i>
                  <div>
                    <h3 className="text-start">Address</h3>
                    <p>Madurai, Tamil Nadu</p>
                  </div>
                </div>

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i
                    className="fa-solid fa-phone fa-2xl"
                    style={{ color: "rgb(116, 192, 252)" }}
                  ></i>
                  <div>
                    <h3 className="text-start">Call Us</h3>
                    <p>+91 90476 62646</p>
                  </div>
                </div>

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i
                    className="fa-solid fa-envelope fa-2xl"
                    style={{ color: "rgb(116, 192, 252)" }}
                  ></i>
                  <div>
                    <h3 className="text-start">Email Us</h3>
                    <p>aparnaravi205@gmail.com</p>
                  </div>
                </div>

                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.416144613867!2d78.14246917586327!3d9.982441873334869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c6432a619da7%3A0x2c716f725c363283!2sRamasamy%20Nagar%20Arch%20-%20Allied%20Garden%20Road%2C%20Tiruppalai%2C%20Tamil%20Nadu%20625014!5e0!3m2!1sen!2sin!4v1716008822854!5m2!1sen!2sin"
                  loading="lazy"
                  className="img-fluid mt-4 map"
                  style={{
                    border: "0",
                    width: "100%",
                    height: "300px",
                  }}
                ></iframe>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-lg-7">
              {/* Bootstrap Alert */}
              {alert.show && (
                <div
                  className={`alert alert-${alert.type} alert-dismissible fade show`}
                  role="alert"
                >
                  {alert.message}

                  <button
                    type="button"
                    className="btn-close"
                    onClick={() =>
                      setAlert({
                        show: false,
                        type: "",
                        message: "",
                      })
                    }
                  ></button>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label htmlFor="name-field" className="pb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name-field"
                      className="form-control"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email-field" className="pb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email-field"
                      className="form-control"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="subject-field" className="pb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject-field"
                      className="form-control"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="message-field" className="pb-2">
                      Message
                    </label>
                    <textarea
                      id="message-field"
                      className="form-control"
                      rows="6"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-primary submit_btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* End Right Side */}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Contact;
