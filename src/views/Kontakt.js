import React from "react";

import "../styles/Kontakt.scss";

export default function Kontakt() {
  return (
    <div className="kontakt-page-header">
      <div className="supplies-container transparent-contact">
        <div className="container">
          <div className="contact">
            <h2 style={{ marginTop: "0px", marginBottom: "5px" }}>
              Kontaktformular
            </h2>
            <p>Hinterlasse mir doch eine Nachricht!</p>
            <div className="row">
              <div className="col-6">
                <ul className="contact-methods">
                  <li>
                    <a href="mailto:info@emergency-survival-app.com">
                      <span className="contact-icon">
                        <i className="far fa-envelope-open"></i>
                      </span>
                      E-Mail
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Robo22Robo" target="_blank">
                      <span className="contact-icon">
                        <i className="fab fa-github"></i>
                      </span>
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/robert-krawczyk-71020b1a2/"
                      target="_blank"
                    >
                      <span className="contact-icon">
                        <i className="fab fa-linkedin"></i>
                      </span>
                      linkedin
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-5">
                <form className="contact-form" action="form.php" method="POST">
                  <input
                    name="name"
                    id="contact-name"
                    className="contact-input"
                    type="text"
                    placeholder="Dein Name"
                    required="required"
                  />
                  <br />

                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    className="contact-input"
                    placeholder="Deine E-Mail"
                    required="required"
                  />
                  <br />

                  <textarea
                    name="message"
                    id="contact-message"
                    className="contact-input contact-message"
                    placeholder="Deine Nachricht"
                    required="required"
                  ></textarea>
                  <br />

                  <br />
                  <input
                    className="contact-submit"
                    type="submit"
                    value="Nachricht abschicken!"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
