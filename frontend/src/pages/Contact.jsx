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
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
      <div className="mt-6">
        <p>Email: support@redeal.com</p>
        <p>Phone: +91-9876543210</p>
        <p>Address: ReDeal Labs, Chapra, Bihar, India</p>
      </div>
    </div>
  );
}

export default Contact;
