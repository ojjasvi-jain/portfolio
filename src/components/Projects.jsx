import React, { useState } from "react";
import blogApplication from "../assets/portfolio/project-1.PNG";
import covidWorld from "../assets/portfolio/project-2.PNG";
import restaurant from "../assets/portfolio/project-3.PNG";
import etherpay from "../assets/portfolio/project-4.PNG";
import demo from "../assets/portfolio/project-5.PNG";
import fullSite from "../assets/portfolio/project-6.PNG";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 3,
      src: fullSite,
      codeUrl: "https://github.com/ojjasvi-jain",
      demoUrl: "https://cajhansisiddharth.web.app/",
    },
    {
      id: 3,
      src: restaurant,
      demoUrl: "https://ojjasvi-jain.github.io/netflix.com/index.html",
      codeUrl: "https://github.com/ojjasvi-jain/netflix.com",
    },

    {
      id: 2,
      src: covidWorld,
      demoUrl: "https://glistening-sfogliatella-a2750d.netlify.app/",
      codeUrl: "https://github.com/ojjasvi-jain/recipe_portal",
    },

    {
      id: 4,
      src: etherpay,
      demoUrl: "https://ojjasvi-jain.github.io/HTML-selling_page/",
      codeUrl: "https://github.com/ojjasvi-jain/HTML-selling_page",
    },
    {
      id: 5,
      src: demo,
      demoUrl: "https://vocal-longma-6dada3.netlify.app",
      codeUrl: "https://github.com/ojjasvi-jain/React-FoodRecipeApp",
    },
    {
      id: 1,
      src: blogApplication,
      demoUrl: "https://ojjasvi-jain.github.io/foody-website/",
      codeUrl: "https://github.com/ojjasvi-jain/foody-website",
    },

    // Add demoUrl and codeUrl for other projects
  ];

  const handleButtonClick = (demoUrl, codeUrl) => {
    if (demoUrl) {
      window.open(demoUrl, "_blank");
    }
    if (codeUrl) {
      window.open(codeUrl, "_blank");
    }
  };

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={project.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() =>
                    handleButtonClick(project.demoUrl, project.codeUrl)
                  }
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleButtonClick(project.codeUrl)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div>
            <p>Selected project: {selectedProject.demoUrl}</p>
            <p>Selected project: {selectedProject.codeUrl}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
