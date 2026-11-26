function FeatureProp({ image, title, description, ctaText, features }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={image} className="rounded-3xl w-full max-w-md object-cover" />
        </div>

        <div className="md:w-1/2 flex flex-col">
          <h2 className="bg-[radial-gradient(circle,#fff,rgba(255,255,255,0.35))] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight">
            {title}
          </h2>

          <p className="text-gray-300 mt-5 max-w-lg">{description}</p>

          <span className="cursor-pointer mt-6 font-medium inline-block">
            {ctaText}
          </span>

          <div className="relative pb-10 mt-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[linear-gradient(to_right,rgba(235,235,235,0),#ebebeb_17%,#ebebeb_81%,rgba(235,235,235,0))]" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <img src={item.icon} alt={item.alt} className={item.iconClass} />
                <p className="text-[12px] text-gray-300">
                  <b>{item.boldText}</b> {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default FeatureProp;
