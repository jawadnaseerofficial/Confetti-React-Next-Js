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
    <section className="lg:mt-50 overflow-hidden">
      <div>
        <h1 className="p-6 text-3xl lg:text-7xl md:text-6xl sm:text-5xl  text-center tracking-wide sm:mx-auto bg-[radial-gradient(circle,#fff,rgba(255,255,255,0.35))] bg-clip-text text-transparent">
          Discover the Power of Confetti
        </h1>
        <p className="text-center mx-auto mt-2 max-w-[41ch] sm:max-2-[44ch] md:max-2-[46ch] lg:max-w-[48ch] text-[14px] text-gray-300">
          Explore the depth of our app and unlock its full potential. Our app
          offers a range of features designed to help you manage your finances
          with ease.
        </p>
      </div>

      <div className="lg:pt-8 ">
        <div className="mt-40 max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 px-4">
          <div className="w-[32rem] flex flex-col gap-10">
            <div>
              <h2 className="lg:text-7xl sm:text-5xl md:text-6xl md:w-full sm:text-center leading-tight bg-[radial-gradient(circle,#fff,rgba(255,255,255,0.35))] sm:ml-[12rem] bg-clip-text text-transparent lg:w-[26rem] w-[20rem] text-center lg:text-left lg:text-[64px] lg:ml-1 text-3xl ">
                A field app that saves €91284 a year
              </h2>

              <p className="text-gray-300 lg:mt-6 leading-relaxed sm:ml-[12rem] sm:text-center lg:w-full lg:text-left lg:ml-1 mt-6 text-[14px] lg:text-left md:w-full sm-text-center  w-[20rem] text-center md:px-8 lg:px-0 ">
                Looking for a way to reduce costs associated with fieldwork?
                Look no further than our field app. Our app is designed to
                streamline fieldwork processes and eliminate the need for manual
                paperwork.
              </p>

              <p className="text-white mt-7 cursor-pointer sm:text-center lg:text-left sm:w-full md:ml-[12rem]  sm:ml-[6rem] lg:text-[18px] md:text-[14px]  sm:text-[12px] lg:ml-0 ">
                Meet our customers ➞
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="bg-[#19191b] border border-[#2f2f2f] rounded-2xl p-5">
                <h4 className="text-[#887ef9] text-[42px]">€91.28K</h4>
                <p className="text-gray-300 text-sm mt-2">
                  Saved in printing costs and productivity hours in the past.
                </p>
              </div>

              <div className="bg-[#19191b] border border-[#2f2f2f] rounded-2xl p-5">
                <h4 className="text-[#887ef9] text-[42px]">500+</h4>
                <p className="text-gray-300 text-sm mt-2">
                  Team members using the Confetti app every month.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[38rem]">
            <img
              src="images/power/transactions.png"
              alt="transationImage-power"
              className="w-full rounded-3xl shadow-2xl"
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
