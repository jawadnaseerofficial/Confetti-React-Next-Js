function Features() {
  return (
    <section className="bg-black text-white py-14 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-[74rem] mx-auto px-4 sm:px-6 md:px-8">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-center bg-[radial-gradient(circle,#fff,rgba(255,255,255,0.35))] bg-clip-text text-transparent mx-auto max-w-[15ch] leading-tight lg:leading-[1.15]">
            Powerful Features just for you
          </h1>

          <p className="text-center leading-6 text-xs sm:text-sm md:text-base mx-auto max-w-[30ch] sm:max-w-[38ch] md:max-w-[44ch] lg:max-w-[46ch] mt-3 sm:mt-4 text-gray-300">
            Our platform offers a range of powerful features designed to elevate your banking experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 md:gap-8 lg:gap-10 mt-12 sm:mt-16 md:mt-20 w-full">

          <div className="rounded-2xl shadow-lg overflow-hidden w-full bg-black flex flex-col items-center">
            <img
              src="/images/features/c.png"
              alt="featureImage1"
              className="w-full h-44 sm:h-48 md:h-44 lg:h-48 rounded-2xl object-cover"
            />
            <div className="mt-6 sm:mt-7 md:mt-8 text-center px-2 sm:px-3">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-snug font-medium">
                Stay on Top of Your Loans with Ease
              </h2>
              <p className="text-gray-300 max-w-xs mx-auto mt-2.5 sm:mt-3 leading-6 tracking-wide text-xs sm:text-sm">
                Our loan management feature allows you to effortlessly monitor and manage your current loans in one place.
              </p>
            </div>
          </div>

          <div className="rounded-2xl shadow-lg overflow-hidden w-full bg-black flex flex-col items-center">
            <img
              src="/images/features/t.png"
              alt="featureImage2"
              className="w-full h-44 sm:h-48 md:h-44 lg:h-48 rounded-2xl object-cover"
            />
            <div className="mt-6 sm:mt-7 md:mt-8 text-center px-2 sm:px-3">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-snug font-medium">
                Secure Access to Your Banking Details
              </h2>
              <p className="text-gray-300 max-w-xs mx-auto mt-2.5 sm:mt-3 leading-6 tracking-wide text-xs sm:text-sm">
                Our loan management feature allows you to effortlessly monitor and manage your current loans in one place.
              </p>
            </div>
          </div>

          <div className="rounded-2xl shadow-lg overflow-hidden w-full bg-black flex flex-col items-center sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto ">
            <img
              src="/images/features/l.png"
              alt="featureImage3"
              className="w-full h-44 sm:h-48 md:h-44 lg:h-48 rounded-2xl object-cover"
            />
            <div className="mt-6 sm:mt-7 md:mt-8 text-center px-2 sm:px-3">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-snug font-medium">
                Track Your Spending with Comprehensive
              </h2>
              <p className="text-gray-300 max-w-xs mx-auto mt-2.5 sm:mt-3 leading-6 tracking-wide text-xs sm:text-sm">
                Our loan management feature allows you to effortlessly monitor and manage your current loans in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
