import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

export default function Contact() {
  const [submit, setSubmit] = useState(false);
  const form = useRef();

  function handelSubmit(e) {
    e.preventDefault();
    emailjs.sendForm("service_bti3o46", "template_cd5rj8z", form.current, "TtjKxFuGlxJBcaxjM").then(
      (result) => {
        console.log(result.text);
        setSubmit(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={handelSubmit} action="mailto:gadabdallah@gmail.com" method="POST" enctype="multipart/form-data" name="EmailForm">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required />
          <button type="submit">Submit</button>
          {submit && <span>Thanks for your Message !</span>}
        </form>
      </div>
    </div>
  );
}
