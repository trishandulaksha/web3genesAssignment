import React from "react";
import InputFieldUnit from "../../Component/InputFieldUnit";

function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="border border-blue-600 w-3/4  sm:w-2/5 border-t-[20px] p-4 lg:p-14 md:p-6 sm:p-5 shadow-lg">
        {/* Header tags */}

        <div className="w-full">
          <div className=" text-center font-sans text-gray-600 mb-8 ">
            <h1 className="font-bold text-3xl ">Login</h1>

            <p className="mt-1 font-sans ">
              Lorem ipsum dolor sit amet consectetur.Risus commodo faucibus
              pellentesque habitan.Tincidunt.
            </p>
          </div>

          {/* Form componenet */}
          <div className="  pb-6">
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
                      className="bg-blue-600 w-full py-2 rounded-lg text-white cursor-pointer hover:bg-blue-400 hover:mt-1 transition duration-300 ease-in-out "
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
