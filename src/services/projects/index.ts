"use server";

export const getAllProjects = async () => {
  const res = await fetch(`${process.env.BASE_API}/projects`, {
    next: { revalidate: 60 },
  });
  // export const getAllProjects = async () => {
  //   const res = await fetch(`${process.env.BASE_API}/projects`, {
  //     next: { revalidate: 60 },
  //   });

  return res.json();
};
