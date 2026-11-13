export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category?: string;
  beforeSrc?: string;
};

// Fotos reais fornecidas pelo proprietário. Originais preservados em servicos-reais.
const folder = "/images/servicos-reais/otimizadas";
export const gallery: GalleryItem[] = [
  { id: "picape-cinza", src: `${folder}/picape-cinza.webp`, alt: "Picape cinza fotografada de lado após atendimento no Barbi Lava Car", title: "Cuidado em toda a carroceria", category: "Por fora" },
  { id: "sedan-preto", src: `${folder}/sedan-preto.webp`, alt: "Sedã preto com a carroceria refletindo a luz do sol no pátio do lava car", title: "Brilho que se vê de perto", category: "Carroceria" },
  { id: "interior", src: `${folder}/interior-toyota.webp`, alt: "Painel, volante, console e banco dianteiro do interior de um Toyota", title: "Atenção também por dentro", category: "Interior" },
  { id: "hatch-preto", src: `${folder}/hatch-preto.webp`, alt: "Hatch preto fotografado de lado, com rodas e pintura em destaque", title: "Os detalhes fazem a diferença", category: "Acabamento" },
  { id: "moto", src: `${folder}/moto-branca.webp`, alt: "Moto branca e preta fotografada de lado após atendimento", title: "Duas rodas, o mesmo cuidado", category: "Motos" },
  { id: "picape-preta", src: `${folder}/picape-preta.webp`, alt: "Picape preta com reflexos na pintura sob o céu azul", title: "Um resultado para apreciar", category: "Por fora" },
];
