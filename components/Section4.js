const Section4 = () => {
  return (
    <div className="bg-[url('/asset/bg3.jpg')] bg-cover bg-no-repeat h-screen flex items-center">
      <div className="overlay"></div>
      <div className="container mx-auto px-4 md:px-0 z-10">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="lg:w-1/2">
            <h1 className="text-[1.875rem] leading-[4rem] mb-4 lg:text-[45px] text-white font-semibold">
              In 2021, 57 billion AD revenue was {""}
              <span className="text-[#f97516] text-[3rem] lg:text-[4.1rem]">
                generated in India
              </span>
            </h1>
            <p className="text-white mt-4 lg:mt-0 text-lg">
              With the deep penetration of internet connectivity among people,
              the number of social media users in India have been growing
              constantly. The Indian government-sponsored Digital India
              initiative has also contributed greatly to this growth.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="/asset/Rectangle3.png"
              className="w-1/2  mb-4 lg:mb-0"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
