import React from "react";
import { inputFieldTypes } from "../Utils/Types/InputFieldTypes";

function InputFieldUnit({ type, placeholder }: inputFieldTypes) {
  return (
    <>
      <div className=" mt-2">
        <input
          className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400 transition duration-300 ease-in-out"
          type={type}
          value=""
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default InputFieldUnit;
