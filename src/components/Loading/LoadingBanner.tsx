import Image from "next/image";

const LoadingBanner = () => {
  return (
    <div className="py-10 skeleton min-h-screen">
      {[...Array(1)].map((index) => (
        <div
          key={index}
          className="flex flex-col p-8 md:p-16  md:flex-row items-center justify-between mx-auto"
        >
          <div className="md:w-1/2 skeleton text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl font-bold skeleton mb-4"></h1>
            <h2 className="text-3xl skeleton  font-light mb-6"></h2>
            <p className="text-xl skeleton mb-6 justify-center"></p>

            <button className="btn px-4 skeleton"></button>
          </div>

          <div className="md:w-1/3 flex items-center justify-center ">
            <Image
              src=""
              alt=""
              className="w-52 h-52 md:w-64 md:h-64 skeleton rounded-full object-cover border-2"
              width={208}
              height={208}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingBanner;
