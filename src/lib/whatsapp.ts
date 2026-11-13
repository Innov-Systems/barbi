import { business } from "@/config/business";
export function whatsappLink(message: string) {
 const number = business.whatsapp.replace(/\D/g, "");
 return /^\d{10,15}$/.test(number) ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : null;
}
