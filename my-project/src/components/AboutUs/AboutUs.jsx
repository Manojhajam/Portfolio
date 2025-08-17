import React from "react";
import { ChevronsLeftRight } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="text-4xl  gap-4 bg-slate-50">
      <div className=" h-screen flex items-center justify-center flex-col gap-8">
        <h1 className="text-4xl font-bold mb-10">About Me</h1>

        <div className="flex gap-8">
          <div className="text-lg text-gray-600 flex flex-col gap-6 max-w-2xl mx-auto">
            <p>
              Hi, I’m Manoj, a passionate Web Developer with a keen eye for
              detail and a drive to build impactful digital experiences. I enjoy
              transforming ideas into clean, efficient, and user-friendly
              solutions that not only work well but also look great.
            </p>
            <p>
              With a strong foundation in React,
              Node.js, Tailwind, MongoDB, I love exploring new technologies and
              continuously improving my craft. Beyond coding, I’m motivated by
              solving real-world problems, collaborating with creative minds,
              and delivering projects that make a difference.
            </p>
            <p>
              When I’m not building, you’ll often find me exploring new tech
              tools, reading about design trends, or enjoying
              music/fitness/travel.
            </p>
          </div>

          <div className="flex gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col gap-5">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="">
                  <ChevronsLeftRight color="black" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Clean Code
                </h4>
                <p className="text-sm text-gray-600">
                  Writing maintainable, scalable, and efficient code following
                  best practices.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="">
                  <ChevronsLeftRight color="black" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Clean Code
                </h4>
                <p className="text-sm text-gray-600">
                  Writing maintainable, scalable, and efficient code following
                  best practices.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="">
                  <ChevronsLeftRight color="black" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Clean Code
                </h4>
                <p className="text-sm text-gray-600">
                  Writing maintainable, scalable, and efficient code following
                  best practices.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="">
                  <ChevronsLeftRight color="black" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Clean Code
                </h4>
                <p className="text-sm text-gray-600">
                  Writing maintainable, scalable, and efficient code following
                  best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
