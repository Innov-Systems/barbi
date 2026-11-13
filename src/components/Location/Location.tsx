import { MapPin, Clock, Phone, ArrowUpRight, Navigation } from "lucide-react";
import { business } from "@/config/business";
import { whatsappLink } from "@/lib/whatsapp";
import s from "./Location.module.css";

export default function Location() {
  const address = [business.address, business.city, business.state].filter(Boolean).join(", ");
  const mapsUrl = business.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const contactUrl = whatsappLink("Olá! Gostaria de confirmar os horários de atendimento do Barbi Lava Car.");

  return (
    <section id="localizacao" className={s.section}>
      <div className={`container section ${s.grid}`}>
        <div>
          <div className="eyebrow">SEU PRÓXIMO DESTINO</div>
          <h2>VENHA CONHECER<br />O <span className="accent">BARBI LAVA CAR.</span></h2>
          <p className={s.intro}>Um novo brilho para o seu carro começa com uma visita.</p>
          <div className={s.info}>
            <MapPin aria-hidden="true" />
            <div>
              <h3>Onde estamos</h3>
              {address ? <address className={s.address}>{business.address}<br />{business.city} – {business.state}{business.postalCode && ` · CEP ${business.postalCode}`}</address> : <p>Endereço e cidade serão informados em breve.</p>}
            </div>
          </div>
          <div className={s.info}>
            <Clock aria-hidden="true" />
            <div>
              <h3>Horário de funcionamento</h3>
              <p>{business.openingHours || (contactUrl ? <a href={contactUrl} target="_blank" rel="noopener noreferrer">Consulte os horários pelo WhatsApp.</a> : "Horários de atendimento a confirmar.")}</p>
            </div>
          </div>
          <div className={s.info}>
            <Phone aria-hidden="true" />
            <div>
              <h3>Fale com a gente</h3>
              <p>{business.phone ? <a href={`tel:+55${business.phone.replace(/\D/g, "")}`}>{business.phone}</a> : "Telefone e WhatsApp em breve."}</p>
            </div>
          </div>
          {address && <a className={s.mapsLink} href={mapsUrl} target="_blank" rel="noopener noreferrer">ABRIR NO GOOGLE MAPS <ArrowUpRight size={17} /></a>}
        </div>
        <div className={s.map}>
          {address ? <iframe title={`Localização do Barbi Lava Car em ${business.city}`} src={business.mapsEmbedUrl || `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /> : <div className={s.mapContent}><div className={s.pin}><Navigation size={32} strokeWidth={1.2} /></div><h3>Estamos preparando sua rota.</h3><p>O mapa será disponibilizado assim que o endereço for confirmado.</p><span>LOCALIZAÇÃO EM BREVE</span></div>}
        </div>
      </div>
    </section>
  );
}
