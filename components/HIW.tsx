import React from "react";
import HIWComponent from "./HIWComponent";

const HIW = () => {
  return (
    <div className="relative py-12 flex flex-col justify-center items-center bg-[#f5f6fe] ">
      <img
        className="absolute animate-bounce right-20 top-8 sm:top-20"
        src="images/shap/circle-orange.webp"
        alt=""
      />
      <img
        className="absolute animate-rotate right-40 bottom-0 sm:bottom-20"
        src="images/shap/square-rotate.webp"
        alt=""
      />
      <img
        className="absolute hidden animate-bounceX md:block left-20"
        src="images/shap/wave-blue.webp"
        alt=""
      />
      <h1 className="relative sm:text-5xl text-4xl mb-12 text-center font-semibold text-[#1f2278]">
        How It Works?
      </h1>
      <div className="relative sm:p-4 flex flex-wrap justify-center">
        <HIWComponent
          Heading="JOIN OUR COMMUNITY"
          Paragraph="We’re super-accessible, super-affordable and super-convenient. Just join us on WhatsApp, and you’re in for an exclusive access to pediatricians 24x7!"
        />
        <HIWComponent
          Heading="GET ANSWERS IN 10 MINS."
          Paragraph="Whether it’s a pre-consultation/second opinion or what may seem like a silly concern, just drop in your queries and get an answer from our trusted pediatricians in 10 mins. You can also consult the pediatricians on call/video call if needed."
        />
        <HIWComponent
          Heading="STAY CONNECTED FOR MORE!"
          Paragraph="Join us on Facebook, Instagram and YouTube for added guidance, a community of pediatricians & like-minded parents, informative videos, expert opinions and much more!"
        />
      </div>
    </div>
  );
};

export default HIW;
