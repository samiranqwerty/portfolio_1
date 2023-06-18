import React from "react";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">Let us create awesome products!</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          I am always openn to discussing your project, improving your online
          presence, or helping with Your design and converting challenges
        </p>
        <a href="mailto:samiran@dailyorganiccare.com ">
        <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-800 to-indigo-900 text-lg font-bold text-white rounded-sm hover:from-indigo-900 hover:to-blue-600 duration-1000">Say hello</button>
        </a>
      </div>
      <div className="mt-10 flex items-center flex-wrap gap-8 justify-center">
      <SocialLink title="Github" link="https://github.com/samiranqwerty"/>
      <SocialLink title="Linkdin" link="https://www.linkedin.com/in/samiran-biswas-46312385/"/>
      <SocialLink title="Facebook" link="https://www.facebook.com/samiran.biswas2"/>
      <SocialLink title="Instagram" link="https://www.instagram.com/happy_photo_instagood/"/>
      </div>
    </div>
  );
};

export default Contact;
