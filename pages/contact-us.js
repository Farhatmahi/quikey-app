import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

const contact_us = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://quikey-server-konkomaji.vercel.app/quikey-contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSubmitted(true);
        // toast.success("Your message has been sent!");
      });
  };

  return (
    <div className="">
      <Header />
      {/* <section className="quikey-landing">
        <div className="flex justify-between text-white relative mx-auto">
          <img
            className="landing-bg w-full"
            src="/assets/img/contact/Group10.png"
            alt=""
          />
          <div className="absolute w-11/12 left-6 top-10 lg:left-10 lg:top-10">
            <div className="text-center mt-20 mb-8">
              <h2 className="text-4xl font-bold mb-3">Shoot an Email</h2>
              <p>Any question or remarks? Just drop us a message!</p>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white p-4 lg:flex rounded-lg">
                <div className="lg:w-1/3 relative">
                  <img
                    className="w-full h-96 mb-10 lg:mb-0"
                    src="/assets/img/contact/Group 1000001809.png"
                    alt=""
                  />
                  <h2 className="absolute top-5 left-4 text-2xl font-semibold">
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
      </section> */}
      <div className="bg-[url('/asset/Group10.png')] bg-cover bg-bottom bg-no-repeat relative z-50 h-[110vh]">
        <div className="flex flex-col justify-center text-white relative container mx-auto px-4 md:px-0 mb-24 h-full">
          <div className="">
            {!submitted && (
              <div className="text-center mb-8">
                <h2 className="text-4xl text-white font-bold mb-3">
                  Shoot an Email
                </h2>
                <p className="text-white">
                  Any question or remarks? Just drop us a message!
                </p>
              </div>
            )}
            <div className="flex justify-center items-center">
              <div className="bg-white p-4 lg:flex rounded-lg w-scee">
                {submitted ? (
                  <div className="text-center w-full text-black border-2 border-orange-500 rounded-lg">
                    <div className="flex justify-center items-center">
                      <img
                        src="https://mudslidecreatorshub.in/image/53644-email-marketing-message-concept%201.png"
                        className="w-1/2"
                        alt=""
                      />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                    <p className="mb-4">Your message has been sent.</p>
                  </div>
                ) : (
                  <>
                    <div className="lg:w-1/3 relative">
                      <img
                        className="w-full h-96 mb-10 lg:mb-0"
                        src="/assets/img/contact/Group 1000001809.png"
                        alt=""
                      />
                      <h2 className="absolute top-5 left-4 text-2xl font-semibold">
                        Contact Information
                      </h2>
                      <h2 className="absolute bottom-5 left-4 text-md">
                        connect@quikey.app
                      </h2>
                    </div>
                    <form
                      onSubmit={handleSubmit}
                      className="px-4 lg:px-10 space-y-10"
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className=" w-full max-w-xs">
                          <label className="">
                            <span className="text-gray-500 mb-8">
                              First name <span className="text-red-500">*</span>
                            </span>
                          </label>
                          <input
                            onChange={handleChange}
                            name="firstName"
                            type="text"
                            className="border-b border-gray-400 w-full max-w-xs ring-0 focus:outline-none text-black"
                            required
                          />
                        </div>
                        <div className=" w-full max-w-xs">
                          <label className="">
                            <span className="text-gray-500 mb-8">
                              Last name <span className="text-red-500">*</span>
                            </span>
                          </label>
                          <input
                            onChange={handleChange}
                            name="lastName"
                            type="text"
                            className="border-b border-gray-400 w-full max-w-xs ring-0 focus:outline-none text-black"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className=" w-full max-w-xs">
                          <label className="">
                            <span className="text-gray-500 mb-8">
                              Email <span className="text-red-500">*</span>
                            </span>
                          </label>
                          <input
                            onChange={handleChange}
                            type="text"
                            name="email"
                            className="border-b border-gray-400 w-full max-w-xs ring-0 focus:outline-none text-black"
                            required
                          />
                        </div>
                        <div className=" w-full max-w-xs">
                          <label className="">
                            <span className="text-gray-500 mb-8">
                              Phone No.{" "}
                            </span>
                          </label>
                          <input
                            onChange={handleChange}
                            name="phoneNo"
                            type="text"
                            className="border-b border-gray-400 w-full max-w-xs ring-0 focus:outline-none text-black"
                          />
                        </div>
                      </div>
                      <div className="">
                        <div className="flex flex-col w-full">
                          <label className="">
                            <span className="text-gray-500 mb-8">
                              Message <span className="text-red-500">*</span>
                            </span>
                          </label>
                          <textarea
                            required
                            onChange={handleChange}
                            name="message"
                            type="text"
                            className="border-b border-gray-400 w-full ring-0 focus:outline-none text-black"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button className="btn bg-black text-white px-6 py-2 rounded-sm">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contact_us;
