import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Graph from "../../components/Graph.jsx";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { MdClose } from "react-icons/md";
import Head from "next/head";

const growth = () => {
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);
  const [height, setHeight] = useState("40");
  const [minWeight, setMinWeight] = useState();
  const [minHeight, setMinHeight] = useState();
  const [maxWeight, setMaxWeight] = useState();
  const [maxHeight, setMaxHeight] = useState();
  const [weight, setWeight] = useState("2");
  const [age, setAge] = useState("");
  let data = JSON.stringify({
    child_dob: age,
    child_gender: `${click ? "2" : "1"}`,
  });

  let config = {
    method: "post",
    url: "https://api6.gagahealth.com/growthdata/get-height-weight-data/",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(true);
    axios(config)
      .then((response) => {
        setMinHeight(response.data.height[0][1]);
        setMinWeight(response.data.weight[0][1]);
        setMaxHeight(response.data.height[0][2]);
        setMaxWeight(response.data.weight[0][2]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="relative flex flex-col items-center">
      <Navbar />
      <div className="mx-4 flex justify-center items-center gap-2 sm:gap-[20px] pt-[100px]">
        <div
          onClick={() => setClick(false)}
          className={`cursor-pointer w-[fit-content] py-4 px-2 ${
            click ? "bg-sky-300" : "bg-sky-800"
          } flex items-center rounded-3xl justify-center gap-2 sm:gap-[20px]`}
        >
          <div className="relative w-[80px] h-[100px]">
            <Image
              className="rounded-3xl"
              src="/images/growthCal/boy.webp"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <h1
            className={`text-lg sm:text-xl font-semibold text-white ${
              click ? "text-black" : "text-white"
            }`}
          >
            Boy
          </h1>
        </div>
        <div
          onClick={() => setClick(true)}
          className={`cursor-pointer w-[fit-content] py-4 px-2 ${
            !click ? "bg-sky-300" : "bg-sky-800"
          } flex items-center rounded-3xl justify-center gap-2 sm:gap-[20px]`}
        >
          <div className="relative w-[100px] h-[100px]">
            <Image
              className="rounded-3xl"
              src="/images/growthCal/girl.webp"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <h1
            className={`text-lg sm:text-xl font-semibold ${
              !click ? "text-black" : "text-white"
            }`}
          >
            Girl
          </h1>
        </div>
      </div>
      <div className="mx-2 flex flex-col items-center gap-[20px] w-full pt-[20px] pb-[100px]">
        <div className="flex flex-col items-center py-4 w-full max-w-[350px] gap-[20px] bg-sky-300 rounded-3xl">
          <h1 className="text-center text-xl font-semibold">Child's Age</h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-[10px]">
            <div className="flex justify-center gap-2">
              <input
                type="date"
                className="border"
                max={new Date().toISOString().split("T")[0]}
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
              <div className="py-1 px-2 bg-green-600 rounded text-white">
                Age
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center py-4 w-full max-w-[500px] gap-[20px] bg-sky-300 rounded-3xl">
          <h1 className="text-center text-xl font-semibold">Child's Height</h1>
          <div className="w-full px-2 flex flex-col justify-center items-center gap-[10px]">
            <h1 className="text-lg font-semibold text-center">{`${height} cms`}</h1>
            <input
              className="w-full border"
              type="range"
              value={height}
              min="40"
              max="150"
              step="0.5"
              onChange={(e) => setHeight(e.target.value)}
            />
            <div className="py-1 px-2 bg-green-600 rounded text-white">Cms</div>
          </div>
        </div>
        <div className="flex flex-col items-center py-4 w-full max-w-[500px] gap-[20px] bg-sky-300 rounded-3xl">
          <h1 className="text-center text-xl font-semibold">Child's Weight</h1>
          <div className="w-full px-2 flex flex-col justify-center items-center gap-[10px]">
            <h1 className="text-lg font-semibold text-center">{`${weight} kgs`}</h1>
            <input
              className="w-full"
              type="range"
              value={weight}
              min="2"
              max="50"
              step="0.25"
              onChange={(e) => setWeight(e.target.value)}
            />
            <div className="py-1 px-2 bg-green-600 rounded text-white">Kgs</div>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="py-2 px-6 bg-sky-600 rounded text-white text-xl font-medium"
        >
          See Your Child's Growth
        </button>
      </div>
      {open && (
        <div className="drop-shadow-2xl fixed top-20 bg-sky-200 px-2  pb-4 max-w-[800px] mx-2 h-[fit-content] rounded-md w-full z-[100] flex flex-col gap-2 justify-start">
          <div className="w-full flex justify-end p-2">
            <MdClose
              size={24}
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <h1 className="text-center font-semibold text-[18px]">{`Your Child's Height ${height} cms`}</h1>
          {height < minHeight && (
            <img className="rounded-lg" src="/images/growthCal/under.png" />
          )}
          {height >= minHeight && height <= maxHeight && (
            <img className="rounded-lg" src="/images/growthCal/normal.png" />
          )}
          {height > maxHeight && (
            <img className="rounded-lg" src="/images/growthCal/over.png" />
          )}
          <div className="w-full grid grid-cols-3 ">
            <p className="text-center mx-2 font-medium text-red-600">
              Below Normal
            </p>
            <p className="text-center mx-2 font-medium text-gray-800">
              Normal Height
            </p>
            <p className="text-center mx-2 font-medium text-red-600">
              Above Normal
            </p>
          </div>
          <p className="text-center text-green-600 font-medium text-[16px]">
            {`Ideal Weight Range: ${minHeight?.toFixed(
              2
            )} - ${maxHeight?.toFixed(2)} cms`}{" "}
          </p>
          <hr className="bg-black h-[2px] border-black" />
          <h1 className="text-center font-semibold text-[18px] mt-4">{`Your Child's Weight ${weight} kg's`}</h1>
          {weight < minWeight && (
            <img className="rounded-lg" src="/images/growthCal/under.png" />
          )}
          {weight >= minWeight && weight <= maxWeight && (
            <img className="rounded-lg" src="/images/growthCal/normal.png" />
          )}
          {weight > maxWeight && (
            <img className="rounded-lg" src="/images/growthCal/over.png" />
          )}
          <div className="w-full grid grid-cols-3 ">
            <p className="text-center mx-2 font-medium text-red-600">
              Below Normal
            </p>
            <p className="text-center mx-2 font-medium text-gray-800">
              Normal Weight
            </p>
            <p className="text-center mx-2 font-medium text-red-600">
              Above Normal
            </p>
          </div>
          <p className="text-center text-green-600 font-medium text-[16px]">
            {`Ideal Weight Range: ${minWeight?.toFixed(
              2
            )} - ${maxWeight?.toFixed(2)} kg's`}{" "}
          </p>
        </div>
      )}
      <div
        className={`w-full h-full bg-black z-[99] absolute ${
          open ? "opacity-30" : "opacity-0"
        } pointer-events-none transition-opacity duration-100 ease-in-out top-0 bottom-0 left-0 right-0`}
      />
      <Footer />
    </div>
  );
};

export default growth;
