import Link from "next/link";
import logo from "../../assets/logo.png";
import Image from "next/image";
const Navbar = () => {
  const navItems = (
    <>
      <li className="font-semibold text-[16px] text-white  items hover:text-orange-500 ">
        <Link href="/">Home</Link>
      </li>
      <li className="font-semibold text-[16px] text-white  items hover:text-orange-500 ">
        <Link href="/projects">Project</Link>
      </li>
      <li className="font-semibold text-[16px] text-white  items hover:text-orange-500 ">
        <Link href="/skills">Skill</Link>
      </li>
      <li className="font-semibold text-[16px] text-white  items hover:text-orange-500 ">
        <Link href="#">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#030c3c] border-b-2 border-gray-600">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-white bg-[#030c3c] dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <div>
          <Image
            src={logo}
            alt="logo"
            className="w-20 h-20 shadow-lg bg-[#030c3c]"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-white menu-horizontal px-1">{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
