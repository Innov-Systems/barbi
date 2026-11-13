import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
const inter = Inter({subsets:["latin"],variable:"--font-inter"});
const sora = Sora({subsets:["latin"],variable:"--font-sora"});
export const metadata: Metadata = {title:"Barbi Lava Car | Cuidado em cada detalhe",description:"Seu carro merece voltar a brilhar. Conheça o Barbi Lava Car e consulte os cuidados disponíveis para seu veículo.",openGraph:{title:"Barbi Lava Car",description:"Mais do que lavar. É cuidar.",locale:"pt_BR",type:"website"}};
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body className={`${inter.variable} ${sora.variable}`}><a href="#conteudo" className="skip">Pular para o conteúdo</a>{children}</body></html>}
