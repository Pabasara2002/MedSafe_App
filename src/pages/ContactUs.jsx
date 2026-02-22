import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InputField from "../components/InputField";
import "./css/ContactUs.css";

export default function Contact() {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  return (
    <>
      <Navbar loggedIn />

      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          Connect with our team to learn how our virtual
          assistants can help.
        </p>

        <div className="form-card">
          <div className="grid-2">
            <InputField
              label="First Name*"
              value={form.first}
              onChange={handleChange("first")}
            />
            <InputField
              label="Last Name*"
              value={form.last}
              onChange={handleChange("last")}
            />

            <InputField
              label="Email*"
              value={form.email}
              onChange={handleChange("email")}
            />
            <InputField
              label="Phone Number*"
              value={form.phone}
              onChange={handleChange("phone")}
            />
          </div>

          <div className="input-group">
            <label>Describe your thoughts here*</label>
            <textarea
              className="large-textarea"
              value={form.message}
              onChange={handleChange("message")}
            />
          </div>

          <button className="btn-primary center">
            Send message
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
