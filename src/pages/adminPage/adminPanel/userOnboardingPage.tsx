import React from "react";
import InputFieldUnit from "../../../Component/InputFieldUnit";

function UserOnboardingPage() {
  return (
    <div>
      <div>
        <div>
          <h1>User Onboarding</h1>
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </div>
        <form action="">
          <div className="border border-black">
            <div>
              <p>Basic Details</p>
              <div className="grid grid-cols-3">
                <div>
                  <InputFieldUnit type="text" placeholder="First Name" />
                </div>

                <div>
                  <InputFieldUnit type="text" placeholder="Last Name" />
                </div>
                <div>
                  <InputFieldUnit type="date" placeholder="Last Name" />
                </div>
                <div>
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
            <div>
              <p>Basic Details</p>
              <div className="grid grid-cols-3">
                <div>
                  <InputFieldUnit type="text" placeholder="Mobile Number" />
                </div>
                <div>
                  <InputFieldUnit type="text" placeholder="Email" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <div>
              <input
                type="button"
                value="Clear"
                className="text-blue-700 border border-blue-700"
              />
            </div>
            <div>
              <input
                type="button"
                value="Save"
                className="text-white bg-blue-700 border border-blue-700"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserOnboardingPage;
