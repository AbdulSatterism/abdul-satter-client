"use server";

export const getAllProjects = async () => {
  const res = await fetch("http://localhost:5000/api/projects");

  return res.json();
};
