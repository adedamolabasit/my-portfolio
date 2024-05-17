import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-700 mb-6">
        Feel free to reach out to me at <a href="mailto:adedamolabasit09@gmail.com" className="text-blue-500 hover:underline">adedamolabasit09@gmail.com</a> or connect with me on social media:
      </p>
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://discord.gg/your-discord-invite-link" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
          <FontAwesomeIcon icon={faDiscord} size="2x" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
