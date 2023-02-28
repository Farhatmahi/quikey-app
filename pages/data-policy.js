import Banner2 from "@/components/Banner2";
import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";

const data = () => {
  return (
    <div className="bg-white">
      <Header />
      <section className="bg-[url('/assets/img/about/Group1000001808.png')] bg-cover bg-no-repeat h-[80vh]">
        <div className="flex justify-between text-white relative mx-auto">
          <div className="absolute w-11/12 left-8 top-24 lg:left-20 lg:top-30 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center text-black leading-loose">
              <img
                src="/assets/img/data-policy/Dataprivacy.png"
                alt=""
                className="w-2/3 lg:w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 md:px-0">
        <h2 className="text-4xl font-bold underline">Data Policy</h2>
        <h5 className="">Updated on - 11/11/22</h5>
        <p className="pt-10 leading-8">
          The Indian government has implemented various regulations and policies
          to ensure data safety and privacy for users of social media companies
          operating in India. These policies aim to safeguard the personal
          information of users, prevent misuse of data, and promote transparency
          in data handling practices.
        </p>
        <p className="pb-4">
          The Indian government has implemented various regulations and policies
          to ensure data safety and privacy for users of social media companies
          operating in India. These policies aim to safeguard the personal
          information of users, prevent misuse of data, and promote transparency
          in data handling practices.
        </p>
        <p className="pb-4">
          <span className="font-bold">Personal Data Protection Bill 2019:</span>
          <br /> The Personal Data Protection Bill 2019 is a comprehensive
          legislation that outlines the framework for data protection in India.
          The bill aims to regulate the collection, storage, and processing of
          personal data by companies operating in India. The bill imposes strict
          obligations on companies to protect user data, and failure to comply
          with these obligations may result in significant penalties.
        </p>
        <p className="pb-4">
          <span className="font-bold">Data Localization Policy:</span>
          <br /> The Indian government has implemented a data localization
          policy that requires all companies operating in India to store the
          personal data of Indian users within the country. This policy aims to
          ensure that sensitive personal information of Indian users is not
          misused or accessed by foreign entities. Companies failing to comply
          with this policy may face legal action or penalties.
        </p>
        <p className="pb-4">
          <span className="font-bold">
            Information Technology (Intermediary Guidelines and Digital Media
            Ethics Code) Rules 2021:
          </span>{" "}
          <br />
          The Information Technology (Intermediary Guidelines and Digital Media
          Ethics Code) Rules 2021 outline the responsibilities of social media
          companies operating in India. The rules mandate that social media
          companies appoint grievance officers, comply with takedown requests,
          and publish periodic compliance reports. The rules also require social
          media companies to implement automated tools for content moderation
          and appoint compliance officers to ensure adherence to ethical
          practices.
        </p>
        <p className="pb-4">
          <span className="font-bold">Aadhaar Data Protection:</span>
          <br /> The Aadhaar card is a unique identification number issued by
          the Indian government to its citizens. The Indian government has
          implemented various policies to protect the personal data of users
          enrolled in the Aadhaar program. Social media companies operating in
          India are required to comply with the Aadhaar data protection
          policies, which include obtaining explicit consent from users before
          collecting their Aadhaar data and ensuring that the data is securely
          stored and used only for legitimate purposes.
        </p>
        <p className="pb-4">
          <span className="font-bold">Data Breach Notification:</span>
          <br /> Social media companies operating in India are required to
          notify users of any data breaches that occur on their platforms. The
          notification must be provided to the affected users and the Indian
          Computer Emergency Response Team (CERT-In) within a specified period.
          This policy aims to ensure that users are aware of any potential data
          breaches and can take appropriate measures to protect their personal
          information.
        </p>
        <p className="pb-16">
          <span className="font-bold">Conclusion:</span>
          <br /> The Indian government has implemented various policies to
          ensure data safety and privacy for users of social media companies
          operating in India. These policies aim to regulate the collection,
          storage, and processing of personal data by companies and prevent
          misuse of data. Companies that fail to comply with these policies may
          face legal action or penalties. By implementing these policies, the
          Indian government aims to promote transparency in data handling
          practices and ensure the safety and privacy of users.
        </p>
      </section>
      <div className="border-2 border-slate-800 border-solid"></div>
      <Footer2 />
    </div>
  );
};

export default data;
