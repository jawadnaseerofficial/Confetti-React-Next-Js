import LogoMarquee from "../logoMarquee";

function Hero() {
  return (
    <section className="bg-black w-full overflow-hidden pt-28 md:pt-40">
      <div className="flex justify-center px-4">
        <button className="bg-[#171825] rounded-full px-5 h-9 sm:h-8 text-[11px] sm:text-[12px] tracking-wide text-gray-200 hover:text-white duration-300 cursor-pointer max-w-full">
          Simplify Financial Management — Learn more ➜
        </button>
      </div>

      <div className="relative mt-4 mx-4 sm:mx-8 md:mx-18 pt-14 md:pt-16 pb-80 sm:pb-[22rem] md:pb-[26rem] lg:pb-[28rem] xl:pb-[30rem]">
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[40px] bg-[conic-gradient(from_310deg_at_50%_60%,#000000_0deg,#000000_100deg,#005f87_135deg,#7f7aff_165deg,#ff9900_190deg,#e6396b_220deg,#8c149e_270deg,#000000_350deg,#000000_360deg)] "
        />

        <div className="relative z-10 text-white">
          <div className="text-center px-4">
            <h1 className="mx-auto max-w-[44rem] text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide">
              <span className="bg-[radial-gradient(circle,#fff,rgba(255,255,255,0.35))] bg-clip-text text-transparent leading-snug">
                Streamline Your Banking Experience
              </span>
            </h1>
          </div>

          <p className="mx-auto text-center text-gray-300 text-sm sm:text-[14px] mt-6 max-w-md px-6 tracking-wider">
            Experience hassle-free banking card management and transactions with
            our platform with our user-friendly interface.
          </p>

          <div className="flex justify-center gap-4 sm:gap-7 mt-9 px-4">
            <button className="bg-white text-black h-10 px-6 sm:px-8 rounded-full text-md font-semibold tracking-wide cursor-pointer hover:bg-purple-900 hover:text-white duration-300 whitespace-nowrap">
              Get started
            </button>
            <button className="bg-black text-white h-10 px-6 sm:px-8 rounded-full text-md cursor-pointer hover:text-gray-400 duration-300 whitespace-nowrap">
              Watch Video
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-20 flex justify-center -mt-72 sm:-mt-80 md:-mt-96 lg:-mt-[26rem] xl:-mt-[28rem] px-4">
        <div className="relative w-full max-w-6xl">
          <img
            src="images/hero/budget.png"
            alt="My budget"
            className="hidden sm:block absolute left-[2%] top-[2%] w-[16%] h-auto rounded-xl lg:rounded-[28px] pointer-events-none select-none"
          />
          <img
            src="images/hero/visa.png"
            alt="Visa card"
            className="hidden sm:block absolute left-[8%] top-[32%] w-[14%] h-auto rounded-xl lg:rounded-[28px] pointer-events-none select-none"
          />
          <img
            src="images/hero/currency.png"
            alt="Currency rates"
            className="hidden sm:block absolute right-[2%] top-[2%] w-[20%] h-auto rounded-xl lg:rounded-[28px] pointer-events-none select-none"
          />
          <img
            src="images/hero/currency.png"
            alt="Currency rates"
            className="hidden sm:block absolute right-[6%] top-[28%] w-[20%] h-auto rounded-xl lg:rounded-[28px] pointer-events-none select-none"
          />

          <img
            src="images/hero/phone.png"
            alt="Banking app on phone"
            className="relative block mx-auto w-[270px] sm:w-[300px] md:w-[360px] lg:w-[400px] xl:w-[430px] max-w-full"
          />
        </div>
      </div>

      <div className="text-center mt-16 md:mt-24 px-4">
        <h2 className="text-3xl md:text-[40px] tracking-wide bg-[radial-gradient(circle,#ffffff,rgba(255,255,255,0.35))] bg-clip-text text-transparent">
          +600 reviews
        </h2>
        <p className="mt-3 text-sm text-gray-300 tracking-wider max-w-[240px] mx-auto">
          Companies building custom tools with Confetti.
        </p>
      </div>

      <div className="mt-14 md:mt-16 pb-16 md:pb-24">
        <LogoMarquee />
      </div>
    </section>
  );
}

export default Hero;
