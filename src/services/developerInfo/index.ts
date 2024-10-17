"use server";

import { envConfig } from "@/config/envConfig";

export const developerInfo = async () => {
  const res = await fetch(`${envConfig.base_url}/dev-info`, {
    next: { revalidate: 60 },
  });

  return res.json();
};
