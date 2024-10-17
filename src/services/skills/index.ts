"use server";

import { envConfig } from "@/config/envConfig";

export const getAllSkills = async () => {
  const res = await fetch(`${envConfig.base_url}/skills`, {
    next: { revalidate: 60 },
  });

  return res.json();
};
