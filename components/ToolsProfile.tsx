import Image from "next/image";
import Link from "next/link";
import React from "react";

const ToolsProfile = ({link, title, img} : {link: string, title: string, img: string}) => {
  return (
    <Link href={link}>
      <div className="cursor-pointer bg-red-300 hover:bg-red-400 w-[fit-content] py-4 px-4 rounded flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="relative w-[130px] h-[130px] rounded-lg">
            <Image
              className="object-left rounded-lg"
              src={img}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h1 className="text-[18px] text-center mt-4 font-semibold">
            {title}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default ToolsProfile;
