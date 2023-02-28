const Section6 = () => {
  return (
    <div className="bg-[url('/asset/bg5.jpg')] bg-cover bg-no-repeat h-screen flex items-center">
      <div className="overlay"></div>
      <div className="container mx-auto px-4 md:px-0 z-10">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="lg:w-1/2">
            <h1 className="text-[1.875rem] leading-[4rem] mb-4 lg:text-[45px] text-white font-semibold">
              Let’s keep our data & cash
              {" "}
              <span className="text-[#f97516] text-[3rem] lg:text-[4.1rem]">
                inside the country
              </span>
            </h1>
            <p className="text-white mt-4 lg:mt-0 text-lg">
            Let us join the initiative and keep our money and data inside our country. Quikey is our own, designed and developed in India with love. India’s first huperactive socia media platform.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="/asset/Rectangle5.png"
              className="w-2/3 lg:w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
