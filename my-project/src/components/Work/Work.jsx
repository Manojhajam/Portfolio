import React from "react";
import LMS from "../../assets/LMS.png";
import { Github, Layers } from "lucide-react";
import { FolderOpen } from "lucide-react";

const Work = () => {
  return (
    <div className="container px-16 mx-auto bg-slate-50">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-ce">
          {/* Card-1(LMS) */}
          <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border/50">
            <div className="relative overflow-hidden h-56">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="/assets/LMS.png"
                alt=""
              />
              <a
                href="https://github.com/Manojhajam/Library-management-System"
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
                  Full Stack Development
                </h2>
              </div>
              <h1 className="text-xl font-semibold mb-2">
                Library management System
              </h1>
              <p className="text-muted-foreground">
                A Library Management System web application that allows users to
                manage books, members and transactions.
              </p>
            </div>
          </div>

          {/* Card-2 */}

          <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border/50">
            <div className="relative overflow-hidden h-56">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="/assets/weather.png"
                alt=""
              />
              <a
                href="https://github.com/Manojhajam/Weather-dashboard-react"
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
                  Frontend Development
                </h2>
              </div>
              <h1 className="text-xl font-semibold mb-2">Weather Dashboard</h1>
              <p className="text-muted-foreground">
                A weather dashboard where we can see current, hourly and daily
                forcast weaather.
              </p>
            </div>
          </div>

          {/* Card-3 */}
          <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border/50">
            <div className="relative overflow-hidden h-56">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="/assets/LMS.png"
                alt=""
              />
              <a
                href="https://github.com/Manojhajam/Library-management-System"
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
                  Full Stack Development
                </h2>
              </div>
              <h1 className="text-xl font-semibold mb-2">
                Library management System
              </h1>
              <p className="text-muted-foreground">
                A Library Management System web application that allows users to
                manage books, members and transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
