import React from "react";

function Contact() {
  return (
    <div className="container w-full mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
      <form className="mt-4">
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border rounded-lg p-2 mt-1"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border rounded-lg p-2 mt-1"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="message" className="text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            className="border rounded-lg p-2 mt-1"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
