import Image from "next/image";
import Link from "next/link";

const LoadingProject = () => {
  return (
    <div className="p-6 skeleton">
      <h1 className=" mt-5 text-3xl skeleton font-bold  text-end"></h1>

      <div className="container skeleton mx-auto my-10">
        {[...Array(1)].map((i) => (
          <div
            key={i}
            className="hero-content skeleton flex-col lg:flex-row-reverse"
          >
            <Image
              src=""
              className=" rounded-lg skeleton shadow-2xl object-cover"
              width={500}
              height={500}
              alt=""
            />
            <div>
              <h1 className="text-5xl skeleton font-bold"></h1>
              <div className="justify-center skeleton items-center ">
                <p className="py-6">
                  <span className="font-bold skeleton text-lg"></span>
                </p>
                <p className="py-6">
                  <span className="font-bold skeleton text-lg"></span>
                </p>
              </div>

              <div className="my-2 skeleton">
                <span className="font-bold text-lg skeleton"></span>
                {[...Array(10)].map((i) => (
                  <span
                    key={i}
                    className="items-center skeleton ml-2 font-semibold font-serif"
                  ></span>
                ))}
              </div>

              <div className="text-end font-bold skeleton">
                <Link className="skeleton mx-2 " href=""></Link>
                <Link className="skeleton mx-2 " href=""></Link>
                <Link className="skeleton mx-2 " href=""></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingProject;
