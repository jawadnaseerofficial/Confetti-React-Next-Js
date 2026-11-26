import ExperienceCard from "../components/ExperienceCard";
import Grid from "../components/Grid";

function Experience() {
  return (
    <div className="bg-black min-w-full w-full text-white flex flex-col items-center overflow-hidden">

      <div>
        <h2 className="lg:text-[72px] text-4xl sm:text-5xl md:text-6xl text-center bg-[radial-gradient(circle,#fff,rgba(255,255,255,0.35))] bg-clip-text text-transparent">
          Seamless Experience
        </h2>

        <p className="text-[14px] mx-auto mt-2 text-center w-[42ch]">
          Our top features are designed to provide you with a seamless
          experience and make your financial management as easy as possible.
        </p>
      </div>

      <ExperienceCard />

        <div className="mt-[10rem]">
        <h2 className="lg:text-[72px] text-4xl sm:text-5xl md:text-6xl leading-tight w-[20ch] text-center bg-[radial-gradient(circle,#fff,rgba(255,255,255,0.35))] bg-clip-text text-transparent">
          Start Your Financial Journey Today
        </h2>

        <p className="lg:text-[14px] text-[12px] mx-auto text-center mt-3 w-[47ch]">
          Are you ready to take control of your finances and start your financial journey? Look no further than our platform.
        </p>
      </div>

      <div className="ml-[16rem] mt-[8rem]">
      <Grid />
      </div>

    </div>
  );
}

export default Experience;
