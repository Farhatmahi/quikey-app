import { FaPaperPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="bg-[url('/asset/Pattern.png')] bg-cover bg-no-repeat text-white -mt-24 lg:-mt-36 py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-0">
          <div className="pt-20">
            <h2 className="text-[1.875rem] leading-[3rem] mb-4">
              Get in touch!
            </h2>
            <form action="mail.php" method="POST" className="inline">
              <input
                type="text"
                className="bg-transparent w-3/4 lg:w-1/4 focus:outline-none"
                placeholder="Your Email"
                name="email"
              />
              <FaPaperPlane className="inline text-2xl" />
              {/* <img className="mt-2" src="/public/asset/Line 5.png" alt="" /> */}
              <img src="/asset/Line 5.png" className="lg:w-1/4 mt-2" alt="" />
            </form>
          </div>
          <div className="container mx-auto px-4 md:px-0 mt-20">
            <div className="flex flex-col-reverse lg:flex-row items-center">
              <div className="lg:w-1/2">
                <img src="/asset/quikey-w.png" alt="" />
                <p className="lg:pr-20 mt-4">
                  A dream, passion and effort to make india great again. Shining
                  in global diaspora as a tech giant. to know more{" "}
                  <a href="/coming-soon" className="text-orange-500">
                    Click here
                  </a>
                </p>
              </div>
              <div className="lg:w-1/2 flex-col lg:flex-row justify-around items-center">
                <div className="flex flex-col lg:flex-row justify-around items-center">
                  <div className="flex justify-center items-center">
                    <ul className="text-center space-y-2">
                      <li>
                        <a href="/about">About Quikey</a>
                      </li>
                      <li>
                        <a href="/privacy-policy">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/terms-and-conditions">Terms and Cons</a>
                      </li>
                    </ul>
                    <img src="/asset/Group 3.png" className="mx-4" alt="" />
                    <ul className="text-center space-y-2">
                      <li>
                        <a href="/security-policy">Security Policy</a>
                      </li>
                      <li>
                        <a href="/content-policy">Content Policy</a>
                      </li>
                      <li>
                        <a href="/data-policy">Data Policy</a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center items-center mb-16 lg:mb-0">
                    <p className="text-orange-500">Interested?</p>
                    <a
                      href="/contact-us"
                      className="border-b-2 border-orange-500"
                    >
                      Connect Now!
                    </a>
                    <div className="flex justify-between items-center space-x-2 mt-4">
                      <a href="https://www.facebook.com/quikeyapp">
                        <BsFacebook className="text-white text-2xl cursor-pointer" />
                      </a>
                      <a href="https://www.instagram.com/thequikeyapp/">
                        <BsInstagram className="text-white text-2xl cursor-pointer" />
                      </a>
                      <a href="https://twitter.com/quikeyapp">
                        <AiOutlineTwitter className="text-white text-2xl cursor-pointer" />
                      </a>
                      <a href="https://www.linkedin.com/company/quikeyapp/">
                        <BsLinkedin className="text-white text-2xl cursor-pointer" />
                      </a>
                      <a href="https://www.youtube.com/channel/UCyNBUWXQAscQ6n_8K67gFaw">
                        <BsYoutube className="text-white text-2xl cursor-pointer" />
                      </a>
                      <a
                        href="https://www.kooapp.com/profile/quikeyapp"
                        className="inline"
                      >
                        <div className="inline">
                          <img
                            src="/asset/koo_white.webp"
                            className="w-3/4"
                            alt=""
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-orange-500">
        <div className="container mx-auto px-4 md:px-0">
          <p className="text-white py-5 ">
            © Quikey | Mudslide Creators Hub Pvt Ltd
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
