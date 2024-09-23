import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="p-20  border-t-2 border-gray-400 text-white bg-[#090307] footer footer-center">
      <div>
        <p className="font-bold">
          MD. Abdul Satter <br />
          Full stack web developer(MERN)
        </p>
        <p>Copyright ©{date} -All right by abdul Satter</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://github.com/AbdulSatterism">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <FaGithub />
            </svg>
          </Link>

          <Link href="https://www.linkedin.com/in/md-abdul-satter-ba10aa254/">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <FaLinkedinIn />
            </svg>
          </Link>
          <Link href="https://web.facebook.com/?stype=lo&jlou=Afc0A9CP8qAxqgOThyj6d8QWFE-o7JvxX4qhawmwPy_1wK5znn9jddW1rMsjChA8B9l_uLAQqMMvbj3-PaNEBTCsmJaqJsk6KZH7zh0ctn124A&smuh=63166&lh=Ac-yzUCTom9RIfuTj9Y">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <FaFacebookF />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
