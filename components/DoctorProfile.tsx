import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const DoctorProfile = ({
  Name,
  Degree,
  Para,
  Img,
}: {
  Name: string;
  Degree: string;
  Para: string;
  Img: string | StaticImageData;
}) => {
  return (
    <div className="w-full max-w-[300px] sm:w-[300px] h-[380px] py-4 sm:mx-4 my-4 rounded-lg border shadow-md bg-[#ecfefe] hover:bg-[#f5f6fe] border-gray-700 flex flex-col justify-between items-center">
      <div className="flex flex-col items-center pb-10">
        <div className="mb-3 w-32 h-32 overflow-hidden rounded-full shadow-lg relative">
          <Image
            className="object-top"
            src={Img}
            objectFit="cover"
            layout="fill"
            loading="lazy"
          />
        </div>
        <h5 className="mb-1 text-center text-[18px] text-[#f17732] font-semibold">
          {Name}
        </h5>
        <h6 className="text-[14px] text-center text-[#1f2278] mx-2 mb-2">
          {Degree}
        </h6>
        <span className="text-[12px] max-w-[300px] text-center mx-2">{Para}</span>
      </div>
      <div className="flex mt-4 space-x-3 lg:mt-6 bg-yellow-200 hover:bg-yellow-300 py-2 px-4 rounded-lg text-center text-[12px] font-semibold">
        <Link href={`https://api.whatsapp.com/send/?phone=%2B919205757093&text=Hello, Book Appointment for ${Name}&type=phone_number&app_absent=0`}>Schedule an Appointment</Link>
      </div>
    </div>
  );
};

export default DoctorProfile;
