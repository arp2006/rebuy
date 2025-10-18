import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="p-8 max-w-xl mx-auto text-gray-800">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <div className="mt-6">
        <p>Email: support@redeal.com</p>
        <p>Phone: +91-9876543210</p>
        <p>Address: ReDeal Labs, Chapra, Bihar, India</p>
      </div>
    </div>
  );
}

export default Contact;
