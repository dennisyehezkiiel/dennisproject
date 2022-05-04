import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import blogging from "../public/Blogging.json";
import discovery from "../public/discovery.json";
import Image from "next/image";

const customLoader = ({ src }) => {
  console.log(src, '>>>>>>>>>>ini')
  return `/${src}`;
};

export default function Home() {
  const [setWindows, windows] = useState("2xl");

  const updateDimensions = () => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  };

  const getSize = (windows) => {
    if (windows === "2xl") {
      return 800;
    } else if (windows === "xl") {
      return 500;
    } else if (windows === "lg") {
      return 300;
    } else if (windows === "sm") {
      return 200;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    if (window.innerWidth > 1024 && window.innerWidth <= 1280) {
      setWindows("xl");
    } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
      setWindows("lg");
    } else if (window.innerWidth > 640 && window.innerWidth <= 768) {
      setWindows("sm");
    }

    return () => window.removeEventListener("resize", updateDimensions);
  }, [setWindows]);

  return (
    <>
      <Head>
        <title>Dennis Manullang</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid z-10 sticky top-6 inset-x-0 content-end lg:mx-32 mx-12">
        <a href="#">
          <Image
            alt="websiteLogo"
            src={"logo.svg"}
            width={70}
            height={70}
            loader={customLoader}
          />
        </a>
      </div>

      {/* ini page yang pertama */}
      <div
        className="grid lg:grid-cols-2 place-items-center h-screen gap-2 lg:mx-32 mx-12"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div>
          <Lottie
            loop
            animationData={blogging}
            play
            style={{ width: getSize(windows), height: getSize(windows) }}
          />
        </div>
        <div className="grid grid-row-3 gap-6 relative">
          <p className="lg:text-7xl text-6xl text-serif font-semibold text-zinc-500 break-words">
            Hi,{" "}
            <span className="font-bold italic text-black">
              Dennis Manullang
            </span>{" "}
            here!
          </p>
          <div
            className="bg-slate-300 h-px rounded-full"
            style={{ width: "80%" }}
          ></div>
          <p>
            I am an enthusiastic, ambitious person with specialization in
            Frontend Developer, who has developed a mature and responsible
            approach to any task that I undertake, or the situation that I
            present with. Building and maintaining responsive websites for you.
            Passionate about usability and possess working knowledge of Adobe
            Photoshop
          </p>
        </div>
      </div>

      {/* ini page kedua */}
      <div className="grid place-items-center min-h-screen">
        <div className="bg-blue-300 w-full">
          <div className="grid place-items-center lg:grid-cols-3 lg:mx-28 mx-10 gap-10 py-24">
            <motion.div
              className="card"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <div className="flex justify-center text-center flex-col break-words bg-white w-fit py-4 rounded-md">
                <Image
                  alt="character"
                  src={"teaching.svg"}
                  width={350}
                  height={300}
                  loader={customLoader}
                />
                <p className="px-12">
                  Discovering and researching the project definitions and
                  looking on how the subquent steps look like. Defining the best
                  strategies for your website
                </p>
              </div>
            </motion.div>
            <motion.div
              className="card"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <div className="flex justify-center text-center flex-col break-words bg-white w-fit py-4 rounded-md">
                <Image
                  alt="character"
                  src={"webDevelopment.svg"}
                  width={350}
                  height={300}
                  loader={customLoader}
                />
                <p className="px-12">
                  Describing the relations between the main areas of your
                  website, designing, content writing, code implementation and
                  ensuring that the website loads prefectly
                </p>
              </div>
            </motion.div>
            <motion.div
              className="card"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <div className="flex justify-center text-center flex-col break-words bg-white w-fit py-4 rounded-md">
                <Image
                  alt="character"
                  src={"giveaway.svg"}
                  width={350}
                  height={300}
                  loader={customLoader}
                />
                <p className="px-12">
                  Delivering your website. Website maintenance and general
                  updates will be facilitated by collecting feedback from the
                  end-users of the website
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ini page ketiga */}
      <div
        className="grid lg:grid-cols-2 place-items-center min-h-screen gap-2 lg:mx-32 mx-12 lg:my-0 my-12"
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div>
          <Lottie
            loop
            animationData={discovery}
            play
            style={{ width: getSize(windows), height: getSize(windows) }}
          />
        </div>
        <div className="grid grid-row-3 gap-6 lg:text-left text-center sm:grid-place-items-center">
          <p className="lg:text-7xl text-4xl text-serif font-base break-words">
            <span className="font-bold italic">Download</span> my CV
          </p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1kvKSFl25DIgni9tAa0Jm23h2jPjq2h0M/view?usp=sharing"
            className="bg-transparent border-2 border-zinc-900 w-fit px-4 py-2 rounded-full shadow-md shadow-zinc-600"
          >
            DOWNLOAD MY CV HERE
          </a>
        </div>
      </div>

      {/* last page */}
      <div className="grid place-items-center bg-blue-300 py-10">
        <div>
          <Image
            alt="character"
            src={"teamBuilding.svg"}
            width={500}
            height={500}
            loader={customLoader}
          />
        </div>
        <p className="animate-bounce text-sm my-4 text-white tracking-wider">
          Let&apos;s work together!
        </p>
        <div className="grid grid-cols-4 gap-6">
          <motion.div
            className="card"
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/in/dennis-yehezkiel-93b031232/"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>
          </motion.div>
          <motion.div
            className="card"
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <a
              target="_blank"
              href="https://github.com/dennisyehezkiiel"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
          </motion.div>
          <motion.div
            className="card"
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <a
              target="_blank"
              href="https://www.instagram.com/dennisyehezkiiel/?hl=en"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </motion.div>
          <motion.div
            className="card"
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <a
              target="_blank"
              href="mailto:dennisyehezkiel.m@gmail.com"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center py-2 bg-blue-200 w-full shadow-blue-700 shadow-lg">
        <p className="font-semibold text-white tracking-wider">Stay Healthy!</p>
      </div>
    </>
  );
}
