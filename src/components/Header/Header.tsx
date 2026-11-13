"use client";
import Image from "next/image";
import logo from "../../../public/images/logobarbi.png";
import { useEffect,useState } from "react";
import { Menu,X } from "lucide-react";
import ContactLink from "../ui/ContactLink";
import s from "./Header.module.css";
const links=[["Início","inicio"],["Serviços","servicos"],["Resultados","resultados"],["Sobre","sobre"],["Localização","localizacao"]];
export default function Header(){const[open,setOpen]=useState(false);const[scrolled,setScrolled]=useState(false);useEffect(()=>{const scroll=()=>setScrolled(window.scrollY>30);scroll();window.addEventListener("scroll",scroll,{passive:true});return()=>window.removeEventListener("scroll",scroll)},[]);return <header className={`${s.header} ${scrolled?s.scrolled:""}`}><div className={`container ${s.inner}`}><a href="#inicio" className={s.brand} aria-label="Barbi Lava Car início"><Image src={logo} alt="Barbi Lava Car" className={s.logo} sizes="(max-width: 800px) 120px, 144px" priority/></a><button className={s.toggle} aria-expanded={open} aria-controls="navigation" aria-label={open?"Fechar menu":"Abrir menu"} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav id="navigation" aria-label="Principal" className={`${s.nav} ${open?s.open:""}`} onKeyDown={e=>{if(e.key==="Escape")setOpen(false)}}>{links.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{label}</a>)}<ContactLink small>Agendar lavagem</ContactLink></nav></div></header>}
