import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#01051b] text-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-orange-500">404</h1>

        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-400 mb-8 text-lg md:text-xl">
          The page you are looking for might have been removed, <br />
          had its name changed, or is temporarily unavailable.
        </p>

        <Link href="/">
          <button className="btn px-6 py-3 bg-gradient-to-r from-orange-500 to-blue-950 hover:bg-blue-500 rounded-md shadow-lg text-white transition duration-300 ease-in-out">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
