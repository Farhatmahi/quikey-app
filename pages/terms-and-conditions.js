import Banner2 from "@/components/Banner2";
import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";

const Terms = () => {
  return (
    <div className="bg-white">
      <Header />
      <section className="bg-[url('/assets/img/about/Group1000001808.png')] bg-cover bg-no-repeat h-[80vh]">
        <div className="flex justify-between text-white relative mx-auto">
          <div className="absolute w-11/12 left-8 top-24 lg:left-20 lg:top-30 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center text-black leading-loose">
              <img
                src="/assets/img/terms-conditions/Messagereceived.png"
                alt=""
                className="w-2/3 lg:w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 md:px-0">
        <h2 className="text-4xl font-bold underline">Terms and Conditions</h2>
        <h5 className="">Updated on - 11/11/22</h5>

        <p className=" pt-10 text-lg leading-8 pb-10">
          Welcome to Quikey, a social media app created by Mudslide Creators Hub
          Private Limited (hereinafter referred to as "the Company") for Indian
          users. By accessing and using our app, you agree to comply with these
          Terms and Conditions (hereinafter referred to as "Terms"), as well as
          our Privacy Policy.
        </p>
        <p className="pb-4">
          <span className="font-bold">Registration and Account:</span>
          <br />
          To use our app, you must create an account and provide accurate and
          complete information. You are responsible for maintaining the
          confidentiality of your account information, including your username
          and password. You are also responsible for all activities that occur
          under your account.
        </p>
        <p className="pb-4">
          <span className="font-bold">Content:</span>
          <br />
          Our app allows you to create, post, and share content, including text,
          images, videos, and other materials (hereinafter referred to as
          "Content"). You retain ownership of your Content, but by posting it on
          our app, you grant us a non-exclusive, transferable, sub-licensable,
          royalty-free, worldwide license to use, copy, modify, distribute,
          publish, and process your Content.
        </p>
        <p className="pb-4">
          You are solely responsible for your Content and the consequences of
          posting it. You must ensure that your Content does not violate any
          third-party rights, including intellectual property rights, privacy
          rights, and publicity rights. You must also comply with all applicable
          laws and regulations, including those related to hate speech,
          harassment, and terrorism.
        </p>
        <p className="pb-4">
          We reserve the right to remove or disable access to any Content that
          violates our policies or applicable laws. We also reserve the right to
          terminate your account if you repeatedly violate our policies or if
          your Content poses a risk to our app's community.
        </p>
        <p className="pb-4">
          <span className="font-bold">User Conduct:</span>
          <br />
          You must use our app in a manner that is lawful and respectful of
          others. You must not:
        </p>
        <ul className="pb-4">
          <li className="list-disc ml-8">
            Harass, bully, or intimidate other users.
          </li>
          <li className="list-disc ml-8">
            Post Content that is obscene, defamatory, or discriminatory.
          </li>
          <li className="list-disc ml-8">
            Use our app for any illegal activities.
          </li>
          <li className="list-disc ml-8">
            Engage in any activities that could harm our app's community or
            reputation.
          </li>
        </ul>
        <p className="pb-4">
          <span className="font-bold">Intellectual Property:</span>
          <br />
          Our app and all of its content, including but not limited to text,
          graphics, logos, and images, are the property of the Company or its
          licensors and are protected by Indian and international copyright
          laws. You may not reproduce, distribute, or use our app's content
          without our prior written consent.
        </p>
        <p className="pb-4">
          <span className="font-bold">Disclaimer of Warranties:</span>
          <br />
          Our app is provided on an "as is" and "as available" basis, without
          any warranties or representations of any kind, whether express or
          implied. The Company does not warrant that our app will be error-free
          or uninterrupted, nor does it warrant the accuracy, completeness, or
          reliability of any information obtained through our app.
        </p>
        <p className="pb-4">
          <span className="font-bold">Limitation of Liability:</span>
          <br />
          The Company and its affiliates, officers, directors, employees, and
          agents will not be liable for any damages, including but not limited
          to direct, indirect, incidental, punitive, or consequential damages,
          arising out of or in connection with your use of our app.
        </p>
        <p className="pb-4">
          <span className="font-bold">Indemnification:</span>
          <br />
          You agree to indemnify and hold harmless the Company and its
          affiliates, officers, directors, employees, and agents from and
          against any claims, damages, expenses, or liabilities arising out of
          your use of our app or your violation of these Terms.
        </p>
        <p className="pb-4">
          <span className="font-bold">Governing Law:</span>
          <br />
          These Terms shall be governed by and construed in accordance with the
          laws of India. Any disputes arising out of or in connection with these
          Terms shall be resolved through arbitration in accordance with the
          Indian Arbitration and Conciliation Act, 1996.
        </p>
        <p className="pb-4">
          <span className="font-bold">Changes to Terms:</span>
          <br />
          We reserve the right to modify these Terms at any time, with or
          without notice to you. Your continued use of our app after any such
          modifications shall constitute your acceptance of the modified Terms.
        </p>
        <p className="pb-16">
          <span className="font-bold">Conclusion:</span>
          <br />
          Thank you for using Quikey. We hope you enjoy your experience with us
          and appreciate your compliance with these Terms and our Privacy
          Policy.
        </p>
      </section>
      <div className="border-2 border-slate-800 border-solid"></div>
      <Footer2 />
    </div>
  );
};

export default Terms;
