import React from "react";
import { motion } from "motion/react";

const skillsData = [
  { name: "JavaScript", level: "Advanced", percentage: 90 },
  { name: "React", level: "Advanced", percentage: 90 },
  { name: "Node.js", level: "Intermediate", percentage: 70 },
  { name: "HTML & CSS", level: "Advanced", percentage: 90 },
  { name: "Tailwind CSS", level: "Intermediate", percentage: 70 },
  { name: "C/C++", level: "Intermediate", percentage: 70 },
  { name: "Git & GitHub", level: "Intermediate", percentage: 70 },
  { name: "Figma", level: "Beginner", percentage: 50 },
];

const Skills = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-6 min-h-screen">
      <h2 className="text-4xl font-bold mb-4 text-center">Skills</h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto mb-10 rounded-full"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((skill, idx) => (
          <div
            key={idx}
            className="bg-white shadow rounded-lg p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xl font-semibold">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.percentage}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-blue-600"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
