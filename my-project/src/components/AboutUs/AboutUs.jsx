import React from "react";
import { ChevronsLeftRight, Heart, Palette, Zap } from "lucide-react";

const codeData = [
  {
    name: "Clean Code",
    icon: <ChevronsLeftRight color="#2563eb" size={30} />,
    Description:
      "Writing maintainable, scalable, and efficient code following best practices.",
  },
  {
    name: "Clean Code",
    icon: <Palette color="#2563eb" size={30} />,
    Description:
      "Crafting beautiful and intuitive user interfaces that enhance user experience.",
  },
  {
    name: "Fast Performance",
    icon: <Zap color="#2563eb" size={30} />,
    Description:
      "Optimizing applications for speed and performance across all devices.",
  },
  {
    name: "Passion Driven",
    icon: <Heart color="#2563eb" size={30} />,
    Description:
      "Genuinely passionate about technology and creating impactful solutions.",
  },
];

const AboutUs = () => {
  return (
    <div className="">
      <div className="w-[80%] mx-auto min-h-screen">
        <h1 className="text-4xl font-bold mb-4 pt-12 text-center">About Me</h1>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-10 rounded-full"></div>

        <div className="flex gap-6 max-md:flex-col">

          <div className="text-lg text-gray-700 flex flex-col gap-6 max-w-xl mx-auto">
            <p>
              Hi, I’m Manoj, a passionate Web Developer with a keen eye for
              detail and a drive to build impactful digital experiences. I enjoy
              transforming ideas into clean, efficient, and user-friendly
              solutions that not only work well but also look great.
            </p>
            <p>
              With a strong foundation in React, Node.js, Tailwind, MongoDB, I
              love exploring new technologies and continuously improving my
              craft. Beyond coding, I’m motivated by solving real-world
              problems, collaborating with creative minds, and delivering
              projects that make a difference.
            </p>
            <p>
              When I’m not building, you’ll often find me exploring new tech
              tools, reading about design trends, or enjoying
              music/fitness/travel.
            </p>
          </div>

           {/* Card */}
          <div className="flex gap-6 max-w-xl mx-auto">
            <div className="mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-5">
              {codeData.map((data, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="mb-4">{data.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {data.name}
                  </h4>
                  <p className="text-sm text-gray-600">{data.Description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
