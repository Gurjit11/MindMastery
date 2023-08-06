import React from "react";
import HomeSubjects from "../components/HomeSubjects";
import Chatbot from "./Chatbot";
import HomeQuizes from "../components/HomeQuizes";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="fixed right-3 bottom-3">
        <Chatbot />
      </div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 top-0    border-lime-200">
        <div className="p-10">
          <div className="grid md:grid-cols-2">
            <div>
              <h1 className="text-white text-4xl text-extrabold m-3">
                We aim at building a great future for you.
              </h1>
              <button
                type="button"
                className=" border text-white bg-transparent text-xl m-3 p-3 sm:w-[100px] font-bold"
              >
                <Link to="/quiz/geography">Tests</Link>
              </button>
              <button
                type="button"
                className=" border bg-black text-white text-xl m-3 p-3 sm:w-[100px] font-bold"
              >
                <Link to="/type/indian geography">Videos</Link>
              </button>
              <p className="text-gray-200 sm:mt-0 mt-3">
                Educational websites can include websites that have games,
                videos or topic related resources that act as tools to enhance
                learning and supplement classroom teaching. These websites help
                make the process of learning entertaining and attractive to the
                student, especially in today's age.
              </p>
            </div>
            <div className=" flex justify-center">
              <img
                className="rounded-full md:max-h-[300px]"
                src={
                  "https://img.freepik.com/premium-photo/cheerful-indian-school-kids-uniform-standing-isolated-white-background_466689-50133.jpg?w=996"
                }
                alt="iphone-mockup"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="text-3xl border-2 p-1 underline border-blue-100    font-bold text-center mb-2 ">
          Subjects
        </div>
        <HomeSubjects />
      </div>
      <div>
        <div className="text-3xl border-2 p-1 underline border-blue-100    font-bold text-center mt-6 mb-2 ">
          Quizes
        </div>
        <HomeQuizes />
      </div>
    </div>
  );
};

export default Home;
