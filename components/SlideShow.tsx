import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import TestimonialConponent from "./TestimonialConponent";
import testimonialPic1 from "../public/images/testimonials/Asha.webp";
import testimonialPic2 from "../public/images/testimonials/Sawti.webp";
import testimonialPic3 from "../public/images/testimonials/Pankaj.webp";


const Slideshow = () => {
	const Testimonials = [
		{
			testimonial: "My baby was crying continuously for 2 hours. I scheduled a consultation on the babynama Whatsapp Group and the doctor provided me with the right guidance. Within 15 minutes I was able to calm my baby.",
			name: "Asha",
			detail: "Parent of two Young Kids",
			// imgSrc: "/images/testimonials/Testimonials pictures-20220712T145415Z-001/Testimonials pictures/Asha.webp"
			imgSrc: testimonialPic1
		},
		{
			testimonial: "I use babynama Whatsapp group daily to be a super parent!",
			name: "Swati",
			detail: "Parent of a 1.5 year old",
			// imgSrc: "/images/testimonials/Sawti.webp"
			imgSrc: testimonialPic2
		},
		{
			testimonial: "My friends told me my son should be walking by now. I got worried but I was not sure if I should take him to the doctor for this. I used the babynama Whatsapp group and was relieved that my son is doing fine for his age.",
			name: "Pankaj",
			detail: "Parent of a 1 year old",
			// imgSrc: "/images/testimonials/Testimonials pictures-20220712T145415Z-001/Testimonials pictures/Pankaj.webp"
			imgSrc: testimonialPic3
		}

	];
	// const zoomInProperties = {
	// 	indicators: true,
	// 	scale: 1,
	// 	duration: 5000,
	// 	transitionDuration: 1000,
	// 	infinite: true,
	// 	prevArrow: (
	// 		<div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
	// 			<svg
	// 				xmlns="http://www.w3.org/2000/svg"
	// 				viewBox="0 0 512 512"
	// 				fill="#2e2e2e"
	// 			>
	// 				<path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
	// 			</svg>
	// 		</div>
	// 	),
	// 	nextArrow: (
	// 		<div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
	// 			<svg
	// 				xmlns="http://www.w3.org/2000/svg"
	// 				viewBox="0 0 512 512"
	// 				fill="#2e2e2e"
	// 			>
	// 				<path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
	// 			</svg>
	// 		</div>
	// 	),
	// };
	const properties = {
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		indicators: true,
		arrows: true,
		pauseOnHover: true
	};
	return (
		<div className="w-full rounded-lg sm:w-[600px] bg-white pb-4 slide-container">
			<Slide {...properties} >
				{Testimonials.map((each, index) => (
					<div key={index} className="w-full rounded-lg sm:w-[600px] bg-white py-8 px-4 flex justify-center each-slide">
						<TestimonialConponent Name={each.name} Paragraph={each.testimonial} imgSrc={each.imgSrc} Details={each.detail} />
					</div>
				))}
			</Slide>
		</div>
	);
};

export default Slideshow;
