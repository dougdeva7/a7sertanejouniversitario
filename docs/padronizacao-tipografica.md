# Padronização tipográfica A7

## Auditoria e aplicação

Projeto React/Vite com Tailwind CSS v4, configurado em `src/styles.css` via `@theme inline`, sem configuração Tailwind separada. Antes desta alteração, Montserrat era utilizada no corpo e nos títulos, com oito declarações remotas TTF. O subtítulo do Hero utilizava a família sans padrão do Tailwind. Header e rodapé apresentam o nome da rádio dentro do logotipo oficial em WebP; as imagens foram preservadas.

- **Arimo Bold 700:** título principal do Hero, nome da rádio no título do StreamingPlayer e no destaque de BenefitsSection, chamadas principais de AboutSection e AppDownload. InstagramSection, atualmente fora da árvore de renderização, também recebeu Arimo no título com o nome da rádio.
- **Lato Bold 700:** títulos de ContentCards, seus cards e modais; MomentsGrid e seus cards; BenefitsSection e seus cards; subtítulo “O som da galera” do Hero; slogan e título de parceiros no Footer.
- **Montserrat preservada:** parágrafos, descrições, menus, botões, informações auxiliares, nomes das plataformas e componentes funcionais. Menções completas à rádio dentro de textos corridos utilizam Arimo Regular 400, herdando tamanho, peso, cor e espaçamento do parágrafo. O componente RadioName aplica somente a família ao nome exato, inclusive nos textos dinâmicos dos modais e no copyright. O conteúdo do iframe permanece sob controle do provedor.

As novas famílias têm utilitários explícitos `font-headline` e `font-editorial`, registrados no tema Tailwind v4. `font-body` e `font-display` continuam Montserrat, evitando alterar controles que já utilizam essas classes. Os destaques novos usam 700 real, sem solicitar 800/900 nem sintetizar o peso das novas fontes. Tamanhos, espaçamentos, grid e estrutura dos componentes foram preservados.

## Hospedagem e carregamento

| Arquivo em public/fonts | Tamanho | Declaração |
| --- | ---: | --- |
| arimo-regular.woff2 | 11.456 bytes | normal 400, font-display: block |
| arimo-bold.woff2 | 11.484 bytes | normal 700, font-display: block |
| lato-bold.woff2 | 23.040 bytes | normal 700, font-display: swap |
| montserrat-variable.woff2 | 37.956 bytes | normal 300–900, font-display: swap |
| montserrat-italic.woff2 | 19.260 bytes | italic 400, font-display: swap |

Arimo utiliza um único preload em `index.html`, com o mesmo URL absoluto usado em CSS, tipo font/woff2 e crossorigin. A Montserrat existente foi transferida para WOFF2 local, consolidando os sete pesos normais num arquivo variável e preservando a variante itálica 400. As três licenças OFL completas e a procedência oficial dos arquivos ficam junto das fontes em `public/fonts/` e são copiadas para `dist/fonts/` pelo build.

Não foi adicionado CSS remoto, CDN em tempo de execução, dependência de pacote ou arquivo proprietário. O bloqueio inicial da Arimo reduz a exibição temporária do fallback; em falhas de rede, o comportamento de fallback continua sujeito às regras do navegador.

## Validação

- TypeScript: aprovado.
- ESLint: aprovado, sem erros; seis avisos preexistentes de react-refresh nos componentes compartilhados.
- Build de produção: aprovado, incluindo fontes e licenças em dist/fonts.
- Build servido localmente e verificado em Edge/Chromium nas larguras 375, 390, 768, 1024 e 1440 px, incluindo contextos de viewport móvel. Não representa execução em aparelhos físicos Android/iOS ou em Safari.
- Confirmadas via CSS.getPlatformFontsForNode as fontes reais Arimo-Bold no título do Hero e no nome da rádio, Lato-Bold nos títulos secundários e no modal, e Montserrat nos parágrafos e botões. Não apenas a família declarada no CSS.
- Na validação inicial, em cada contexto novo, somente três solicitações de fontes da página: Arimo Bold, Lato e Montserrat normal, todas locais, sem duplicação, erros 404 ou falhas. O arquivo itálico não foi solicitado por não haver uso na página. Recursos internos do iframe externo são independentes das fontes do site.
- Sem erros JavaScript, títulos com overflow horizontal ou rolagem horizontal nas cinco larguras. Capturas de página e modal utilizadas na inspeção visual.
- Logotipos, fotos, textos editoriais, SEO, navegação, URL e carregamento imediato do player preservados. A única inclusão no head foi o preload da Arimo.

Sem merge nem push nesta etapa.


## Complemento: nome da rádio em todos os textos

A pedido do cliente, todas as menções visíveis a “A7 Sertanejo Universitário FM” usam Arimo. Foi adicionado arimo-regular.woff2 oficial, peso 400 real, para manter os parágrafos e o rodapé com o peso original. Os títulos permanecem 700. Textos, logotipos e atributos de acessibilidade não foram reescritos. A fonte regular é carregada pelo CSS local quando utilizada, sem outro preload.

Complemento validado nas cinco larguras: cinco menções na página e as menções nos dois modais usam Arimo real. Tamanho e peso computados coincidem com os do entorno. Quatro fontes locais solicitadas, sem duplicações, erros ou overflow. TypeScript, lint e build aprovados (seis avisos preexistentes no lint).
