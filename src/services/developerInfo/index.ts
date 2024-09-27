"use server";

import { envConfig } from "@/config/envConfig";

export const developerInfo = async () => {
  const res = await fetch(`${envConfig.base_url}/dev-info`, {
    cache: "force-cache",
    next: { revalidate: 3600 },
  });

  return res.json();
};
