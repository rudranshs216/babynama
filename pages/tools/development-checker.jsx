import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

const development = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState({
    open1: true,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
  });
  const [datas, setData] = useState({});
  const [movement, setMovement] = useState([]);
  const [movementTracker, setMovementTracker] = useState({});
  const [language, setLanguage] = useState([]);
  const [languageTracker, setLanguageTracker] = useState([]);
  const [social, setSocial] = useState([]);
  const [socialTracker, setSocialTracker] = useState([]);
  const [cognitive, setCognitive] = useState([]);
  const [cognitiveTracker, setCognitiveTracker] = useState([]);
  const [redFlag, setRedFlag] = useState([]);
  const [DOB, setDOB] = useState();
  let data = JSON.stringify({
    child_dob: DOB,
  });

  let config = {
    method: "post",
    url: "https://api6.gagahealth.com/developmentdata/get-development-questions-data/",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  const handleClick = () => {
    axios(config)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setMovement(response.data.movement);
        setLanguage(response.data.language);
        setSocial(response.data.social);
        setCognitive(response.data.cognitive);
      })
      .catch((error) => {
        console.log(error);
      });
    setShow(true);
  };

  const handleClickM = (value, index, item) => {
    setMovementTracker({ ...movementTracker, [index]: value });
    if (
      (datas.movement_score[index] > 0 && value === "yes") ||
      (datas.movement_score[index] < 0 && value === "no")
    ) {
      if (movementTracker[index] !== undefined) {
        const updated = redFlag.filter((items) => {
          return items !== item;
        });
        updated.push(item);
        setRedFlag(updated);
      } else {
        setRedFlag([...redFlag, item]);
      }
    } else {
      const updated = redFlag.filter((items) => {
        return items !== item;
      });
      setRedFlag(updated);
    }
  };
  const handleClickL = (value, index, item) => {
    setLanguageTracker({ ...languageTracker, [index]: value });
    if (
      (datas.language_score[index] > 0 && value === "yes") ||
      (datas.language_score[index] < 0 && value === "no")
    ) {
      if (languageTracker[index] !== undefined) {
        const updated = redFlag.filter((items) => {
          return items !== item;
        });
        updated.push(item);
        setRedFlag(updated);
      } else {
        setRedFlag([...redFlag, item]);
      }
    } else {
      const updated = redFlag.filter((items) => {
        return items !== item;
      });
      setRedFlag(updated);
    }
  };
  const handleClickS = (value, index, item) => {
    setSocialTracker({ ...socialTracker, [index]: value });
    if (
      (datas.social_score[index] > 0 && value === "yes") ||
      (datas.social_score[index] < 0 && value === "no")
    ) {
      if (socialTracker[index] !== undefined) {
        const updated = redFlag.filter((items) => {
          return items !== item;
        });
        updated.push(item);
        setRedFlag(updated);
      } else {
        setRedFlag([...redFlag, item]);
      }
    } else {
      const updated = redFlag.filter((items) => {
        return items !== item;
      });
      setRedFlag(updated);
    }
  };
  const handleClickC = (value, index, item) => {
    setCognitiveTracker({ ...cognitiveTracker, [index]: value });
    if (
      (datas.cognitive_score[index] > 0 && value === "yes") ||
      (datas.cognitive_score[index] < 0 && value === "no")
    ) {
      if (cognitiveTracker[index] !== undefined) {
        const updated = redFlag.filter((items) => {
          return items !== item;
        });
        updated.push(item);
        setRedFlag(updated);
      } else {
        setRedFlag([...redFlag, item]);
      }
    } else {
      const updated = redFlag.filter((items) => {
        return items !== item;
      });
      setRedFlag(updated);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="flex flex-col items-center py-4 w-full max-w-[350px] gap-[20px] mt-28 mb-8 bg-sky-300 rounded-3xl">
        <h1 className="text-center text-xl font-semibold">Child's Age</h1>
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <div className="flex justify-center gap-2">
            <input
              type="date"
              className="border"
              max={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDOB(e.target.value)}
              value={DOB}
            />
            <div className="py-1 px-2 bg-green-600 rounded text-white">DOB</div>
          </div>
          <div
            className="px-4 py-1 rounded bg-green-600 hover:bg-green-700 cursor-pointer text-white font-medium"
            onClick={handleClick}
          >
            Enter
          </div>
        </div>
      </div>
      <div className={`${show ? "flex" : "hidden"} justify-center sm:gap-2`}>
        <div
          onClick={() =>
            setOpen({
              open1: true,
              open2: false,
              open3: false,
              open4: false,
              open5: false,
            })
          }
          className={`sm:px-4 py-2 px-[4px] bg-red-100 text-xs sm:text-lg ${
            !open.open1 ? "font-medium" : "font-semibold bg-red-200"
          } hover:bg-red-200 cursor-pointer`}
        >
          Movement
        </div>
        <div
          onClick={() =>
            setOpen({
              open1: false,
              open2: true,
              open3: false,
              open4: false,
              open5: false,
            })
          }
          className={`sm:px-4 py-2 px-[4px] bg-blue-100 text-xs sm:text-lg ${
            !open.open2 ? "font-medium" : "font-semibold bg-blue-200"
          } hover:bg-blue-200 cursor-pointer`}
        >
          Language
        </div>
        <div
          onClick={() =>
            setOpen({
              open1: false,
              open2: false,
              open3: true,
              open4: false,
              open5: false,
            })
          }
          className={`sm:px-4 py-2 px-[4px] bg-green-100 text-xs sm:text-lg ${
            !open.open3 ? "font-medium" : "font-semibold bg-green-200"
          } hover:bg-green-200 cursor-pointer`}
        >
          Social
        </div>
        <div
          onClick={() =>
            setOpen({
              open1: false,
              open2: false,
              open3: false,
              open4: true,
              open5: false,
            })
          }
          className={`sm:px-4 py-2 px-[4px] bg-yellow-100 text-xs sm:text-lg ${
            !open.open4 ? "font-medium" : "font-semibold bg-yellow-200"
          } hover:bg-yellow-200 cursor-pointer`}
        >
          Cognitive
        </div>
        <div
          onClick={() =>
            setOpen({
              open1: false,
              open2: false,
              open3: false,
              open4: false,
              open5: true,
            })
          }
          className={`sm:px-4 py-2 px-[4px] bg-gray-100 text-xs sm:text-lg ${
            !open.open5 ? "font-medium" : "font-semibold bg-gray-200"
          } hover:bg-gray-200 cursor-pointer`}
        >
          Red Flags
        </div>
      </div>
      {open.open1 && (
        <div className="flex flex-col items-center w-full py-6 sm:py-12 px-2">
          {movement.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-[500px] w-full bg-orange-100 m-2 rounded-lg py-4 px-[4px] sm:p-4 flex flex-col items-center"
              >
                <h1 className="text-md sm:text-lg text-center font-semibold text-[#1f2278]">
                  {item}
                </h1>
                <div className="flex gap-8 mt-6">
                  <div
                    onClick={() => handleClickM("yes", index, item)}
                    className={`px-4 py-1  rounded-lg cursor-pointer font-bold ${
                      movementTracker[index] === "yes"
                        ? "bg-red-200"
                        : "bg-white"
                    }`}
                  >
                    YES
                  </div>
                  <div
                    onClick={() => handleClickM("no", index, item)}
                    className={`px-4 py-1 rounded-lg cursor-pointer font-bold ${
                      movementTracker[index] === "no"
                        ? "bg-red-200"
                        : "bg-white"
                    }`}
                  >
                    NO
                  </div>
                </div>
              </div>
            );
          })}
          <button
            onClick={() =>
              setOpen({
                open1: false,
                open2: true,
                open3: false,
                open4: false,
                open5: false,
              })
            }
            className={`mt-8 py-2 px-4 ${
              show ? "block" : "hidden"
            } bg-red-200 rounded-3xl font-semibold text-lg`}
          >
            Next Section
          </button>
        </div>
      )}

      {open.open2 && (
        <div className="flex flex-col items-center w-full py-6 sm:py-12 px-2">
          {language.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-[500px] w-full bg-orange-100 m-2 rounded-lg py-4 px-[4px] sm:p-4 flex flex-col items-center"
              >
                <h1 className="text-md sm:text-lg text-center font-semibold text-[#1f2278]">
                  {item}
                </h1>
                <div className="flex gap-8 mt-6">
                  <div
                    onClick={() => handleClickL("yes", index, item)}
                    className={`px-4 py-1 rounded-lg cursor-pointer font-bold ${
                      languageTracker[index] === "yes"
                        ? "bg-blue-200"
                        : "bg-white"
                    }`}
                  >
                    YES
                  </div>
                  <div
                    onClick={() => handleClickL("no", index, item)}
                    className={`px-4 py-1 rounded-lg cursor-pointer font-bold ${
                      languageTracker[index] === "no"
                        ? "bg-blue-200"
                        : "bg-white"
                    }`}
                  >
                    NO
                  </div>
                </div>
              </div>
            );
          })}
          <button
            onClick={() =>
              setOpen({
                open1: false,
                open2: false,
                open3: true,
                open4: false,
                open5: false,
              })
            }
            className="mt-8 py-2 px-4 bg-blue-200 rounded-3xl font-semibold text-lg"
          >
            Next Section
          </button>
        </div>
      )}
      {open.open3 && (
        <div className="flex flex-col items-center w-full py-6 sm:py-12 px-2">
          {social.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-[500px] w-full bg-orange-100 m-2 rounded-lg py-4 px-[4px] sm:p-4 flex flex-col items-center"
              >
                <h1 className="text-md sm:text-lg text-center font-semibold text-[#1f2278]">
                  {item}
                </h1>
                <div className="flex gap-8 mt-6">
                  <div
                    onClick={() => handleClickS("yes", index, item)}
                    className={`px-4 py-1 rounded-lg cursor-pointer font-bold ${
                      socialTracker[index] === "yes"
                        ? "bg-green-200"
                        : "bg-white"
                    }`}
                  >
                    YES
                  </div>
                  <div
                    onClick={() => handleClickS("no", index, item)}
                    className={`px-4 py-1 rounded-lg cursor-pointer font-bold ${
                      socialTracker[index] === "no"
                        ? "bg-green-200"
                        : "bg-white"
                    }`}
                  >
                    NO
                  </div>
                </div>
              </div>
            );
          })}
          <button
            onClick={() =>
              setOpen({
                open1: false,
                open2: false,
                open3: false,
                open4: true,
                open5: false,
              })
            }
            className="mt-8 py-2 px-4 bg-green-200 rounded-3xl font-semibold text-lg"
          >
            Next Section
          </button>
        </div>
      )}
      {open.open4 && (
        <div className="flex flex-col items-center w-full py-6 sm:py-12 px-2">
          {cognitive.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-[500px] w-full bg-orange-100 m-2 rounded-lg py-4 px-[4px] sm:p-4 flex flex-col items-center"
              >
                <h1 className="text-md sm:text-lg text-center font-semibold text-[#1f2278]">
                  {item}
                </h1>
                <div className="flex gap-8 mt-6">
                  <div
                    onClick={() => handleClickC("yes", index, item)}
                    className={`px-4 py-1 rounded-lg cursor-pointer font-bold ${
                      cognitiveTracker[index] === "yes"
                        ? "bg-yellow-200"
                        : "bg-white"
                    }`}
                  >
                    YES
                  </div>
                  <div
                    onClick={() => handleClickC("no", index, item)}
                    className={`px-4 py-1 rounded-lg cursor-pointer font-bold ${
                      cognitiveTracker[index] === "no"
                        ? "bg-yellow-200"
                        : "bg-white"
                    }`}
                  >
                    NO
                  </div>
                </div>
              </div>
            );
          })}
          <button
            onClick={() =>
              setOpen({
                open1: false,
                open2: false,
                open3: false,
                open4: false,
                open5: true,
              })
            }
            className="mt-8 py-2 px-4 bg-yellow-200 font-semibold text-lg rounded-3xl"
          >
            Next Section
          </button>
        </div>
      )}
      {open.open5 && (
        <div className="flex flex-col items-center w-full py-6 sm:py-12 px-2">
          {redFlag.length !== 0 && (
            <h1 className="w-full text-center text-lg sm:text-xl font-semibold">
              Your Child's development is not normal!
            </h1>
          )}
          <h1 className="w-full text-center text-lg sm:text-xl font-semibold">
            Please Consult Our Doctors
          </h1>
          {redFlag.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-[500px] w-full bg-red-600 m-2 rounded-lg py-4 px-[4px] sm:p-4 flex flex-col items-center"
              >
                <h1 className="text-md sm:text-lg text-center font-semibold text-white">
                  {item}
                </h1>
              </div>
            );
          })}
          <Link target="_blank" href="https://bit.ly/3OnU00h">
            <button className="mt-8 py-2 px-4 bg-gray-200 font-semibold text-sm sm:text-lg rounded-3xl">
              Book an Appointment with Our Doctor
            </button>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default development;
