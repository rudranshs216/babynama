import Link from "next/link";
import React from "react";

const HIWComponent = ({
  Heading,
  Paragraph,
}: {
  Heading: string;
  Paragraph: string;
}) => {
  return (
    <div className="overflow-hidden group w-full max-w-[280px] sm:w-[280px] m-4 rounded-lg bg-white border shadow-md relative top-[-100%] border-gray-700 px-4 py-6 flex flex-col items-start justify-between">
      <div className="w-full h-full absolute top-[100%] left-0 rounded-lg transition-all duration-500 group-hover:top-0 bg-[#f17732]" />
      <div className="mb-4 relative">
        <h1 className="mb-4 text-[22px] text-left transition-colors delay-300 text-[#f17732] group-hover:text-white font-semibold">
          {Heading}
        </h1>
        <p className="text-[14px] text-left transition-colors delay-200 group-hover:text-white">
          {Paragraph}
        </p>
      </div>
      <Link href="https://bit.ly/3IRQQAP">
        <div className="relative w-[fit-content] text-[14px] font-semibold border-2 bg-[#e1e2f6] text-[#565acf] px-6 py-2 rounded-lg group-hover:bg-white group-hover:text-[#f17732] cursor-pointer">
          <p>Join Us</p>
        </div>
      </Link>
    </div>
  );
};

export default HIWComponent;
