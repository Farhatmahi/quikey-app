const Banner2 = () => {
  return (
    <section className="quikey-landing">
      <div className="flex justify-between text-white relative mx-auto">
        <img
          className="landing-bg"
          src="/assets/img/about/Group1000001808.png"
          alt=""
        />
        <div className="absolute w-11/12 left-8 top-24 lg:left-20 lg:top-30 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center text-black leading-loose">
            <img src="/assets/img/privacy-policy/Datasecurity.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
