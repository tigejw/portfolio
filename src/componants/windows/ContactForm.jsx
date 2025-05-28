import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);

    formData.append("access_key", "d585a0a2-6fc0-4fd5-bfaa-caad573cd8da");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <h2>Contact Form</h2>
      <input type="hidden" name="subject" value="New message from portfolio" />
      <div className="input-box">
        <label>Your Name</label>
        <input
          name="name"
          className="name-field"
          type="text"
          placeholder="input your name here!"
          required
        ></input>
      </div>
      <div className="input-box">
        <label>Your Email</label>
        <input
          name="email"
          className="email-field"
          type="email"
          placeholder="input your email here!"
          required
        ></input>
      </div>
      <div className="input-box">
        <label>Your Message</label>
        <input
          name="message"
          className="message-field"
          type="text"
          placeholder="input your name here!"
          required
        ></input>
      </div>
      <button type="submit">Send Message!</button>
    </form>
  );
}
