import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tav1lkj",
        "template_tjpckkp",
        form.current,
        "BWupZll2bC57YZzXk"
      )
      .then(
        (result) => {
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action=""
            method="POST"
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              id="to_name"
              name="to_name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              id="user_email"
              name="user_email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
