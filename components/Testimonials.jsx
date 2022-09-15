import React from "react";
import Slideshow from "./SlideShow";
// import IframeResizer from "iframe-resizer-react";

const Testimonials = () => {
  return (
    <div className="bg-gray-800 py-16 px-4 h-[500px]">
      <h1 className="text-center text-white text-3xl sm:text-5xl mb-8 font-semibold">
        Testimonials
      </h1>
      {/* <div className='flex justify-center'>
        <Slideshow />
      </div> */}
      {/* <IframeResizer
        src="https://embed.testimonial.to/carousel/all/babynama?theme=light&autoplay=off&showmore=off&one-row=off&same-height=off"
        style={{ width: "100%", minWidth: "100%" }}
      /> */}
      <iframe className="w-full h-full" src="https://embed.testimonial.to/carousel/all/babynama?theme=light&autoplay=off&showmore=off&one-row=off&same-height=off" ></iframe>
    </div>
  );
};

export default Testimonials;
