# Migração A7 Sertanejo Universitário FM

## Implementação

Identidade e textos reescritos em todas as seções, incluindo seis artigos completos. Layout, componentes, paleta, parceiros e créditos preservados. Cards com acesso por teclado; modais com foco gerenciado, Escape e rolagem em telas pequenas. Preferência de movimento reduzido aplicada ao Framer Motion, CSS e rotação automática dos slides.

O iframe oficial é criado somente após interação explícita, em instância única. A API sem consumidores `api/now-playing.js` e o proxy correspondente do Vite foram removidos; não há requisições à porta antiga.

- Player: https://player.svrdedicado.org/player-topo-html5/7752/000000
- Aplicativo: https://player.svrdedicado.org/player-app-multi-plataforma/7752
- Canônica: https://www.a7sertanejouniversitariofm.com/

Title, description, Open Graph, Twitter Cards e JSON-LD atualizados. Endereço, coordenadas, telefone e redes sociais não confirmados foram retirados. Nome do pacote e raiz do package-lock atualizados sem alterações de dependências.

## Imagens

16 fotografias ilustrativas criadas com a ferramenta integrada imagegen, sem representar artistas, eventos ou instalações oficiais da rádio. Arquivos locais WebP, qualidade 82; hero em 1920 × 1080, demais imagens em 1200 × 900, enquadradas centralmente nos componentes. OG editorial provisória derivada de hero_01, sem texto ou marca, em 1200 × 630, qualidade 85; assunto essencial visível no recorte quadrado central.

- `src/assets/hero_01.webp` até `hero_06.webp`: shows, violão, público, dupla e festival.
- `src/assets/content_01.webp` até `content_06.webp`: seis temas editoriais.
- `src/assets/about_studio.webp`: estúdio moderno ilustrativo.
- `src/assets/momento_descansa.webp`: descanso com fones.
- `src/assets/momento_estrada2.webp`: viagem por paisagem brasileira.
- `src/assets/momento_festa.webp`: encontro com música entre amigos.
- `public/og-image.webp`: composição editorial provisória.

Os prompts e a origem individual estão em `image-generation.json`.

## Pendências manuais autorizadas

- Substituir `public/images/logo-texas-brasil.png`, preservado com suas referências.
- Substituir `src/assets/app-print.webp`, preservado no telefone 3D.
- Fornecer favicon oficial para substituir `public/favicon.ico`.
- Fornecer arte oficial de compartilhamento quando disponível; a OG provisória já está adaptada.
- Confirmar Instagram e WhatsApp oficiais. Não há links antigos renderizados. InstagramSection permanece configurável e não renderizada na Home.
- Conferir auditivamente a transmissão e testar instalação do aplicativo em dispositivos reais; a revisão automatizada não comprova áudio ou instalação.

## Auditoria de identidade

As ocorrências restantes de `texas` no código são tokens/classes CSS internos da paleta preservada e o caminho do logo cuja preservação foi solicitada. Os binários de logo, aplicativo e favicon são as exceções autorizadas. Nenhum texto editorial, contato, domínio ou streaming da rádio anterior permanece em uso. Referências em documentação descrevem a migração e não são exibidas ao visitante.

O lockfile npm foi atualizado apenas nos dois campos de nome. O lockfile binário legado do Bun permanece intacto, inclusive seu identificador técnico antigo de template; não há mudança de resolução de pacotes. Os dois arquivos pnpm não rastreados que já existiam foram preservados fora do commit.

## Validação

Dependências existentes utilizadas; nenhuma instalação ou atualização.

- `tsc --noEmit`: aprovado.
- `eslint .`: zero erros; seis avisos existentes de Fast Refresh em componentes compartilhados de UI.
- `vite build` (script `npm run build`): aprovado.
- `git diff --check`: aprovado.
- Navegador Edge headless/Playwright: Home, seis cards, abertura e fechamento do modal por Escape, instância única do iframe após clique, menu mobile e ausência de overflow horizontal em 390 px aprovados.

Os executáveis de TypeScript, ESLint e Vite foram chamados diretamente com o Node do runtime do ambiente, equivalentes aos scripts do package.json. O workflow foi apenas inspecionado: destino `dougdeva7/a7sertanejouniversitario`, sem alterações, credenciais acessadas ou sincronização manual.

## Git

Branch: `feat/migracao-texas-sertanejo-universitario`. Alterações destinadas a commit local. Sem push, merge ou modificação do repositório de origem.

Na revisão final, o iframe oficial respondeu HTTP 200, o slideshow permaneceu estático com movimento reduzido e o console terminou sem erros. As URLs antigas da fonte Montserrat que retornavam 404 foram substituídas pelas referências oficiais atuais do Google Fonts; essa dependência externa permanece.
