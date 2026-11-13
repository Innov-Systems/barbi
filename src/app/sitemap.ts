import type { MetadataRoute } from "next";
import { business } from "@/config/business";
export default function sitemap():MetadataRoute.Sitemap{return business.domain?[{url:business.domain,changeFrequency:"monthly",priority:1}]:[]}
