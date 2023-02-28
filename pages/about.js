import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="bg-white">
        <section className="bg-[url('/assets/img/about/Group1000001808.png')] bg-cover bg-no-repeat h-[80vh]">
          <div className="flex justify-between text-white relative mx-auto">
            <div className="absolute w-11/12 left-8 top-24 lg:left-20 lg:top-30 flex justify-center items-center">
              <div className="flex flex-col justify-center items-center text-black leading-loose">
                <img
                  src="/assets/img/about/Screenshot2022-12-241157361.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 md:px-0">
          <h2 className="text-4xl font-bold mb-3 underline">About Us</h2>
          <p className="pt-10 leading-8 ">
            At Quikey, we are proud to be an Indian-made social media app that
            is built to cater to the needs of the Indian users. Our platform is
            designed to reflect the Indian values and culture, while providing a
            safe and engaging space for people to connect and share their
            stories.
  
            As a part of the Make in India campaign, we are committed to
            contributing to the growth and development of the Indian economy by
            creating employment opportunities and promoting entrepreneurship. We
            believe that India has the potential to become a leading hub for
            technology and innovation, and we are dedicated to being a part of
            this journey.
    
            Our mission at Quikey is to provide a platform that is inclusive and
            accessible to all. We believe that social media should be a tool for
            positive change, and we are committed to creating an environment
            where users feel safe and empowered to express themselves freely.
       
            Our team comprises of a diverse group of individuals who share a
            passion for technology and innovation. We believe that diversity and
            inclusivity are key factors in driving innovation, and we strive to
            create an environment that fosters creativity and collaboration.
          </p>
          <br />
          <p className="pb-4 ">
            We understand that privacy and security are major concerns for users
            when it comes to social media. At Quikey, we have implemented robust
            data protection and security measures to ensure that user data is
            kept safe and secure. We are committed to being transparent about
            our data handling practices, and we regularly update our privacy
            policy to reflect any changes in our policies or practices.
        
            In addition to providing a safe and engaging platform for users, we
            also believe in giving back to society. We are committed to
            supporting various social causes and initiatives that promote
            education, healthcare, and environmental sustainability.
      
            At Quikey, we are dedicated to creating a social media platform that
            reflects the Indian values and culture, while also being at par with
            the best in the world. We believe that by empowering users to
            connect and share their stories, we can foster a sense of community
            and create positive change in society.
          </p>
          <br />
          <p className=" pb-16">
            In conclusion, Quikey is an Indian-made social media app that is
            designed to cater to the needs of the Indian users. Our platform is
            built on the principles of inclusivity, innovation, and social
            responsibility. We believe that social media should be a tool for
            positive change, and we are committed to being a part of this
            change. Join us on this journey and be a part of the Quikey
            community.
          </p>
        </section>

        <div className="border-2 border-slate-800 border-solid"></div>
        <Footer2 />
      </div>
    </>
  );
};

export default About;
