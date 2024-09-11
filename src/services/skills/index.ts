"use server";

export const getAllSkills = async () => {
  const res = await fetch("http://localhost:5000/api/skills");

  return res.json();
};
