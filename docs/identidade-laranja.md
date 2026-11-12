# Identidade visual laranja — A7

## Cor extraída do logotipo

Cor principal: **#E88321** (RGB 232, 131, 33). A fonte da amostragem foi `public/images/logo-a7sertanejouniversitario.webp`, sem modificar o arquivo.

Método: amostragem dos pixels da palavra UNIVERSITÁRIO em uma faixa inclinada dentro da região x=29–236, y=128–183 da imagem de 256 × 256. Foram excluídos pixels de baixa saturação, tons fora do laranja e pixels escuros de contorno/sombra. Dos 2.327 pixels selecionados, a célula RGB quantizada predominante foi (232, 128, 32). A mediana dos 742 pixels no agrupamento próximo resultou em (232, 131, 33). O logotipo possui um gradiente; portanto, este é um representante da cor-base predominante, não a afirmação de uma tinta uniforme em todas as letras.

Variações tonais derivadas para a interface:

| Token | Cor | Uso |
| --- | --- | --- |
| brand | #E88321 | Marca, botões, ícones decorativos, equalizador, brilhos |
| brand-hover | #F39840 | Hover dos CTAs |
| brand-active | #CF6C10 | Active dos CTAs |
| brand-ink | #A84D00 | Texto sobre fundos claros, foco e navegação |
| brand-deep | #8F410E | Fundo do aplicativo e transições para tons escuros |
| brand-light | #FFB361 | Gradiente de destaque sobre fundos escuros |

## Alterações

- `src/styles.css`: tokens de marca integrados ao Tailwind v4; substituição do vermelho em secondary, ring, cores de gráfico, gradientes, sombras e keyframes; estados normal/hover/active/focus dos CTAs. O vermelho semântico de destructive foi preservado.
- `Header.tsx`: cores fixas vermelhas substituídas pelos tokens; botões com laranja e texto escuro de alto contraste.
- `HeroSlideshow.tsx`: título “O som da galera!” em Arimo Bold 700; subtítulo “Aqui o sertanejo não para” em Lato Bold, menor. Mantidos badge, descrição, CTA, fotografia, slideshow, efeitos e navegação. Quebra natural equilibrada, sem br inserido no título.
- `StreamingPlayer.tsx`: destaque laranja, badge e brilho atualizados; título continua explicitamente em Arimo Bold 700 local. Iframe, URL, carregamento inicial e integração preservados.
- `ContentCards.tsx`: títulos, efeitos e CTA dos modais atualizados; ícone de fechar mantém contraste no hover laranja.
- `AboutSection.tsx`: destaque de texto e brilho laranja, com variante clara sobre fundo escuro; CTA atualizado.
- `BenefitsSection.tsx`: gradiente do nome da rádio e ícones atualizados, preservando Arimo no nome e Lato no restante do título.
- `MomentsGrid.tsx`: destaque de título atualizado.
- `AppDownload.tsx`: fundo em laranja profundo para preservar contraste dos textos brancos e dos botões das plataformas. Imagem e links preservados.
- `Footer.tsx`: título Parceiros já existente passou a ter branco explícito, em Lato Bold 700, centralizado no mesmo contêiner. Sem duplicação nem alteração de ordem, links ou dimensões dos cinco parceiros.

Os utilitários `text-gradient-red` e `gradient-red-glow` foram substituídos por nomes de marca. Não há referências residuais à identidade vermelha nos estilos e componentes da interface; o vermelho funcional de erro permanece disponível. Não há outra página renderizada além da Home no App atual.

## Contraste

Texto dos CTAs #10151F sobre #E88321: **6,70:1**; hover: **8,16:1**; active: **5,05:1**. Gradiente de texto sobre branco: extremos **5,64:1** e **4,66:1**. Branco sobre fundo laranja profundo: **7,17:1**. Usar texto escuro nos CTAs evita o baixo contraste que o branco teria sobre o laranja original. Os títulos sobre fundos escuros usam uma variante clara do gradiente.

## Preservação e limites

Fotografias e logotipos não foram recoloridos ou substituídos. Arquivos de imagens, fontes, metadados/SEO, links do aplicativo, navegação, integração do player e workflow não foram modificados. Os ajustes do player abrangem somente elementos pertencentes ao projeto: título, badge, brilho, fotografia de fundo já existente e equalizador decorativo.

O iframe externo é independente e pode conter cores do provedor. Nenhuma tentativa de alterar seu conteúdo por CSS externo foi realizada. O teste em viewports móveis não equivale à execução em aparelhos físicos Android/iOS.

Sem merge nem push nesta etapa.

## Validações concluídas

- TypeScript, ESLint e build de produção aprovados. O lint apresenta apenas os seis avisos preexistentes de react-refresh nos componentes compartilhados.
- Build servido localmente e verificado no Chrome/Chromium em 375, 390, 768, 1024 e 1440 px. O Edge não iniciou corretamente no ambiente, então foi utilizado o Chrome instalado.
- Sem erros JavaScript, falhas de recursos ou overflow horizontal. Todos os títulos permanecem dentro da largura disponível.
- Varredura das cores computadas dos elementos do projeto não encontrou vermelho residual em texto, fundos, gradientes, bordas, sombras e contornos. Fotografias e o conteúdo interno do iframe foram excluídos dessa varredura.
- Confirmado via CSS.getPlatformFontsForNode o arquivo real Arimo-Bold, fonte personalizada e peso computado 700 no título do player nas cinco larguras.
- Confirmados os novos textos e a hierarquia do Hero, badge preservado e botão navegando até #player.
- Hover #F39840, active #CF6C10 e foco visível com contorno de 3 px verificados no CTA. Estado normal #E88321 com texto #10151F.
- Confirmados título Parceiros branco em Lato Bold e os cinco parceiros; seis cards e seus modais; menu móvel; links originais do aplicativo; iframe original presente desde o carregamento; alternância do slideshow com animações ativas.
- git diff --check aprovado; nenhuma alteração nos arquivos de imagens, fontes, SEO, configuração de deploy ou dependências.
