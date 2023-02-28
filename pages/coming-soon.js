import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";

const comingsoon = () => {
  return (
    <div className="bg-white">
      <Header />
      <section>
        <div class=" text-center flex justify-center items-center py-64">
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-4xl font-semibold mb-8">COMING SOON!</h1>
            <img
              width="60%"
              src="/assets/img/comingsoon/Group1000001774.png"
              alt=""
            />
            <p>We are working on it...</p>
          </div>
        </div>
      </section>

      <div class="border-2 border-slate-800 border-solid"></div>
      <Footer2 />
    </div>
  );
};

export default comingsoon;
