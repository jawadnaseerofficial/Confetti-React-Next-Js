
'use client';

import { useState } from "react";

const experiences = [
  {
    id: 1,
    icon: "images/experience/1.png",
    title: "Connect and sync your business data",
    image: "images/experience/image1.png",
  },
  {
    id: 2,
    icon: "images/experience/2.png",
    title: "Customize and tune your app's interface",
    image: "images/experience/image2.png",
  },
  {
    id: 3,
    icon: "images/experience/3.png",
    title: "Power and automate your workflows",
    image: "images/experience/image3.png",
  },
  {
    id: 4,
    icon: "images/experience/4.png",
    title: "Share and receive your money",
    image: "images/experience/image4.png",
  },
];

function ExperienceCard() {
  const [selected, setSelected] = useState(1);
  const activeExperience = experiences.find(
    (item) => item.id === selected
  );

  return (
    <div className="flex flex-col items-center mt-16">

      <div className="flex flex-col md:flex-row gap-10">

        {experiences.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item.id)}
            className={`bg-[#1b1c1d] w-[16rem] gap-4 p-5 rounded-3xl flex items-center cursor-pointer border transition-all duration-300 ${
              selected === item.id
                ? "border-white text-white"
                : "border-white/20 text-gray-300"
            }`}
          >
            <img
              src={item.icon}
              alt={`feature-${item.id}`}
              className={`transition-opacity duration-300 ${
                selected === item.id
                  ? "opacity-100"
                  : "opacity-70"
              }`}
            />

            <p className="text-[14px] w-[8rem]">
              {item.title}
            </p>

          </div>
        ))}

      </div>

      <div className="mt-20 rounded-2xl overflow-hidden">

        <img
          key={activeExperience.id}
          src={activeExperience.image}
          alt={`experience-preview-${selected}`}
          className="w-[76rem] animate-fade-in"
        />

      </div>

    </div>
  );
}

export default ExperienceCard;
