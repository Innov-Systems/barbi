"use client";
import Image, {type ImageProps} from "next/image";
import {useState} from "react";
export default function SafeImage(props:ImageProps){const[failed,setFailed]=useState(false);return <Image {...props} src={failed?"/images/image-unavailable.svg":props.src} alt={failed?`Imagem indisponível: ${props.alt}`:props.alt} onError={()=>setFailed(true)}/>}
