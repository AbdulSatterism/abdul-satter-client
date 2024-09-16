import Link from "next/link";
import { FaBars, FaHome, FaUsers } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { MdManageAccounts } from "react-icons/md";
import { SiSkillshare } from "react-icons/si";

const DashboardSidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  ">
        <label
          htmlFor="my-drawer-2"
          className="btn  btn-active btn-ghost drawer-button lg:hidden"
        >
          <FaBars></FaBars>{" "}
        </label>
        {/* Page content here */}
        {children}
      </div>
      <div className=" drawer-side lg:bg-[#04211c] text-white">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 bg-[#04211c] opacity-50 text-white  min-h-full text-xl">
          {/* Sidebar content here */}

          <li className="text-whit">
            <Link href="/dashboard">
              <FaHome></FaHome>Admin Home
            </Link>
          </li>
          <li className=" ">
            <Link href="/dashboard/users">
              <FaUsers></FaUsers>All Member
            </Link>
          </li>
          <li className=" ">
            <Link href="/dashboard/add-project">
              <GoProjectSymlink></GoProjectSymlink> Add Project
            </Link>{" "}
          </li>
          <li className=" ">
            <Link href="/dashboard/add-skill">
              {" "}
              <SiSkillshare></SiSkillshare>Add Skill{" "}
            </Link>
          </li>
          <li className=" ">
            <Link href="/dashboard/manage-project">
              <MdManageAccounts></MdManageAccounts>manage project{" "}
            </Link>
          </li>
          <li className=" ">
            <Link href="/dashboard/manage-skill">
              <MdManageAccounts></MdManageAccounts> manage skill{" "}
            </Link>
          </li>

          <div className="divider"></div>
          <li className="bg-fuchsia-200 rounded mb-2">
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DashboardSidebar;
