import React from "react";

const skillsData = [
  { name: "JavaScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "HTML & CSS", level: "Advanced" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: "Git & GitHub", level: "Intermediate" },
  { name: "Figma", level: "Beginner" },
];

const Skills = () => {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4 h-screen">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((skill, idx) => (
          <div
            key={idx}
            className="bg-white shadow rounded-lg p-6 flex flex-col items-center"
          >
            <span className="text-xl font-semibold mb-2">{skill.name}</span>
            <span className="text-sm text-gray-500">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
