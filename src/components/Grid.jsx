function Grid() {
  const styling =
    "rounded-2xl overflow-hidden bg-[#171717] border border-transparent hover:bg-[#222] hover:border-[#636363] hover:scale-101 duration-300";

    return (
    <div className="grid w-full max-w-[80rem] mx-auto px-4 sm:px-6 xl:translate-x-[12rem] lg:translate-x-[-8rem] gap-4 grid-cols-2 sm:grid-cols-4 xl:grid-cols-[repeat(6,200px)]">
      <div
        className={`relative w-full aspect-square xl:justify-self-start xl:w-[150px] xl:h-[150px] xl:aspect-auto xl:ml-[2rem] ${styling}`}
      >
        <img
          src="images/grid/image1.jpg"
          alt="gridimage1"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className={`relative w-full aspect-square xl:justify-self-start xl:w-[150px] xl:h-[150px] xl:aspect-auto xl:right-4 ${styling}`}
      >
        <img
          src="images/grid/image2.png"
          alt="gridimage2"
          className="w-full h-full object-none object-center scale-300"
        />
      </div>

      <div
        className={`relative col-span-2 sm:row-span-2 xl:col-span-3 h-[546px] sm:h-auto sm:min-h-[546px] xl:h-[546px] xl:right-[3.5rem] ${styling}`}
      >
        <img
          src="images/grid/image3.png"
          alt="gridimage1"
          className="ml-[3rem] mt-[7rem] object-cover scale-110 absolute bottom-2 max-w-[calc(100%-4rem)] xl:max-w-none"
        />
        <p className="absolute bottom-[2rem] ml-[2rem] text-[12px] font-semibold">
          Unified cross-platform experience
        </p>
      </div>

      <div
        className={`relative col-span-2 h-[380px] w-full flex items-center xl:justify-self-start xl:w-[330px] xl:ml-[1.8rem] xl:mb-2 ${styling}`}
      >
        <div className="flex gap-3 mb-[8rem] animate-[slide_9s_infinite]">
          <img
            src="images/grid/grid-marquee/image-1.jpg"
            alt="1"
            className="h-[170px] w-auto object-contain rounded-4xl"
          />
          <img
            src="images/grid/grid-marquee/image-2.jpg"
            alt="2"
            className="h-[170px] w-auto object-contain rounded-4xl"
          />
          <img
            src="images/grid/grid-marquee/image-3.jpg"
            alt="3"
            className="h-[170px] w-auto object-contain rounded-4xl"
          />
          <img
            src="images/grid/grid-marquee/image-1.jpg"
            alt="1"
            className="h-[170px] w-auto object-contain rounded-4xl"
          />
          <img
            src="images/grid/grid-marquee/image-2.jpg"
            alt="2"
            className="h-[170px] w-auto object-contain rounded-4xl"
          />
          <img
            src="images/grid/grid-marquee/image-3.jpg"
            alt="3"
            className="h-[170px] w-auto object-contain rounded-4xl"
          />
        </div>
        <p className="absolute bottom-[3rem] ml-[2rem] font-semibold text-[13px] text-white">
          Pixel perfect components
        </p>
      </div>

      <div
        className={`relative col-span-2 xl:col-span-3 h-[250px] w-full text-white xl:justify-self-start xl:w-[480px] xl:ml-[2rem] ${styling}`}
      >
        <marquee behavior="scroll" direction="left" scrollamount="3">
          <div className="flex gap-2">
            <img
              src="images/grid/logoss.png"
              alt="gridimage5"
              className="w-full h-full object-cover"
            />
            <img
              src="images/grid/logoss.png"
              alt="gridimage5"
              className="w-full h-full object-cover"
            />
            <img
              src="images/grid/logoss.png"
              alt="gridimage5"
              className="w-full h-full object-cover"
            />
          </div>
        </marquee>

        <marquee behavior="scroll" direction="right" scrollamount="3">
          <div className="flex gap-4">
            <img
              src="images/grid/logoss.png"
              alt="gridimage5"
              className="w-full h-full object-cover"
            />
            <img
              src="images/grid/logoss.png"
              alt="gridimage5"
              className="w-full h-full object-cover"
            />
            <img
              src="images/grid/logoss.png"
              alt="gridimage5"
              className="w-full h-full object-cover"
            />
          </div>
        </marquee>

        <p className="absolute bottom-[3rem] ml-[2rem] text-[12px] font-semibold">
          Great design right out of the box
        </p>
      </div>

      <div
        className={`relative col-span-2 xl:col-span-3 h-[250px] w-full overflow-hidden xl:justify-self-start xl:w-[477px] xl:right-[7rem] ${styling}`}
      >
        <img
          src="images/grid/image6.png"
          alt="gridimage6"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Grid;