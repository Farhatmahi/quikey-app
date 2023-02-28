const Section3 = () => {
  return (
    <div className="bg-[url('/asset/bg2.jpg')] bg-cover bg-no-repeat h-screen flex items-center">
      <div className="overlay"></div>
      <div className="container mx-auto px-4 md:px-0 z-10">
        <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center">
          <div className="lg:w-1/2">
            <h1 className="text-[1.875rem] leading-[4rem] mb-4 lg:text-[45px] text-white font-semibold">
              Average Indian burns 100 USD yearly by {""}
              <span className="text-[#f97516] text-[3rem] lg:text-[4.1rem]">
                viewing foriegn advertisement only.
              </span>
            </h1>
            <p className="text-white mt-4 lg:mt-0 text-lg">
              With the ease of internet access, the number of social media users
              in India shot up in 2020. Furthermore, the social network users in
              the country are expected to be almost 1.5 billion in 2040.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src="/asset/Rectangle2.png"
              className="w-1/2  mb-4 lg:mb-0"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
