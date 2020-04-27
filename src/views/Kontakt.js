import React from "react";
export default function Kontakt() {
  return (
    <div className="supplies-container">
      <div className="container">
        <p>Contact Me</p>
        <div>
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
        </div>
      </div>
    </div>
  );
}
