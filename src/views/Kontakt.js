import React from "react";
export default function Kontakt() {
  return (
    <div className="supplies-container">
      <div className="container">
        <p>Contact Me</p>

        <form class="contact-form" action="form.php" method="POST">
          <label for="contact-name" class="contact-label">
            Your Name *
          </label>
          <input
            name="name"
            id="contact-name"
            class="contact-input"
            type="text"
            placeholder="Your Name *"
            required="required"
          />
          <br />
          <label for="contact-email" class="contact-label">
            Your Email *
          </label>
          <input
            name="email"
            id="contact-email"
            class="contact-input"
            type="text"
            placeholder="Your Email *"
            required="required"
          />
          <br />
          <label for="contact-message" class="contact-label">
            Your message *
          </label>
          <textarea
            name="message"
            id="contact-message"
            class="contact-input contact-message"
            placeholder="Your message *"
            required="required"
          ></textarea>
          <br />
          <input class="contact-submit" type="submit" value="Submit message" />
        </form>

        {/* <div>
          <form action="/action_page.php">
            <label>First Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
            <br />
            <label>Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
            <br />
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
            />
            <br />
            <label>Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
            ></textarea>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div> */}
      </div>
    </div>
  );
}
