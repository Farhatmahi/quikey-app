import Banner2 from "@/components/Banner2";
import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
      <Header />
      <section className="bg-[url('/assets/img/about/Group1000001808.png')] bg-cover bg-no-repeat h-[80vh]">
        <div className="flex justify-between text-white relative mx-auto">
          <div className="absolute w-11/12 left-8 top-20 lg:left-20 lg:top-30 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center text-black leading-loose">
              <img src="/assets/img/privacy-policy/Datasecurity.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 md:px-0">
        <h2 className="text-4xl font-bold underline">Privacy Policy</h2>
        <h5 className="">Updated on - 11/11/22</h5>
        <p className=" pt-10 leading-8 pb-4">
          This Privacy Policy outlines how we, a Indian social media app
          (hereinafter referred to as “Quikey), collect, use, disclose, and
          protect your personal information when you use our services. The App
          is committed to protecting your privacy, and this policy explains how
          we collect, use, and protect your personal information.
        </p>
        <p className="pb-4">
          <span className="font-bold">Information Collection:</span>
          <br />
          We collect personal information from you when you register with us,
          use our services, or interact with our app. This information may
          include your name, email address, phone number, date of birth,
          location, gender, and other personal information. We also collect
          information about your device, such as your IP address, device type,
          operating system, and other technical details.
        </p>
        <p className="pb-4">
          We use cookies and similar technologies to collect information about
          your use of our app and to personalize your experience. We may also
          collect usage information, such as the content you view, the features
          you use, and the interactions you have with other users.
        </p>
        <p className="pb-4">
          <span className="font-bold">Use of Information:</span>
          <br />
          We use your personal information to provide you with a better app
          experience, to improve our app's performance, and to comply with legal
          obligations. We use your personal information to:
        </p>
        <ul className="pb-4 ml-8">
          <li className="list-disc">Create and manage your account.</li>
          <li className="list-disc">Provide you with customer support.</li>
          <li className="list-disc">
            Communicate with you about our app, updates, and new features.
          </li>
          <li className="list-disc">Personalize your experience on our app.</li>
          <li className="list-disc">
            Detect and prevent fraud and other illegal activities.
          </li>
          <li className="list-disc">
            Improve our app's performance and develop new features.
          </li>
          <li className="list-disc">Comply with legal obligations.</li>
        </ul>
        <p className="pb-4">
          <span className="font-bold">Information Sharing:</span>
          <br />
          We may share your information with third-party service providers who
          help us provide our app's services. These service providers may
          include:
        </p>
        <ul className="pb-4 ml-8">
          <li className="list-disc">
            Payment processors and other financial institutions to process
            payments.
          </li>
          <li className="list-disc">Provide you with customer support.</li>
          <li className="list-disc">
            Cloud service providers to store and manage data.
          </li>
          <li className="list-disc">
            Analytics and advertising partners to help us understand how our app
            is used and to provide personalized advertising.
          </li>
          <li className="list-disc">
            Legal and regulatory authorities to comply with legal obligations.
          </li>
          <li className="list-disc">
            We do not share your personal information with third parties for
            marketing purposes without your consent.
          </li>
          <li className="list-disc">Comply with legal obligations.</li>
        </ul>
        <p className="pb-4">
          <span className="font-bold">Data Security:</span>
          <br />
          We take the security of your personal information seriously and take
          appropriate measures to protect it from unauthorized access, use, or
          disclosure. We use industry-standard security measures, such as
          encryption and access controls, to protect your data.
        </p>
        <p className="pb-4">
          <span className="font-bold">Data Retention:</span>
          <br />
          We will retain your personal information for as long as necessary to
          provide you with our app's services and to comply with legal
          obligations. We may retain your information for a longer period if
          necessary to resolve disputes, enforce our policies, or for other
          legitimate purposes.
        </p>
        <p className="pb-4">
          <span className="font-bold">Your Rights:</span>
          <br />
          You have the right to access, correct, or delete your personal
          information. You can do this by accessing your account settings or by
          contacting us through our customer support. You also have the right to
          object to the processing of your personal information or to restrict
          its processing in certain circumstances.
        </p>
        <p className="pb-4">
          <span className="font-bold">International Transfers:</span>
          <br />
          Your personal information may be transferred to and processed in
          countries other than the country in which you are located. These
          countries may have different data protection laws than your country of
          residence. If we transfer your personal information outside of your
          country of residence, we will take appropriate measures to ensure that
          your personal information is protected and that the transfer complies
          with applicable data protection laws.
        </p>
        <p className="pb-4">
          <span className="font-bold"> Changes to this Privacy Policy:</span>
          <br />
          We may update this Privacy Policy from time to time based on our terms
          and norms. If we make significant changes, we will notify you through
          the app or by email.
        </p>
        <p className="pb-4">
          <span className="font-bold"> Children's Privacy:</span>
          <br />
          Our app is not intended for children under the age of 13. We do not
          knowingly collect personal information from children under the age of
          13. If you are under the age of 13, please do not use our app or
          provide us with any personal information.
        </p>
        <p className="pb-4">
          <span className="font-bold"> Changes to this Privacy Policy:</span>
          <br />
          We may update this Privacy Policy from time to time based on our terms
          and norms. If we make significant changes, we will notify you through
          the app or by email.
        </p>
        <p className="pb-16">
          <span className="font-bold"> Conclusion:</span>
          <br />
          At Quikey , we take your privacy seriously and are committed to
          protecting your personal information. If you have any questions or
          concerns about this Privacy Policy or our app's privacy practices,
          please contact us through our customer support or by emailing us at
          [insert email address]. We will respond to your inquiry as soon as
          possible.
          <br />
          Thank you for using our app, and we hope you enjoy your experience
          with us!
        </p>
      </section>
      <div className="border-2 border-slate-800 border-solid"></div>
      <Footer2 />
    </div>
  );
};

export default PrivacyPolicy;
