import React from "react";
import web3geneslogo from "../../assets/images/web3genes_logo.webp";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function AdminPage() {
  return (
    <div>
      <div>
        <header className="bg-blue-700 ">
          <nav className="flex items-center justify-between px-20 py-2">
            <div>
              <img src={web3geneslogo} alt="" className="w-24 h-12 p-2 " />
            </div>
            <div className="flex items-center mr-8">
              <div className="mr-12">
                <ul className="flex ">
                  <li className="mr-8 text-white cursor-pointer">
                    User Onboarding
                  </li>
                  <li className="mr-8 text-white cursor-pointer">User List</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center justify-center p-1 bg-white border rounded-md">
                  <div>
                    <SearchOutlinedIcon className="text-gray-300 " />
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-64 pl-1 outline-none"
                  />
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default AdminPage;
