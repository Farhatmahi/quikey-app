import Banner2 from "@/components/Banner2";
import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";

const security = () => {
  return (
    <div className="bg-white">
      <Header />
      <section className="bg-[url('/assets/img/about/Group1000001808.png')] bg-cover bg-no-repeat h-[80vh]">
        <div className="flex justify-between text-white relative mx-auto">
          <div className="absolute w-11/12 left-8 top-24 lg:left-20 lg:top-30 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center text-black leading-loose">
              <img
                src="/assets/img/security-policy/Wiretransfer.png"
                alt=""
                className="w-2/3 lg:w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 md:px-0">
        <h2 className="text-4xl font-bold underline">Security Policy</h2>
        <h5 className="">Updated on - 11/11/22</h5>
        <p className="pt-10 text-lg leading-8">
          The Indian government has implemented various regulations and policies
          to ensure data safety and privacy for users of social media companies
          operating in India. These policies aim to safeguard the personal
          information of users, prevent misuse of data, and promote transparency
          in data handling practices.
        </p>
        <p className="pb-4">
          The following is our Public Security Policy, which outlines our
          commitment to public safety and the measures we take to maintain a
          secure environment for our users.
        </p>
        <p className="pb-4">
          <span className="font-bold">Reporting of Violations: </span>
          <br />
          We encourage our users to report any violations of our policies or any
          illegal activity they observe on our app. We have a reporting system
          in place that allows users to report inappropriate or harmful content,
          behavior, or users. We take all reports seriously and investigate each
          one thoroughly.
        </p>
        <p className="pb-4">
          <span className="font-bold">Moderation: </span>
          <br />
          We have a team of trained moderators who review reported content and
          users, as well as monitor our app for any violations of our policies.
          Our moderators follow strict guidelines and procedures to ensure
          consistent and fair enforcement of our policies. We also use
          technology and automated tools to help detect and remove harmful
          content.
        </p>
        <p className="pb-4">
          <span className="font-bold">Cooperation with Law Enforcement: </span>
          <br />
          We cooperate with law enforcement agencies to the fullest extent
          possible to prevent and investigate any illegal activity on our app.
          We may provide information about users or content to law enforcement
          agencies if we have a good faith belief that such information is
          necessary to prevent or stop illegal activity.
        </p>
        <p className="pb-4">
          <span className="font-bold">Prevention of Harmful Content: </span>
          <br />
          We have policies in place to prevent the dissemination of harmful
          content on our app. This includes prohibiting the posting of content
          that promotes violence, terrorism, hate speech, or pornography. We
          also use automated tools to detect and remove harmful content before
          it can be seen by other users.
        </p>
        <p className="pb-4">
          <span className="font-bold">
            Protection of Personal Information:{" "}
          </span>
          <br />
          We take the protection of our users' personal information seriously
          and have measures in place to prevent unauthorized access, disclosure,
          or use of such information. We comply with all applicable privacy laws
          and regulations in India, and our Privacy Policy outlines our
          commitment to protecting the privacy of our users.
        </p>
        <p className="pb-4">
          <span className="font-bold">Encouragement of Positive Behavior:</span>
          <br />
          We promote positive behavior on our app and encourage our users to
          engage in respectful and constructive communication. We have community
          guidelines in place that outline the behavior we expect from our users
          and the consequences for violating those guidelines. We also provide
          resources and support to help users who may be struggling with
          negative behavior or emotions.
        </p>
        <p className="pb-4">
          <span className="font-bold">Education and Awareness: </span>
          <br />
          We believe that education and awareness are key to maintaining public
          safety on our app. We provide resources and information to our users
          about online safety, cyberbullying, and other relevant topics. We also
          work with partners and experts to stay up to date on the latest trends
          and best practices for public safety on social media.
        </p>
        <p className="pb-16">
          <span className="font-bold">Conclusion : </span>
          <br />
          At Quikey, we are committed to maintaining a safe and secure
          environment for our users. We believe that public safety is a shared
          responsibility, and we encourage our users to report any violations or
          illegal activity they observe on our app. By working together, we can
          create a positive and welcoming community where everyone can feel safe
          and supported.
        </p>
      </section>
      <div className="border-2 border-slate-800 border-solid"></div>
      <Footer2 />
    </div>
  );
};

export default security;
