import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "./Footer";
// register Swiper custom elements

const Section7 = () => {
  return (
    <div className="bg-[url('/asset/Group10.png')] bg-cover bg-no-repeat min-h-screen h-[150vh] lg:h-[120vh] flex items-center z-20 relative">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center lg:-mt-48 ">
          <div className="lg:w-1/2">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="phone ios">
                    <div class="phone-top">
                      <div class="camera"></div>
                    </div>
                    <div class="screen">
                      <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        loop
                        slidesPerView={1}
                        autoPlay={{
                          delay: 2000,
                          disableOnInteraction: false,
                        }}
                      >
                        <SwiperSlide>
                          <img src="/asset/Spalsh.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="/asset/Home page.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="/asset/Home Screen (2).png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="/asset/Qnews home page (1).png" alt="" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form
              className="block lg:hidden mt-10"
              action="/mail.php"
              method="POST"
            >
              <div class="indivForm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                />
                <button type="submit" className="text-white">
                  Witness
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-start items-center mb-8 -mt-48 lg:-mt-0 lg:mb-0">
            <img src="/asset/quiky-preview.png" className="w-[80%]" alt="" />
            <p className="text-white text-2xl pb-8 text-center lg:text-left">
              India’s first hyper active social media app.{" "}
            </p>
            <form className="hidden lg:block" action="/mail.php" method="POST">
              <div class="indivForm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                />
                <button type="submit" className="text-white">
                  Witness
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
