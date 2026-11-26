import FeatureProp from "../components/featureProp";

function Power() {
  const featureprops = [
    {
      icon: "images/icons/Icon-01.png",
      alt: "Icon-01",
      iconClass: "icon-1",
      boldText: "Automated Payroll Tax Registrations.",
      text: "Set up with holdings and tax accounts in 5 mins.",
    },
    {
      icon: "images/icons/Icon-02.png",
      alt: "Icon-02",
      iconClass: "icon-2",
      boldText: "Ongoing Monitoring.",
      text: "Let Warp help you stay on top of all payroll related compliance year-round.",
    },
    {
      icon: "images/icons/Icon-03.png",
      alt: "Icon-03",
      iconClass: "icon-3",
      boldText: "Beautiful Dashboards.",
      text: "Manage and organize your registrations in one glance instead of logging",
    },
  ];

  return (
    <section className="overflow-hidden lg:mt-[12.5rem]">
      <div>
        <h1 className="mx-auto p-6 text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-balance bg-[radial-gradient(circle,#fff,rgba(255,255,255,0.35))] bg-clip-text text-transparent">
          Discover the Power of Confetti
        </h1>
        <p className="mx-auto mt-2 px-4 sm:px-0 text-center max-w-[41ch] sm:max-w-[44ch] md:max-w-[46ch] lg:max-w-[48ch] text-[14px] text-gray-300">
          Explore the depth of our app and unlock its full potential. Our app
          offers a range of features designed to help you manage your finances
          with ease.
        </p>
      </div>

      <div className="lg:pt-8">
        <div className="mt-16 sm:mt-24 md:mt-32 lg:mt-40 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-12 px-4">
          <div className="w-full max-w-[38rem] mx-auto lg:mx-0 lg:max-w-none lg:w-[32rem] lg:shrink-0 flex flex-col gap-8 sm:gap-10">
            <div>
              <h2 className="w-full lg:w-[26rem] mx-auto lg:mx-0 lg:ml-1 text-center lg:text-left text-3xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight text-balance bg-[radial-gradient(circle,#fff,rgba(255,255,255,0.35))] bg-clip-text text-transparent">
                A field app that saves €91284 a year
              </h2>

              <p className="w-full max-w-[42ch] sm:max-w-[46ch] lg:max-w-none mx-auto lg:mx-0 lg:ml-1 mt-4 sm:mt-6 text-center lg:text-left text-[14px] leading-relaxed text-gray-300">
                Looking for a way to reduce costs associated with fieldwork?
                Look no further than our field app. Our app is designed to
                streamline fieldwork processes and eliminate the need for manual
                paperwork.
              </p>

              <p className="w-full mt-7 text-center lg:text-left text-white cursor-pointer text-[12px] md:text-[14px] lg:text-[18px]">
                Meet our customers ➞
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 w-full">
              <div className="min-w-0 bg-[#19191b] border border-[#2f2f2f] rounded-2xl p-4 sm:p-5">
                <h4 className="text-[#887ef9] leading-tight text-[clamp(1.375rem,7vw,2.625rem)]">
                  €91.28K
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm mt-1.5 sm:mt-2">
                  Saved in printing costs and productivity hours in the past.
                </p>
              </div>

              <div className="min-w-0 bg-[#19191b] border border-[#2f2f2f] rounded-2xl p-4 sm:p-5">
                <h4 className="text-[#887ef9] leading-tight text-[clamp(1.375rem,7vw,2.625rem)]">
                  500+
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm mt-1.5 sm:mt-2">
                  Team members using the Confetti app every month.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[38rem] min-w-0 mx-auto lg:mx-0 lg:flex-1">
            <img
              src="images/power/transactions.png"
              alt="transationImage-power"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        <FeatureProp
          className=""
          image="/images/power/loans.png"
          title="Compliance. Simplified."
          description="With our app, you can digitize fieldwork processes, track your team's progress, and stay on top of tasks with ease. Say goodbye to inefficient operations and hello to significant cost savings with our field app."
          ctaText="Get started with Confetti ➞"
          features={featureprops}
        />
      </div>
    </section>
  );
}

export default Power;