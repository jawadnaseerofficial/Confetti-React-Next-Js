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
    <div className="flex flex-col items-center mt-16 w-full px-4 sm:px-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-4 xl:gap-6 w-full max-w-[66rem]">

        {experiences.map((item) => (
          <div
            key={item.id}
            role="button"
            tabIndex={0}
            aria-pressed={selected === item.id}
            onClick={() => setSelected(item.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelected(item.id);
              }
            }}
            className={`bg-[#1b1c1d] w-full min-w-0 gap-3 sm:gap-4 p-4 sm:p-5 rounded-3xl flex items-center cursor-pointer border transition-all duration-300 select-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
              selected === item.id
                ? "border-white text-white"
                : "border-white/20 text-gray-300 hover:border-white/40"
            }`}
          >
            <img
              src={item.icon}
              alt={`feature-${item.id}`}
              className={`w-9 h-9 sm:w-10 sm:h-10 shrink-0 object-contain transition-opacity duration-300 ${
                selected === item.id
                  ? "opacity-100"
                  : "opacity-70"
              }`}
            />

            <p className="text-[14px] leading-snug flex-1 sm:flex-none sm:w-[8rem] max-w-full">
              {item.title}
            </p>

          </div>
        ))}

      </div>

      <div className="mt-12 sm:mt-16 lg:mt-20 w-full max-w-[76rem] rounded-2xl overflow-hidden">

        <img
          key={activeExperience.id}
          src={activeExperience.image}
          alt={`experience-preview-${selected}`}
          className="w-full h-auto block animate-fade-in"
        />

      </div>

    </div>
  );
}

export default ExperienceCard;