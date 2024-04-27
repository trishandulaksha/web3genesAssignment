import React, { useState } from "react";
import InputFieldUnit from "../../../Component/InputFieldComponent/InputFieldUnit";

function UserOnboardingPage() {
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  return (
    <div className="flex h-screen ">
      <div className="fixed top-0 left-0 w-full h-full "></div>
      <div className="relative z-10 w-full m-8 bg-white shadow-2xl shadow-gray-500">
        <div className="items-center justify-center my-3 mx-11">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              User Onboarding
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur </p>
          </div>
          <form action="">
            <div className="p-4 mt-4 border border-gray-300">
              <div>
                <p>Basic Details</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <div className="pl-1">
                    <InputFieldUnit
                      setCanSubmit={setCanSubmit}
                      type="text"
                      placeholder="First Name"
                      errMsgBase="firstname"
                    />
                  </div>

                  <div className="pl-1">
                    <InputFieldUnit
                      setCanSubmit={setCanSubmit}
                      type="text"
                      placeholder="Last Name"
                      errMsgBase="lastname"
                    />
                  </div>
                  <div className="pl-1">
                    <InputFieldUnit
                      setCanSubmit={setCanSubmit}
                      type="date"
                      placeholder=""
                      errMsgBase="DOB"
                    />
                  </div>
                  <div className="pl-1 mt-2">
                    <input
                      list="GenderOption"
                      name="Gender"
                      placeholder="Gender"
                      className="w-full px-4 py-2 leading-tight text-gray-700 transition duration-300 ease-in-out border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-400"
                    />
                    <datalist id="GenderOption">
                      <option value="Male" />
                      <option value="Female" />
                    </datalist>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p>Contact Details</p>
                <div className="grid grid-cols-3">
                  <div className="pl-1">
                    <InputFieldUnit
                      setCanSubmit={setCanSubmit}
                      type="text"
                      placeholder="Mobile Number"
                      errMsgBase="mobilenumber"
                    />
                  </div>
                  <div className="pl-1">
                    <InputFieldUnit
                      setCanSubmit={setCanSubmit}
                      type="text"
                      placeholder="Email"
                      errMsgBase="email"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <div>
                <input
                  type="button"
                  value="Clear"
                  className="py-2 text-blue-700 border border-blue-700 shadow-xl cursor-pointer px-7 hover:rounded-md"
                />
              </div>
              <div className="ml-3">
                <input
                  type="button"
                  value="Save"
                  className="py-2 text-white bg-blue-700 border border-blue-700 shadow-xl cursor-pointer px-7 hover:rounded-md"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserOnboardingPage;
