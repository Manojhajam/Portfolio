import React from "react";
import bookshare from "../../assets/bookshare.jpeg";
import dinetime from "../../assets/dinetime.jpeg";
import { Github, Layers } from "lucide-react";
import { FolderOpen } from "lucide-react";

const projects = [
  {
    image: "/assets/gpstracker.png",
    githubUrl: "https://school.nazartrack.com/",
    category: "Full Stack Development",
    title: "School Bus Tracking System",
    description:
    "A real-time school bus tracking platform that enables schools and parents to monitor buses, track live locations, manage routes and students, and receive timely notifications."
  },
  {
    image: "/assets/LMS.png",
    githubUrl: "https://github.com/Manojhajam/Library-management-System",
    category: "Full Stack Development",
    title: "Library Management System",
    description:
      "A Library Management System web application that allows users to manage books, members and transactions.",
  },
  {
    image: "/assets/weather.png",
    githubUrl: "https://github.com/Manojhajam/Weather-dashboard-react",
    category: "Frontend Development",
    title: "Weather Dashboard",
    description:
      "A weather dashboard where we can see current, hourly and daily forcast weaather.",
  },
  {
    image: dinetime,
    githubUrl: "https://github.com/Manojhajam/dine-time",
    category: "App Development",
    title: "Dine Time App",
    description:
      "A dine time app that allows users to book tables at restaurants.",
  },
  {
    image: bookshare,
    githubUrl: "https://github.com/Manojhajam/book-share-app",
    category: "App Development",
    title: "Book Share App",
    description:
      "A Book Sharing App web application that allows users to share and discover new books.",
  },
];

const Work = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 bg-slate-50 mb-4">
      <div className="min-h-screen">
        <h1 className="text-4xl font-bold pt-10 mb-4 text-center">
          My Recent Works
        </h1>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-5 rounded-full"></div>
        <div className="flex gap-2 justify-center mb-5 items-center">
          <FolderOpen color="blue" size={20} />
          <p className="text-gray-500">Portfolio Showcase</p>
        </div>
        <div className="flex items-center justify-center mb-5">
          <p className="max-w-lg text-center text-gray-500">
            A collection of my recent projects and accomplishments spanning
            various fields of expertise.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border/50"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={project.image}
                  alt={project.title}
                />
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Github className="h-8 w-8 text-white hover:scale-110 transition-transform" />
                </a>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Layers
                    color="blue"
                    className="lucide lucide-layers h-4 w-4 text-primary"
                  />
                  <h2 className="text-xs text-gray-500 font-medium">
                    {project.category}
                  </h2>
                </div>
                <h1 className="text-xl font-semibold mb-2">{project.title}</h1>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
