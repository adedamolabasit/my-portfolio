import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { projects } from "./Project";


const ITEMS_PER_PAGE = 3; // Number of projects per page

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeToggle, setActiveToggle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    setActiveToggle("role"); // Set the default active toggle
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    setActiveToggle(null);
  };

  const toggleActive = (toggleName) => {
    setActiveToggle(toggleName);
  };

  // Calculate index of the first and last project for the current page
  const indexOfLastProject = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - ITEMS_PER_PAGE;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(projects.length / ITEMS_PER_PAGE); i++) {
    pageNumbers.push(i);
  }

  return (
    <section id="portfolio" className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProjects.map((project, index) => (
          <Fade bottom key={index}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => openModal(project)}
                    className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
                  >
                    Explore Role
                  </button>
                  <p className="text-gray-700 mt-2 cursor-pointer hover:underline">
                    <a href={project.detailsUrl}>View project</a>
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      {/* Pagination */}
      <ul className="flex justify-center mt-8">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => setCurrentPage(number)}
              className={`mx-2 px-4 py-2 rounded ${
                currentPage === number
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {selectedProject && (
        <div
          className={`fixed inset-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center ${
            showModal ? "" : "hidden"
          }`}
        >
          <div className="bg-white p-6 rounded-lg mx-4 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <div className="mb-4">
              <button
                className={`mr-4 text-sm font-semibold ${
                  activeToggle === "role" ? "text-black-800" : "text-gray-400"
                } focus:outline-none`}
                onClick={() => toggleActive("role")}
              >
                My Role
              </button>
              <button
                className={`mr-4 text-sm font-semibold ${
                  activeToggle === "workedOn"
                    ? "text-black-800"
                    : "text-gray-400"
                } focus:outline-none`}
                onClick={() => toggleActive("workedOn")}
              >
                Technical Contribution
              </button>
              <button
                className={`mr-4 text-sm font-semibold ${
                  activeToggle === "achievements"
                    ? "text-black-800"
                    : "text-gray-400"
                } focus:outline-none`}
                onClick={() => toggleActive("achievements")}
              >
                Achievements
              </button>
              {/* Add more toggle buttons as needed */}
            </div>
            <div className="max-h-60 overflow-y-auto">
              {activeToggle === "role" && (
                <p className="text-gray-700">{selectedProject.details.role}</p>
              )}
              {activeToggle === "workedOn" && (
                <p className="text-gray-700">{selectedProject.details.workedOn}</p>
              )}
              {activeToggle === "achievements" && (
                <p className="text-gray-700">{selectedProject.details.achievements}</p>
              )}
              {/* Add more toggles for additional details */}
            </div>
            

            <button
              onClick={closeModal}
              className="inline-block mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
