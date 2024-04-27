import React from "react";

function UserListPage() {
  return (
    <>
      <div className="flex h-screen ">
        <div className="fixed top-0 left-0 w-full h-full "></div>
        <div className="relative z-10 w-full m-8 bg-white shadow-2xl shadow-gray-500">
          <div className="items-center justify-center mt-6 mx-11">
            <h1 className="text-2xl font-bold text-gray-800">User List</h1>
            <p>Lorem ipsum dolor sit amet consectetur </p>
            {/* User details table */}
            <div className="mt-8">
              <table className="w-full text-center ">
                <tr className="p-4 bg-slate-300">
                  <th className="p-4 mx-4">First Name</th>
                  <th>Last Name</th>
                  <th>Date of Birth</th>
                  <th>Gender</th>
                  <th>Contact Number</th>
                  <th>Email</th>
                </tr>
                <tr className="border-b-2 ">
                  <td className="p-4 mx-4">Sandaru</td>
                  <td>Sandaru</td>
                  <td>Sandaru</td>
                  <td>Sandaru</td>
                  <td>Sandaru</td>
                  <td>Sandaru</td>
                </tr>
                <tr className="border-b-2">
                  <td className="p-4 mx-4">Sandaru</td>
                  <td>Sandaru</td>
                  <td>Sandaru</td>
                  <td>Sandaru</td>
                  <td>Sandaru</td>
                  <td>Sandaru</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserListPage;
