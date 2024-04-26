import React from "react";
import InputFieldUnit from "../../Component/InputFieldUnit";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="border border-blue-600 w-3/4  sm:w-2/5 border-t-[20px] p-4 lg:p-14 md:p-6 sm:p-5 shadow-lg">
        {/* Header tags */}

        <div className="w-full">
          <div className="mb-8 font-sans text-center text-gray-600 ">
            <h1 className="text-3xl font-bold ">Login</h1>

            <p className="mt-1 font-sans ">
              Lorem ipsum dolor sit amet consectetur.Risus commodo faucibus
              pellentesque habitan.Tincidunt.
            </p>
          </div>

          {/* Form componenet */}
          <div className="pb-6 ">
            <div className="">
              <form action="">
                <InputFieldUnit type="text" placeholder="Email" />
                <InputFieldUnit type="password" placeholder="Password" />
                <p className="text-right">Forget Password</p>

                <div className="mt-7 ">
                  <div className="h-8">
                    <input
                      type="button"
                      value="Login"
                      className="w-full py-2 text-white transition duration-300 ease-in-out bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-400 hover:mt-1 "
                      onClick={() => navigate("adminpanel")}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
