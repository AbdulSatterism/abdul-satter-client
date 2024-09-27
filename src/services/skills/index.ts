"use server";

import { envConfig } from "@/config/envConfig";

export const getAllSkills = async () => {
  const res = await fetch(`${envConfig.base_url}/skills`, {
    cache: "force-cache",
    next: { revalidate: 3600 },
  });

  return res.json();
};
