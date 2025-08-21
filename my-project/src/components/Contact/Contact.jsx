import React from "react";
import { Facebook, Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-slate-100 h-screen text-4x ">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-10">Get In Touch</h1>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-5 mt-2 rounded-full"></div>
        <p className="text-lg text-gray-600">
          Have a project in mind or want to discuss opportunities? I'd love to
          hear from you.
        </p>
        <p className="text-lg max-w-lg text-gray-600">
          Let's create something amazing together!
        </p>
      </div>

      {/* contact information */}

      <div className="flex justify-center mt-8"> 
        <div className="bg-white w-fit p-5 rounded-lg shadow-lg pr-28">
          <h1 className="text-xl font-semibold mb-5">Contact Information</h1>
          <div className="flex items-center gap-2">
            <Mail color="blue" size={17} />
            <h1 className="text-sm font-bold">Email</h1>
          </div>
          <p className="ml-6 text-gray-500">manojhajam4@gmail.com</p>

          <div className="flex items-center gap-2 mt-4">
            <Phone color="blue" size={17} />
            <h1 className="text-sm font-bold">Phone</h1>
          </div>
          <p className="ml-6 text-gray-500">9815068566</p>

          <div className="flex items-center gap-2 mt-4">
            <Phone color="blue" size={17} />
            <h1 className="text-sm font-bold">Location</h1>
          </div>
          <p className="ml-6 text-gray-500">Biratnagar Nepal</p>

          <div>
            <h1 className="text-lg font-semibold my-5">Follow Me</h1>
            <div className="">
              <a
                href="https://www.facebook.com/manoj.thakur.789012"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-colors duration-200 hover:bg-blue-500 hover:text-white inline-block"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/manoj-hajam-47617628a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-colors duration-200 hover:bg-blue-500 hover:text-white inline-block"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/manojhajam/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-colors duration-200 hover:bg-blue-500 hover:text-white inline-block"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
