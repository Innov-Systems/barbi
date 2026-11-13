import { ArrowUpRight, MessageCircle } from "lucide-react";
import { bookingMessage } from "@/config/business";
import { whatsappLink } from "@/lib/whatsapp";
import s from "./ContactLink.module.css";
export default function ContactLink({children="Agendar minha lavagem",message=bookingMessage,small=false}:{children?:React.ReactNode;message?:string;small?:boolean}){const href=whatsappLink(message);return <a className={`${s.button} ${small?s.small:""}`} href={href??"#contato"} target={href?"_blank":undefined} rel={href?"noopener noreferrer":undefined}><MessageCircle size={small?16:19}/><span>{children}</span><ArrowUpRight size={17}/></a>}
