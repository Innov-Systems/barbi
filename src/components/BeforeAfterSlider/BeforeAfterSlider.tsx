"use client";

import Image from "../ui/SafeImage";
import { ChevronsLeftRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import s from "./BeforeAfterSlider.module.css";

type Props = {
  before?: string;
  after?: string;
  priority?: boolean;
  demoLabel?: string;
};

export default function BeforeAfterSlider({
  before = "/images/hero-photo-before.webp",
  after = "/images/hero-photo-after.webp",
  priority = false,
  demoLabel = "IMAGENS GERADAS POR IA · DEMONSTRAÇÃO",
}: Props) {
  const [value, setValue] = useState(0);
  const [beforeLoaded, setBeforeLoaded] = useState(false);
  const [afterLoaded, setAfterLoaded] = useState(false);
  const interrupted = useRef(false);

  useEffect(() => {
    if (!beforeLoaded || !afterLoaded || interrupted.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setValue(54));
      return () => cancelAnimationFrame(id);
    }
    let frame: number;
    const start = performance.now() + 650;
    const tick = (time: number) => {
      if (interrupted.current) return;
      const t = Math.max(0, Math.min(1, (time - start) / 2400));
      setValue(54 * (1 - Math.pow(1 - t, 3)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [beforeLoaded, afterLoaded]);

  return (
    <div className={s.slider}>
      <Image className={s.photo} src={before} alt="Mesmo veículo antes da limpeza, com poeira e respingos de lama" fill priority={priority} sizes="(max-width: 800px) 100vw, 1240px" onLoad={() => setBeforeLoaded(true)} />
      <div className={s.reveal} style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
        <Image className={s.photo} src={after} alt="Mesmo veículo limpo, com pintura e rodas brilhantes, no mesmo enquadramento" fill priority={priority} sizes="(max-width: 800px) 100vw, 1240px" onLoad={() => setAfterLoaded(true)} />
      </div>
      <span className={`${s.label} ${s.after}`}>DEPOIS</span>
      <span className={`${s.label} ${s.before}`}>ANTES</span>
      <div className={s.line} style={{ left: `${value}%` }}>
        <span><ChevronsLeftRight size={21} /></span>
      </div>
      <input
        className={s.control}
        type="range"
        min="0"
        max="100"
        value={value}
        aria-label="Comparar antes e depois da lavagem"
        aria-valuetext={`${Math.round(value)}% da imagem limpa revelada`}
        onPointerDown={() => { interrupted.current = true; }}
        onKeyDown={() => { interrupted.current = true; }}
        onChange={e => { interrupted.current = true; setValue(Number(e.target.value)); }}
      />
      <span className={s.hint}>ARRASTE PARA COMPARAR</span>
      {demoLabel && <span className={s.demo}>{demoLabel}</span>}
    </div>
  );
}
