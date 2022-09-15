import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";

const OurServices = () => {
  return (
    <div
      id="service"
      className="py-12 flex flex-col justify-center items-center "
    >
      <h1 className="sm:text-5xl text-4xl mb-12 font-semibold text-[#1f2278]">
        Our Services
      </h1>
      <Splide
        className="max-w-[1300px] w-full"
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
            },
          },
        }}
      >
        <SplideSlide className="flex justify-center">
          <div className="w-full max-w-[300px] sm:w-[300px] px-2 py-4 m-4 rounded-lg border border-gray-200 shadow-md bg-[#ecfefe] hover:bg-[#f5f6fe] dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              {/* <img className="mb-3 w-32 h-32 object-cover object-top rounded-full shadow-lg" src={Img} />
               */}
              <div className="flex items-center justify-center bg-white w-32 h-32 mb-3 rounded-full shadow-lg">
                <svg
                  enableBackground="new 0 0 512 512"
                  height="80"
                  viewBox="0 0 512 512"
                  width="80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#020288">
                    <path d="m311.734 208.706h-25.074v-25.083c0-5.522-4.478-10-10-10h-41.32c-5.523 0-10 4.478-10 10v25.083h-25.074c-5.523 0-10 4.478-10 10v41.33c0 5.522 4.477 10 10 10h25.074v25.082c0 5.522 4.477 10 10 10h41.32c5.522 0 10-4.478 10-10v-25.082h25.074c5.522 0 10-4.478 10-10v-41.33c0-5.522-4.477-10-10-10zm-10 41.33h-25.074c-5.522 0-10 4.478-10 10v25.082h-21.32v-25.082c0-5.522-4.477-10-10-10h-25.074v-21.33h25.074c5.523 0 10-4.478 10-10v-25.083h21.32v25.083c0 5.522 4.478 10 10 10h25.074z" />
                    <path d="m330.566 120.217v-51.05c0-5.522-4.478-10-10-10h-14.759v-49.167c0-5.522-4.478-10-10-10h-79.616c-5.523 0-10 4.478-10 10v49.167h-14.758c-5.523 0-10 4.478-10 10v51.049c-37.43 23.089-62.429 64.475-62.429 111.589v270.195c0 5.522 4.477 10 10 10h253.992c5.522 0 10-4.478 10-10v-270.194c0-47.115-24.999-88.501-62.43-111.589zm-104.374-100.217h19.808v2.559c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10v-2.559h19.808v39.167h-59.616zm-24.759 59.167h109.133v30.965c-15.03-6.023-31.427-9.338-48.583-9.338h-11.967c-17.156 0-33.552 3.315-48.583 9.338zm171.563 412.833h-233.992v-260.194c0-61.212 49.8-111.012 111.012-111.012h11.967c61.213 0 111.013 49.8 111.013 111.012z" />
                    <path
                      d="m181.465 350.096h149.069v102.32h-149.069z"
                      fill="#a4fcc4"
                    />
                  </g>
                </svg>
              </div>
              <h5 className="mb-4 text-[16px] text-[#1f2278] text-center font-semibold">
                Instant Answers 24x7
              </h5>
              <h6 className="text-[12px] text-center mx-2  mb-2">
                Whether it’s a seemingly silly question or what seems to be a
                serious concern - at any given time of the day, just ask and get
                an answer from a pediatrician in 10 minutes! They’re here for
                you throughout.
              </h6>
              {/* <div className="flex mt-4 space-x-3 lg:mt-4">
            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
        </div> */}
            </div>
          </div>
        </SplideSlide>
        <SplideSlide className="flex justify-center">
          <div className="w-full max-w-[300px] sm:w-[300px] px-2 py-4 m-4 rounded-lg border border-gray-200 shadow-md bg-[#ecfefe] hover:bg-[#f5f6fe] dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              {/* <img className="mb-3 w-32 h-32 object-cover object-top rounded-full shadow-lg" src={Img} />
               */}
              <div className="flex items-center justify-center bg-white w-32 h-32 mb-3 rounded-full shadow-lg">
                <svg
                  enableBackground="new 0 0 512 512"
                  height="80"
                  viewBox="0 0 512 512"
                  width="80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m318.39 278.299h-39.263v-39.262h-46.254v39.262h-39.263v46.255h39.263v39.263h46.254v-39.263h39.263z"
                    fill="#ffbdbc"
                  />
                  <g fill="#020288">
                    <path d="m256 164.444c-75.533 0-136.983 61.45-136.983 136.982s61.45 136.983 136.983 136.983 136.983-61.45 136.983-136.982-61.45-136.983-136.983-136.983zm0 253.965c-64.504 0-116.983-52.479-116.983-116.982s52.479-116.983 116.983-116.983 116.983 52.479 116.983 116.982-52.479 116.983-116.983 116.983z" />
                    <path d="m470.541 112.15h-100.492v-50.962c0-20.205-16.429-36.643-36.623-36.643h-154.853c-20.194 0-36.623 16.438-36.623 36.643v50.963h-100.491c-22.86-.001-41.459 18.598-41.459 41.458v292.387c0 22.86 18.599 41.459 41.459 41.459h429.082c22.86 0 41.459-18.599 41.459-41.459v-292.387c0-22.86-18.599-41.459-41.459-41.459zm-34.541 20v36.68h-50.511v-36.68zm-274.049-70.962c0-9.177 7.457-16.643 16.623-16.643h154.854c9.166 0 16.623 7.466 16.623 16.643v50.963h-24.765v-32.806c0-5.522-4.477-10-10-10h-118.57c-5.523 0-10 4.478-10 10v32.806h-24.765zm44.765 50.962v-22.805h98.568v22.806h-98.568zm-80.205 20v36.68h-50.511v-36.68zm365.489 313.846c0 11.833-9.626 21.459-21.459 21.459h-429.082c-11.833 0-21.459-9.626-21.459-21.459v-292.387c0-11.833 9.626-21.459 21.459-21.459h14.541v46.68c0 5.522 4.477 10 10 10h70.511c5.523 0 10-4.478 10-10v-46.68h218.979v46.68c0 5.522 4.477 10 10 10h70.51c5.523 0 10-4.478 10-10v-46.68h14.541c11.833 0 21.459 9.626 21.459 21.459z" />
                  </g>
                </svg>
              </div>
              <h5 className="mb-4 text-[16px] text-[#1f2278] text-center font-semibold  ">
                Online Pre-Consultation & Second Opinions
              </h5>
              <h6 className="text-[12px] text-center mx-2   mb-2">
                No more wondering whether you really need to visit your
                pediatrician for small concerns and report reviews or figuring
                out where to get a second opinion. Just get answers from our
                trusted pediatricians at babynama!
              </h6>
              {/* <div className="flex mt-4 space-x-3 lg:mt-6">
            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
        </div> */}
            </div>
          </div>
        </SplideSlide>
        <SplideSlide className="flex justify-center">
          <div className="w-full max-w-[300px] sm:w-[300px] px-2 py-4 m-4  rounded-lg border border-gray-200 shadow-md bg-[#ecfefe] hover:bg-[#f5f6fe] dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              {/* <img className="mb-3 w-32 h-32 object-cover object-top rounded-full shadow-lg" src={Img} />
               */}
              <div className="flex items-center justify-center bg-white w-32 h-32 mb-3 rounded-full shadow-lg">
                <svg
                  enableBackground="new 0 0 512 512"
                  height="85"
                  viewBox="0 0 512 512"
                  width="85"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m509.82 327.343-21.991-27.599c-1.896-2.381-4.775-3.768-7.82-3.768h-7.712l-74.353-93.385c-1.897-2.383-4.777-3.771-7.823-3.771h-22.862v-22.765c0-19.014-15.43-34.483-34.396-34.483h-97.678v-4.552c0-28.428-23.127-51.555-51.555-51.555s-51.555 23.127-51.555 51.555v4.552h-97.678c-18.966 0-34.397 15.47-34.397 34.484v251.241c0 5.523 4.478 10 10 10h22.279c4.628 22.794 24.758 39.999 48.815 39.999s44.186-17.205 48.814-39.999h250.37c4.628 22.794 24.757 39.999 48.814 39.999s44.187-17.205 48.815-39.999h24.093c5.522 0 10-4.477 10-10v-93.722c0-2.264-.769-4.461-2.18-6.232zm-124.52-108.523 61.432 77.156h-79.474v-77.156zm-233.226-81.799c0-17.399 14.155-31.555 31.555-31.555s31.555 14.156 31.555 31.555v4.552h-63.109v-4.552zm-132.074 39.035c0-7.986 6.459-14.483 14.397-14.483h298.464c7.938 0 14.396 6.497 14.396 14.483v241.241h-217.35c-4.628-22.794-24.757-39.999-48.814-39.999s-44.187 17.205-48.815 39.999h-12.278zm61.094 281.24c-16.44 0-29.816-13.458-29.816-29.999s13.376-29.999 29.816-29.999 29.815 13.458 29.815 29.999-13.375 29.999-29.815 29.999zm347.998 0c-16.44 0-29.815-13.458-29.815-29.999s13.375-29.999 29.815-29.999 29.816 13.458 29.816 29.999-13.376 29.999-29.816 29.999zm62.908-39.999h-14.093c-4.628-22.794-24.758-39.999-48.815-39.999s-44.186 17.205-48.814 39.999h-13.02v-101.321h107.932l16.81 21.096z" />
                  <path d="m183.629 66.808c5.522 0 10-4.477 10-10v-12.104c0-5.523-4.478-10-10-10s-10 4.477-10 10v12.104c0 5.523 4.477 10 10 10z" />
                  <path d="m236.764 94.969c1.934 1.829 4.404 2.736 6.871 2.736 2.652 0 5.299-1.048 7.266-3.127l10.626-11.229c3.796-4.011 3.621-10.341-.391-14.137s-10.341-3.621-14.137.391l-10.626 11.229c-3.796 4.012-3.621 10.341.391 14.137z" />
                  <path d="m116.358 94.579c1.967 2.078 4.613 3.126 7.266 3.126 2.467 0 4.938-.907 6.871-2.737 4.012-3.796 4.187-10.125.391-14.137l-10.627-11.229c-3.796-4.011-10.126-4.187-14.137-.39-4.012 3.796-4.187 10.125-.391 14.137z" />
                  <path
                    d="m90.896 216.592h184.372v113.287h-184.372z"
                    fill="#b2f0fb"
                  />
                </svg>
              </div>
              <h5 className="mb-4 text-[16px] text-[#1f2278] text-center font-semibold">
                Guidance from Trusted Nutritionists
              </h5>
              <h6 className="text-[12px] text-center mx-2   mb-2">
                Get the right guidance on your child's nutrition needs from
                experts.
              </h6>
              {/* <div className="flex mt-4 space-x-3 lg:mt-6">
            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
        </div> */}
            </div>
          </div>
        </SplideSlide>
        <SplideSlide className="flex justify-center">
          <div className="w-full max-w-[300px] sm:w-[300px] px-2 py-4 m-4  rounded-lg border border-gray-200 shadow-md bg-[#ecfefe] hover:bg-[#f5f6fe] dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              {/* <img className="mb-3 w-32 h-32 object-cover object-top rounded-full shadow-lg" src={Img} />
               */}
              <div className="flex items-center justify-center bg-white w-32 h-32 mb-3 rounded-full shadow-lg">
                <svg
                  enableBackground="new 0 0 512 512"
                  height="85"
                  viewBox="0 0 512 512"
                  width="85"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m181.049 229.112-76.87 76.971c-14.045 14.07-14.045 36.883 0 50.953l50.881 50.974c14.045 14.07 36.815 14.07 50.86 0l178.611-178.899h-203.482z"
                    fill="#e2c4ff"
                  />
                  <path
                    d="m495.277 81.339c-10.57-10.578-24.625-16.403-39.574-16.403-3.325 0-6.605.288-9.813.853 3.065-17.397-2.103-35.975-15.505-49.387-10.57-10.577-24.624-16.402-39.574-16.402s-29.003 5.825-39.573 16.402c-21.816 21.83-21.816 57.352 0 79.182 2.71 2.712 5.648 5.111 8.772 7.18l-18.689 18.716-52.105-52.184c-3.902-3.907-10.233-3.912-14.142-.012-3.908 3.902-3.914 10.234-.011 14.143l18.64 18.67-196.602 196.922c-17.56 17.593-17.902 46.002-1.029 64.017l-16.422 16.452c-3.896 3.903-3.896 10.226 0 14.129l12.383 12.406-88.75 88.913c-3.901 3.909-3.896 10.24.013 14.142 1.953 1.948 4.509 2.922 7.065 2.922 2.562 0 5.125-.979 7.078-2.936l88.724-88.887 12.357 12.38c1.876 1.88 4.422 2.936 7.078 2.936s5.202-1.056 7.078-2.936l16.396-16.426c8.547 8.028 19.644 12.432 31.418 12.432 12.28 0 23.825-4.79 32.506-13.487l196.588-196.91 18.617 18.648c1.953 1.956 4.515 2.935 7.077 2.935 2.557 0 5.113-.975 7.065-2.923 3.908-3.902 3.914-10.234.011-14.143l-52.155-52.24 18.732-18.758c2.054 3.126 4.453 6.09 7.198 8.836 10.57 10.577 24.624 16.402 39.573 16.402s29.003-5.825 39.574-16.402c21.817-21.831 21.817-57.352.001-79.182zm-129.892-50.8c6.792-6.796 15.822-10.539 25.426-10.539s18.635 3.743 25.427 10.539c13.407 13.416 13.997 34.875 1.773 49.001-.638.583-1.266 1.183-1.881 1.799-.616.617-1.214 1.245-1.795 1.882-6.533 5.671-14.791 8.766-23.524 8.766-9.604 0-18.634-3.743-25.427-10.54-14.025-14.035-14.025-36.873.001-50.908zm-239.787 380.799-24.74-24.786 9.327-9.344 14.287 14.313 10.454 10.473zm73.244-10.392c-4.903 4.912-11.42 7.617-18.352 7.617s-13.449-2.705-18.353-7.617l-50.881-50.975c-10.134-10.152-10.134-26.672-.001-36.823l196.578-196.898 87.616 87.767zm177.227-244.657-20.619-20.654 24.634-24.669c3.498.676 7.086 1.021 10.727 1.021 3.325 0 6.606-.288 9.813-.853-1.189 6.75-1.139 13.678.151 20.413zm105.062-9.905c-6.792 6.796-15.823 10.539-25.427 10.539s-18.635-3.743-25.427-10.539c-13.407-13.416-13.998-34.875-1.773-49.001.638-.583 1.266-1.183 1.881-1.799.617-.617 1.215-1.246 1.797-1.884 6.532-5.67 14.789-8.764 23.521-8.764 9.604 0 18.635 3.743 25.427 10.54 14.026 14.035 14.026 36.873.001 50.908z"
                    fill="#020288"
                  />
                </svg>
              </div>
              <h5 className="mb-4 text-[16px] text-[#1f2278] text-center font-semibold">
                Growth & Development Tracking + Consultations
              </h5>
              <h6 className="text-[12px] text-center mx-2   mb-2">
                Should my child start speaking by now?” “Should they start
                walking?” “My sister's son used to walk at this age, should I be
                worried if my baby is not walking?” babynama app has built-in
                tools to answer all these questions for you along with tracking
                your child’s growth and development as per their age!
              </h6>
              {/* <div className="flex mt-4 space-x-3 lg:mt-6">
            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
        </div> */}
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default OurServices;
