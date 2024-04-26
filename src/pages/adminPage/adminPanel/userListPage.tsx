import React from "react";

function UserListPage() {
  return (
    <>
      <div>
        <div>
          <h1>User List</h1>
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </div>
        {/* User details table */}
        <div>
          <table className="text-center ">
            <tr className="p-4 bg-slate-300">
              <th className="p-4 mx-4">First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Contact Number</th>
              <th>Email</th>
            </tr>
            <tr className="border-b-2">
              <td>Sandaru</td>
              <td>Sandaru</td>
              <td>Sandaru</td>
              <td>Sandaru</td>
              <td>Sandaru</td>
              <td>Sandaru</td>
            </tr>
            <tr className="border-b-2">
              <td>Sandaru</td>
              <td>Sandaru</td>
              <td>Sandaru</td>
              <td>Sandaru</td>
              <td>Sandaru</td>
              <td>Sandaru</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserListPage;
