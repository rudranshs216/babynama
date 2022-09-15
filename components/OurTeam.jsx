import React from "react";
import DoctorProfile from "./DoctorProfile";
import sumitra from "../public/images/doc/sumitra.webp";
import vandna from "../public/images/doc/vandna.webp";
import rajat from "../public/images/doc/Rajat.webp";
import priyanka from "../public/images/doc/priyanka.webp";
import garima from "../public/images/doc/Garima.webp";
import shaphali from "../public/images/doc/shaphali.png";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Card from "../public/images/logo.png";
import Image from "next/image";

const OurTeam = () => {
  return (
    <div
      id="doctor"
      className="py-12 flex w-full flex-col justify-center items-center "
    >
      <h1 className="sm:text-5xl text-4xl mb-12 font-semibold text-[#1f2278]">
        Our Team
      </h1>
      <Splide
        className="max-w-[1300px] w-full flex justify-center"
        options={{
          rewind: true,
          autoplay: true,
          interval: 3000,
          perPage: 3,
          perMove: 1,
          lazyLoad: "nearby",
          pagination: false,
          breakpoints: {
            666: {
              perPage: 1,
              perMove: 1,
            },
            999: {
              perPage: 2,
              perMove: 1,
            }
          },
        }}
      >
        <SplideSlide className="flex justify-center px-2">
          <DoctorProfile
            Name="Dr. Sumitra Meena"
            Degree="MBBS, MD Paediatrics (Kalawati Hospital)"
            Para="8 years experience
Ex resident safdarjung hospital"
            Img={sumitra}
          />
        </SplideSlide>
        <SplideSlide className="flex justify-center px-2">
          <DoctorProfile
            Name="Dr. Vandna Kasana
"
            Degree="MBBS, MD Paediatrics(Kalawati Hospital)"
            Para="8 years experience
Ex resident safdarjung hospital
Consultant paediatrician and newborn specialist
Vandna child clinics, Ghitorni , New Delhi"
            Img={vandna}
          />
        </SplideSlide>
        <SplideSlide className="flex justify-center px-2">
          <DoctorProfile
            Name="Dr. Rajat Goswami"
            Degree="MD Paediatrics (Kalawati Hospital)"
            Para="10 years experience Consultant paediatrician and newborn specialist Blossoms kids clinics, Rohini, New Delhi"
            Img={rajat}
          />
        </SplideSlide>
        <SplideSlide className="flex justify-center px-2">
          <DoctorProfile
            Name="Dr. Priyanka Tiwari"
            Degree="MBBS, DNB Paediatrics (Safdarjung Hospital)"
            Para="10 years experience Consultant paediatrician and newborn specialistJaypee Hospital, Noida"
            Img={priyanka}
          />
        </SplideSlide>
        <SplideSlide className="flex justify-center px-2">
          <DoctorProfile
            Name="Dr. Garima yadav"
            Degree="MBBS, MD Paediatrics (MAMC)"
            Para="8 years of experience Consultant paediatrician and newborn specialist Garima Hospital, Gurugram"
            Img={garima}
          />
        </SplideSlide>
        <SplideSlide className="flex justify-center px-2">
          <DoctorProfile
            Name="Shaiphali Goyal"
            Degree="M.Sc in Food and Nutrition"
            Para="Child Nutrition and Lactation Expert
Gold Medalist, Ex- Kalawati Saran Children Hospital (Lady Hardinge Medical College)"
            Img={shaphali}
          />
        </SplideSlide>
      </Splide>
      {/* <div className="px-4 flex flex-wrap justify-center">
        <DoctorProfile
          Name="Dr. Sumitra Meena"
          Degree="MBBS, MD Paediatrics (Kalawati Hospital)"
          Para="8 years experience
Ex resident safdarjung hospital"
          Img={sumitra}
        />
        <DoctorProfile
          Name="Dr. Vandna Kasana
"
          Degree="MBBS, MD Paediatrics(Kalawati Hospital)"
          Para="8 years experience
Ex resident safdarjung hospital
Consultant paediatrician and newborn specialist
Vandna child clinics, Ghitorni , New Delhi"
          Img={vandna}
        />
        <DoctorProfile
          Name="Dr. Rajat Goswami"
          Degree="MD Paediatrics (Kalawati Hospital)"
          Para="10 years experience Consultant paediatrician and newborn specialist Blossoms kids clinics, Rohini, New Delhi"
          Img={rajat}
        />
        <DoctorProfile
          Name="Dr. Priyanka Tiwari"
          Degree="MBBS, DNB Paediatrics (Safdarjung Hospital)"
          Para="10 years experience Consultant paediatrician and newborn specialistJaypee Hospital, Noida"
          Img={priyanka}
        />
        <DoctorProfile
          Name="Dr. Garima yadav"
          Degree="MBBS, MD Paediatrics (MAMC)"
          Para="8 years of experience Consultant paediatrician and newborn specialist Garima Hospital, Gurugram"
          Img={garima}
        />
        <DoctorProfile
          Name="Shaiphali Goyal"
          Degree="M.Sc in Food and Nutrition"
          Para="Child Nutrition and Lactation Expert
Gold Medalist, Ex- Kalawati Saran Children Hospital (Lady Hardinge Medical College)"
          Img={shaphali}
        />
      </div> */}
    </div>
  );
};

export default OurTeam;
