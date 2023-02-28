import Banner2 from "@/components/Banner2";
import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";

const content = () => {
  return (
    <div className="bg-white">
      <Header />
      <section className="bg-[url('/assets/img/about/Group1000001808.png')] bg-cover bg-no-repeat h-[80vh]">
        <div className="flex justify-between text-white relative mx-auto">
          <div className="absolute w-11/12 left-8 top-24 lg:left-20 lg:top-30 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center text-black leading-loose">
              <img src="/assets/img/content-policy/Referafriend.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 md:px-0">
        <h2 className="text-4xl font-bold underline">Content Policy</h2>
        <h5 className="">Updated on - 11/11/22</h5>
        <p className="pt-10 text-lg leading-8 pb-4">
          At Quikey, we take the safety and well-being of our users seriously,
          and content moderation is a critical aspect of maintaining a safe and
          positive environment for our users. We recognize that users can be
          exposed to harmful or offensive content on our app, which can have a
          negative impact on their mental health and well-being. Therefore, we
          have put in place a comprehensive content moderation policy that
          prioritizes user safety and ensures that our app remains a safe and
          welcoming platform for all users.
        </p>
        <p className="pb-4">
          Our content moderation policy is based on Indian user sentiment, and
          we have taken into account the diverse cultural, social, and
          linguistic backgrounds of our users in India. We aim to create a safe
          and inclusive space where everyone can freely express themselves
          without fear of harassment, discrimination, or abuse.
        </p>
        <p className="pb-4">
          <span className="font-bold">Types of Content we Moderate: </span>
          <br />
          We have a team of trained moderators who review all content posted on
          our app, including text, images, videos, and audio. Our moderators use
          a variety of tools and techniques to detect and remove harmful content
          that violates our community guidelines, which includes content that
          promotes violence, terrorism, hate speech, cyberbullying, nudity, and
          pornography. We also remove content that is spam, misleading, or
          deceptive in nature.
        </p>
        <p className="pb-4">
          <span className="font-bold">Moderation Guidelines: </span>
          <br />
          Our moderation guidelines are based on Indian user sentiment and are
          designed to ensure that our users can express themselves freely
          without fear of harassment, discrimination, or abuse. We have strict
          guidelines that prohibit users from posting harmful or offensive
          content that promotes hate speech, violence, discrimination, or
          harassment. We also prohibit the posting of sexually explicit or
          pornographic content, and we remove any content that depicts or
          promotes illegal activities.
        </p>
        <p className="pb-4">
          <span className="font-bold">Reporting System: </span>
          <br />
          We have a reporting system in place that allows users to report any
          inappropriate or harmful content they observe on our app. Users can
          report content by clicking on the report button, and our moderators
          will review the reported content promptly. We encourage users to
          report any content that they believe violates our community guidelines
          or is harmful or offensive in any way.
        </p>
        <p className="pb-4">
          <span className="font-bold">Review Process: </span>
          <br />
          Our moderators review all reported content promptly and take
          appropriate action based on our moderation guidelines. We have a team
          of trained moderators who are well-versed in Indian user sentiment and
          cultural sensitivities. We follow a fair and consistent review process
          to ensure that all users are treated equally and that the review
          process is transparent and easy to understand.
        </p>
        <p className="pb-4">
          <span className="font-bold">Appeal Process: </span>
          <br />
          We have an appeal process in place that allows users to appeal any
          moderation decisions that they believe are unfair or unjust. Users can
          appeal by contacting our customer support team and providing a
          detailed explanation of why they believe the moderation decision was
          incorrect. We review all appeals promptly and make a decision based on
          our moderation guidelines and Indian user sentiment.
        </p>
        <p className="pb-4">
          <span className="font-bold">Education and Awareness: </span>
          <br />
          We believe that education and awareness are key to maintaining a safe
          and positive environment on our app. We provide resources and
          information to our users about content moderation, online safety, and
          mental health. We also work with experts and partners to stay up to
          date on the latest trends and best practices for content moderation
          and user safety.
        </p>
        <p className="pb-16">
          <span className="font-bold">Conclusion: </span>
          <br />
          At Quikey, we are committed to ensuring that our users have a safe and
          positive experience on our app. Our content moderation policy is based
          on Indian user sentiment and is designed to promote user safety and
          well-being. We encourage our users to report any inappropriate or
          harmful content they observe on our app, and we take prompt action to
          remove any content that violates our community guidelines. By working
          together, we can create a safe and welcoming platform for all users.
        </p>
      </section>
      <div className="border-2 border-slate-800 border-solid"></div>
      <Footer2 />
    </div>
  );
};

export default content;
