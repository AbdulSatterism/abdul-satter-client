"use server";

export const getAllProjects = async () => {
  const res = await fetch(`${process.env.BASE_API}/projects`, {
    cache: "force-cache",
  });

  return res.json();
};
