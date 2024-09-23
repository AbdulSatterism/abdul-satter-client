"use server";

import { envConfig } from "@/config/envConfig";

export const getAllSkills = async () => {
  const res = await fetch(`${envConfig.base_url}/skills`, {
    cache: "force-cache",
  });

  return res.json();
};
