import Image from "next/image";

const LoadingSkill = () => {
  return (
    <div className="p-6 skeleton">
      <h1 className="skeleton mt-5 text-3xl font-bold uppercase text-end"></h1>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-y-2 gap-x-0 mx-auto my-10">
        {[...Array(12)].map((index) => (
          <div
            key={index}
            className="card skeleton image-full items-center w-48 h-48 rounded-full mx-auto "
          >
            <Image
              className="skeleton object-cover transform rounded-full w-44 h-44 bg-white mx-auto text-center shadow-2xl "
              src=""
              alt=""
              width={230}
              height={230}
            />

            <div className="flex skeleton z-10 text-start">
              <h2 className="card-title shadow-xl skeleton rounded-sm font-extrabold"></h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkill;
