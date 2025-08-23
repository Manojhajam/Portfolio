import React from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree:
        "Bachelor of Science in Computer Science and Information Technology",
      institution: "Tribhuvan University, Nepal",
      duration: "2023 - Present",
      description:
        "Studying core areas of computer science including programming, algorithms, databases, networking, AI, and web development. Gaining both theoretical knowledge and practical experience through projects and coursework.",
    },
    {
      degree: "Computer Science",
      institution: "Shikshadeep H.S School, Biratnagar",
      duration: "2020 - 2022",
      description:
        "Studied the fundamentals of computer science including programming, computer systems, and basic networking. Gained foundational knowledge in both theory and practical applications through lab work and coursework.",
    },
  ];
  const certificationData = [
    {
      title: "Fullstack Development Certification",
      company: "Clove IT, Biratnagar",
      duration: "2025",
      description:
        "Completed a 3-month certification program in full-stack development, focusing on React for frontend, NodeJS for backend, and MmogoDB for database management. Gained hands-on experience in building CRUD operations, API fetching, and creating responsive designs.",
    },
  ];

  const experienceData = [
    {
      position: "Intern",
      company: "Not yet",
      duration: "-",
      description:
        "Worked on both frontend and backend development of web applications and mobile apps. Built responsive UIs and integrated APIs, contributing to end-to-end feature implementation.",
    },
  ];

  return (
    <section id="education" className="section bg-secondary/30 min-h-screen">
      <div className="w-[80%] mx-auto">
        <div className="container max-w-4xl mx-auto">
          <h2 className="section-title text-4xl font-bold text-center mb-4 pt-8">
            Education & Experience
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-10 rounded-full"></div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <GraduationCap
                  size={24}
                  color={"blue"}
                  className="text-primary mr-2"
                />
                Education
              </h3>
              <div className="space-y-8">
                {educationData.map((item, index) => (
                  <div key={index} className="relative pl-8 timeline-line">
                    <div className="absolute top-0 left-0.5 w-3 h-3 rounded-full bg-blue-600 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-primary -translate-x-[2px]"></div>
                    <h4 className="text-lg font-medium">{item.degree}</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      {item.institution} | {item.duration}
                    </p>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <GraduationCap
                    size={24}
                    color={"blue"}
                    className="text-primary mr-2"
                  />
                  Certification
                </h3>
                <div className="space-y-8">
                  {certificationData.map((item, index) => (
                    <div key={index} className="relative pl-8 timeline-line">
                      <div className="absolute top-0 left-0.5 w-3 h-3 rounded-full bg-blue-600 -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-primary -translate-x-[2px]"></div>
                      <h4 className="text-lg font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.company} | {item.duration}
                      </p>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-7">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Briefcase
                    size={24}
                    color={"blue"}
                    className="text-primary mr-2"
                  />
                  Experience
                </h3>
                <div className="space-y-8">
                  {experienceData.map((item, index) => (
                    <div key={index} className="relative pl-8 timeline-line">
                      <div className="absolute top-0 left-0.5 w-3 h-3 rounded-full bg-blue-600 -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-primary -translate-x-[2px]"></div>
                      <h4 className="text-lg font-medium">{item.position}</h4>
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.company} | {item.duration}
                      </p>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
