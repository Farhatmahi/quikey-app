const Section5 = () => {
  return (
    <div className="bg-[url('/asset/bg4.jpg')] bg-cover bg-no-repeat h-screen flex items-center">
      <div className="overlay"></div>
      <div className="container mx-auto px-4 md:px-0 z-10">
        <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center">
          <div className="lg:w-1/2">
            <h1 className="text-[1.875rem] leading-[4rem] mb-4 lg:text-[45px] text-white font-semibold">
              A total number of 10 exabyte data {""}
              <span className="text-[#f97516] text-[3rem] lg:text-[4.1rem]">
                used by Indian’s monthly.
              </span>
            </h1>
            <p className="text-white mt-4 lg:mt-0 text-lg">
              India had 574 million active Internet users as of 2019 and is the
              second-largest online market, behind China. It was estimated that
              by December 2020 there would be around 639 million active internet
              users in India which was correct.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src="/asset/Rectangle4.png"
              className="w-1/2  mb-4 lg:mb-0"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
