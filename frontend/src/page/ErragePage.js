import React from "react";
import Err404 from "../assest/404.png";
import { Link } from "react-router-dom";
const ErragePage = () => {
  return (
    <>
      <div className="p-3 container max-w-screen-lg mx-auto pb-12  flex justify-center ">
        <img
          src={Err404}
          alt="404"
          className="max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
        />
      </div>
      <div>
        <Link
          to={"/"}
          className=" flex justify-center h-8  grid-cols-3 max-w-[100px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium  rounded-full  text-center "
        >
          Back
        </Link>
      </div>
    </>
  );
};

export default ErragePage;
