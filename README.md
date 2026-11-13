# Barbi Lava Car

Landing page em português com Next.js App Router, TypeScript, CSS Modules, Sora/Inter via next/font e Lucide React. Sem banco de dados ou backend próprio.

## Executar

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Para validar e executar a versão de produção:

```bash
npm run lint
npm run build
npm start
```

Na Vercel, importe o repositório e selecione o preset Next.js. Não são necessárias variáveis de ambiente. O deploy não foi realizado nesta entrega.

## Dados reais e WhatsApp

Edite `src/config/business.ts`. Preencha `whatsapp` com DDI, DDD e número, apenas dígitos (o número precisa ter conta WhatsApp). O gerador de links fica em `src/lib/whatsapp.ts` e codifica cada mensagem, incluindo o serviço consultado.

Sem número válido, os CTAs levam à seção de contato com aviso explicativo, e o botão flutuante fica oculto. Nenhum número fictício é utilizado. `phone` é o telefone formatado para exibição. Configure também endereço, cidade, estado, horários, Instagram e crédito, se desejado.

Endereço e telefone atualizados conforme a ficha do Google Maps fornecida pelo proprietário em 13/11/2026: Rua José Pereira Pardinho, Sertaneja–PR, CEP 86340-000; (43) 99154-6955 (também presente no material de divulgação enviado). Não há número do imóvel ou horário informado no cadastro. O WhatsApp está ativo com esse contato. O mapa usa o ponto -23.0451754, -50.8176987 e carrega em iframe com lazy loading ao se aproximar da tela. O botão Google Maps abre a ficha exata por CID, configurada em `mapsUrl`; o iframe usa `mapsEmbedUrl`. Preencha `domain` com a URL de produção completa (HTTPS, sem barra final): o sitemap passa a listar essa URL e o robots passa a referenciá-lo. Até lá, o sitemap permanece vazio. Ajuste metadata/SEO local em `src/app/layout.tsx` quando houver informações reais; não há avaliações ou dados locais inventados.

## Serviços e diferenciais

Edite `src/config/services.ts` para confirmar, remover ou alterar os seis serviços sugeridos. Os ícones disponíveis são `car`, `wind`, `sparkles`, `shield`, `droplets` e `settings`. Os cards abrem consultas com o nome do serviço. A página indica que a disponibilidade deve ser confirmada. Valide também os textos institucionais e diferenciais com o proprietário.

## Hero e imagens

O hero utiliza `public/images/hero-photo-before.webp` e `hero-photo-after.webp`: imagens **fotorrealistas geradas por IA**, do mesmo hatch prata, com versões suja e limpa. São demonstrações visuais, não registros de serviços realizados. O aviso de IA permanece visível. O par foi gerado com a ferramenta integrada imagegen, editando a imagem limpa para preservar o enquadramento na versão suja. Os prompts estão em `docs/hero-image-prompts.md`.

Para usar fotos reais, substitua os arquivos por fotografias autorizadas do **mesmo veículo**, mantendo posição, escala, iluminação, enquadramento e dimensões idênticos (proporção atual 3:1). O comparador usa `object-fit: contain` para preservar o carro inteiro em qualquer tela. Remova a identificação demonstrativa somente ao usar fotos reais, passando `demoLabel=""` ao componente. As ilustrações SVG anteriores permanecem como fontes dos exemplos da galeria e da seção sobre.

O comparador reutilizável aceita `before`, `after` e `priority`. Revela a foto limpa uma única vez por montagem em 2,4 segundos, após carregar as duas imagens e aguardar 650 ms. O visitante pode interromper a animação; usa range nativo acessível (mouse, toque, setas, Home/End). Respeita movimento reduzido e mantém pan vertical para rolagem em dispositivos móveis.

`SafeImage` usa Next/Image e substitui imagens ausentes por um aviso local, mantendo as dimensões do layout. Imagens do hero têm prioridade; as demais usam lazy loading padrão.

## Galeria e sobre

Adicione fotos autorizadas em `public/images/gallery` e cadastre em `src/config/gallery.ts` com `id`, `src`, `alt`, `title` e `category`. O campo opcional `beforeSrc` ativa um comparador dentro do lightbox. O lightbox usa dialog nativo, com foco contido, Escape, setas, botões anterior/próximo e retorno do foco ao abrir/fechar.

A galeria e a seção sobre já utilizam fotos reais fornecidas pelo proprietário. Os originais ficam em `public/images/servicos-reais` e as versões WebP usadas no site em `public/images/servicos-reais/otimizadas`. A galeria contém seis registros; a seção sobre destaca o polimento do caminhão. A montagem vertical de duas fotos do caminhão foi preservada entre os originais, sem uso na página. O comparador do hero continua sendo uma demonstração gerada por IA, com identificação própria.

## Organização

- `src/app`: página, layout, metadata, robots, sitemap e favicon provisório.
- `src/components`: seções independentes com seus CSS Modules e componentes reutilizáveis.
- `src/config`: negócio, serviços e fotos.
- `src/lib`: gerador de links WhatsApp.
- `src/styles/variables.css`: cores e tokens.
- `public/images`: ilustrações e fallback locais.

## Pendências para publicação comercial

Horários e número do imóvel (se houver), confirmação dos serviços e textos, par de fotos reais autorizado para o comparador do hero (opcional; galeria e sobre já atualizados), redes sociais, domínio e logo oficial, se houver. A identidade tipográfica e o favicon são provisórios.

## Validação realizada

`npm run lint` e `npm run build` aprovados. Verificação em Chrome headless em 390, 768 e 1440 px: ausência de overflow horizontal, teclado no comparador, toque, preferência por movimento reduzido, lightbox (abrir, navegar e Escape), menu mobile, carregamento de imagens e ausência de links WhatsApp sem número. Dependências de produção sem vulnerabilidades conhecidas no `npm audit --omit=dev` executado nesta entrega.
