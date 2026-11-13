import type { NextConfig } from "next";
const config: NextConfig = {
  images: {
    localPatterns: [
      { pathname: "/images/**", search: "" },
      { pathname: "/images/**", search: "?v=light" },
    ],
  },
};
export default config;
