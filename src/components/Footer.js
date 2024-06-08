import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faSnapchat } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-10 w-full text-white absolute -bottom-20  py-5">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <h2 className="text-2xl">Developed by Nikhil Raj</h2>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/nikhil_rajput011/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon size="2x" icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-raj-18365a226/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon size="2x" icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/nikhil0235"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon size="2x" icon={faGithub} />
          </a>
          <a
            href="https://nikhil-rajput01.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon size="2x" icon={faSnapchat} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
