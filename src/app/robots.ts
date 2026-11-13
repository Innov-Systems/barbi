import type { MetadataRoute } from "next";
import { business } from "@/config/business";
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:"*",allow:"/"},...(business.domain?{sitemap:`${business.domain.replace(/\/$/,"")}/sitemap.xml`}:{})}}
