import React from "react";
import Hero from "../assets/hero.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full pl-8 pr-2 md:flex-row">
        <div className="flex flex-col  justify-center h-full ">
          <p className="text-xl text-white py-3 font-semibold">
            Hey, My Name is
          </p>
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">
            Ojjasvi jain
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I love exploring new technologies and leveraging them to solve
            real-life problems
          </p>

          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Hero}
            alt="my profile"
            className=" rounded-full mx-auto w-100%  md:w-100%"
          />
        </div>
      </div>
    </div>
  );
};
//I focus on creating web applications that prioritize user experience and align with the specific needs of clients.
export default Home;
