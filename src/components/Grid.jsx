function Grid() {
  const styling =
    "rounded-2xl overflow-hidden bg-[#171717] border border-transparent hover:bg-[#222] hover:border-[#636363] hover:scale-101 duration-300";

  return (
    <div className="grid grid-cols-[repeat(6,200px)] gap-4">
      <div className={`row-span-1 h-[150px] w-[150px] ml-[2rem] ${styling}`}>
        <img
          src="images/grid/image1.jpg"
          alt="gridimage1"
          className="w-full h-full object-cover"
        />
      </div>

      <div className={`row-span-1 h-[150px] w-[150px] relative right-4 ${styling}`}>
        <img
          src="images/grid/image2.png"
          alt="gridimage2"
          className="w-full h-full object-none object-center scale-300"
        />
      </div>

      <div className={`row-span-2 col-span-3 h-[546px] relative right-[3.5rem] ${styling}`}>
        <img
          src="images/grid/image3.png"
          alt="gridimage1"
          className="ml-[3rem] mt-[7rem] object-cover scale-110 absolute bottom-2"
        />
        <p className="absolute bottom-[2rem] ml-[2rem] text-[12px] font-semibold">
          Unified cross-platform experience
        </p>
      </div>

      <div className={`col-span-2 mb-2 h-[380px] w-[330px] ml-[1.8rem] relative flex items-center ${styling}`}>
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

      <div className={`col-span-3 h-[250px] relative w-[480px] ml-[2rem] text-white ${styling}`}>
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

      <div className={`col-span-3 h-[250px] w-[477px] relative right-[7rem] overflow-hidden ${styling}`}>
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