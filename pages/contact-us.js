import Footer from "@/components/Footer";
import Header from "@/components/Header";

const contact_us = () => {
  return (
    <div className="">
      <Header />
      <section class="quikey-landing">
        <div class="flex justify-between text-white relative mx-auto">
          <img
            class="landing-bg w-full"
            src="/assets/img/contact/Group10.png"
            alt=""
          />
          <div class="absolute w-11/12 left-6 top-10 lg:left-10 lg:top-10">
            <div class="text-center mt-20 mb-8">
              <h2 class="text-4xl font-bold mb-3">Shoot an Email</h2>
              <p>Any question or remarks? Just drop us a message!</p>
            </div>
            <div class="flex justify-center items-center">
              <div class="bg-white p-4 lg:flex rounded-lg">
                <div class="lg:w-1/3 relative">
                  <img
                    class="w-full h-96 mb-10 lg:mb-0"
                    src="/assets/img/contact/Group 1000001809.png"
                    alt=""
                  />
                  <h2 class="absolute top-5 left-4 text-2xl font-semibold">
                    Contact Information
                  </h2>
                  <h2 className="absolute bottom-5 left-4 text-md">
                    connect@quikey.app
                  </h2>
                </div>
                <div className="px-10 space-y-10">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className=" w-full max-w-xs">
                      <label className="">
                        <span className="text-gray-500 mb-8">First name <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="text"
                        className="border-b border-gray-400 w-full max-w-xs ring-0 focus:outline-none text-black"
                        required
                      />
                    </div>
                    <div className=" w-full max-w-xs">
                      <label className="">
                        <span className="text-gray-500 mb-8">Last name <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="text"
                        className="border-b border-gray-400 w-full max-w-xs ring-0 focus:outline-none text-black"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className=" w-full max-w-xs">
                      <label className="">
                        <span className="text-gray-500 mb-8">Email <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="text"
                        className="border-b border-gray-400 w-full max-w-xs ring-0 focus:outline-none text-black"
                        required
                      />
                    </div>
                    <div className=" w-full max-w-xs">
                      <label className="">
                        <span className="text-gray-500 mb-8">Phone No.</span>
                      </label>
                      <input
                        type="text"
                        className="border-b border-gray-400 w-full max-w-xs ring-0 focus:outline-none text-black"
                        
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col w-full">
                      <label className="">
                        <span className="text-gray-500 mb-8">Message <span className="text-red-500">*</span></span>
                      </label>
                      <textarea
                        type="text"
                        className="border-b border-gray-400 w-full ring-0 focus:outline-none text-black"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="btn bg-black text-white px-6 py-2 rounded-sm">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default contact_us;
