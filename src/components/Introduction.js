import React from "react";
import Fade from "react-reveal/Fade";

const Introduction = () => {
  return (
    <section id="about" className="py-12 px-4 bg-gray-100 text-center">
      <Fade bottom>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-gray-700 ">
          Hello! I'm Adedamola, a software developer specializing in building
          exceptional digital experiences. I have extensive experience in both
          Web2 and Web3 technologies, with a keen interest in blockchain
          technology. Here are some of the projects I've worked on.
        </p>
      </Fade>
    </section>
  );
};

export default Introduction;
