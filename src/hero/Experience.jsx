import ExperienceCard from "../components/ExperienceCard";
import Grid from "../components/Grid";

function Experience() {
  return (
    <div className="bg-black min-w-full w-full text-white flex flex-col items-center overflow-hidden pb-12 sm:pb-16 lg:pb-0">
      <div className="w-full px-4 sm:px-6 lg:w-auto lg:px-0">
        <h2 className="mx-auto w-fit lg:text-[72px] text-4xl sm:text-5xl md:text-6xl text-center bg-[radial-gradient(circle,#fff,rgba(255,255,255,0.35))] bg-clip-text text-transparent">
          Seamless Experience
        </h2>

        <p className="text-[14px] mx-auto mt-2 text-center w-[42ch] max-w-full">
          Our top features are designed to provide you with a seamless
          experience and make your financial management as easy as possible.
        </p>
      </div>

      <ExperienceCard />

      <div className="mt-24 sm:mt-32 lg:mt-[10rem] w-full px-4 sm:px-6 lg:w-auto lg:px-0">
        <h2 className="lg:text-[72px] text-4xl sm:text-5xl md:text-6xl leading-tight w-[20ch] max-w-full mx-auto text-center bg-[radial-gradient(circle,#fff,rgba(255,255,255,0.35))] bg-clip-text text-transparent">
          Start Your Financial Journey Today
        </h2>

        <p className="lg:text-[14px] text-[12px] mx-auto text-center mt-3 w-[47ch] max-w-full">
          Are you ready to take control of your finances and start your
          financial journey? Look no further than our platform.
        </p>
      </div>

      <div className="w-full mt-16 sm:mt-24 md:mx-auto lg:mt-[8rem] lg:ml-[16rem] lg:w-auto">
        <Grid />
      </div>
    </div>
  );
}

export default Experience;
