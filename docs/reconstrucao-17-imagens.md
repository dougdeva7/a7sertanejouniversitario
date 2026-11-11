# Reconstrução das 17 fotografias do mockup

## Fonte e método

Referência exclusiva: `Pacote visual sertanejo em clima de festa.png`, fornecida pelo proprietário, 1672 × 941 px. Foram identificadas e recortadas 17 fotografias; a ilustração do ZIP foi descartada. Não havia arquivo ZIP original disponível junto da imagem.

Cada recorte correspondente foi enviado diretamente à ferramenta integrada image_gen como alvo de edição, com instruções próprias de preservação de pessoas, expressões, roupas, objetos, cenário e luz. Nenhuma fotografia foi produzida apenas a partir de descrição textual ou a partir de uma referência de outra seção. As etiquetas sobrepostas foram removidas na reconstrução, recuperando a região encoberta a partir do entorno. Não foram usados os separadores, bordas ou a área gráfica do ZIP nos assets finais.

Os resultados foram comparados individualmente e em pranchas lado a lado com os recortes. Candidatos com estampas, acessórios e pessoas periféricas inferidas indevidamente foram corrigidos antes da seleção final. A conferência visual final preserva os personagens, as poses, as roupas observáveis, os objetos principais e a atmosfera das referências. A placa física ON AIR do estúdio permanece porque pertence à cena aprovada; não é uma etiqueta do mockup.

## Limites da reconstrução

As referências dos retratos têm aproximadamente 270 × 216–243 px, e as panorâmicas, aproximadamente 534–552 × 206–217 px. A ferramenta reconstrói detalhes plausíveis; a prancha não contém informação suficiente para recuperar de forma verificável poros, fios, tramas ou regiões encobertas e externas ao recorte original. Não se trata de recuperação forense nem de identidade pixel a pixel com originais de alta resolução inexistentes no material fornecido.

As edições nativas do hero têm 1672 × 941 px e foram exportadas para 1920 × 1080 com reamostragem de aproximadamente 15%, depois da reconstrução generativa. As demais resoluções nativas e de exportação estão registradas no JSON, por arquivo. Os resultados não são simples redimensionamentos dos pequenos recortes. Não foi aplicado oversharpening nem filtro cromático global. A revisão não encontrou resíduos de nomes de arquivo, bordas do mockup ou defeitos anatômicos evidentes nos resultados selecionados.

## Arquivos finais

Todos os 17 arquivos são locais, em WebP, qualidade 88 e compressão method 6, com dimensões verificadas e conteúdos binários distintos. As metas de exportação do briefing foram mantidas: hero 16:9, cards/estúdio/momentos 4:3, player 16:9. Total: 2850552 bytes.

| Arquivo em `src/assets/` | Exportação | Tamanho exato | KiB |
| --- | --- | ---: | ---: |
| `hero_01.webp` | 1920 × 1080 | 188660 bytes | 184.2 |
| `hero_02.webp` | 1920 × 1080 | 236882 bytes | 231.3 |
| `hero_03.webp` | 1920 × 1080 | 303904 bytes | 296.8 |
| `hero_04.webp` | 1920 × 1080 | 173364 bytes | 169.3 |
| `hero_05.webp` | 1920 × 1080 | 272680 bytes | 266.3 |
| `hero_06.webp` | 1920 × 1080 | 129648 bytes | 126.6 |
| `content_01.webp` | 1200 × 900 | 102418 bytes | 100.0 |
| `content_02.webp` | 1200 × 900 | 218292 bytes | 213.2 |
| `content_03.webp` | 1200 × 900 | 129536 bytes | 126.5 |
| `content_04.webp` | 1200 × 900 | 189238 bytes | 184.8 |
| `content_05.webp` | 1200 × 900 | 146948 bytes | 143.5 |
| `content_06.webp` | 1200 × 900 | 82538 bytes | 80.6 |
| `player_bg.webp` | 1600 × 900 | 115118 bytes | 112.4 |
| `about_studio.webp` | 1200 × 900 | 128892 bytes | 125.9 |
| `momento_descansa.webp` | 1200 × 900 | 159136 bytes | 155.4 |
| `momento_estrada2.webp` | 1200 × 900 | 79178 bytes | 77.3 |
| `momento_festa.webp` | 1200 × 900 | 194120 bytes | 189.6 |

## Integração e enquadramento

- Os seis arquivos `hero_01.webp` a `hero_06.webp` estão associados às seis posições do slideshow. As posições 3 e 4, antes inativas, foram reintegradas conforme o briefing atual.
- O player usa exclusivamente `src/assets/player_bg.webp`. O antigo `player_show.webp` foi removido após a troca do import. Iframe, URL, áudio, controles e carregamento com a página permanecem intactos.
- Os seis cards mantêm suas próprias fotografias e a associação da mesma foto ao respectivo modal. As dimensões reservadas foram atualizadas para 1200 × 900.
- Cards e Momentos exibem a imagem inteira quando a proporção da caixa é diferente da foto. O fundo utiliza o tom escuro já existente; isso evita cortar rostos dos grupos e elementos importantes. Alturas dos cards, grid, hover e interações foram preservados.
- As imagens dos modais usam 4:3 em vez da faixa horizontal de altura fixa anterior. O recorte integral evita cortar cabeças e instrumentos; o limite de altura e a rolagem do modal continuam disponíveis.
- No hero abaixo de 1280 px, a foto é enquadrada integralmente abaixo do cabeçalho, evitando o corte lateral de grupos no formato estreito. Em desktop amplo, mantém o preenchimento da área com object-cover. A estrutura, o título, os CTAs, o timer e as transições permanecem.
- As descrições alternativas das imagens do hero foram alinhadas às fotografias efetivamente fornecidas. Nenhum texto editorial visível foi reescrito.

Não foram alterados logotipo, favicon, imagem oficial do aplicativo, parceiros, navegação, streaming, SEO, workflow, dependências ou paleta global. Não houve merge ou push nesta etapa.

## Entrega e rastreabilidade

`docs/reconstrucao-17-imagens.json` registra os 17 nomes, dimensões das referências, dimensões nativas de reconstrução, dimensões finais, bytes, hashes SHA-256, identificadores dos arquivos gerados e prompts/revisões utilizados. As pranchas comparativas e o ZIP dos WebPs finais foram salvos como artefatos de entrega fora do código-fonte.

Arquivos de código ajustados apenas para integração/enquadramento: `HeroSlideshow.tsx`, `StreamingPlayer.tsx`, `ContentCards.tsx` e `MomentsGrid.tsx`.

## Validação final

- TypeScript, ESLint e build de produção concluídos com sucesso. O lint mantém seis avisos preexistentes de react-refresh em componentes compartilhados, sem erros.
- Navegador verificado em 320, 390, 768 e 1440 px: sem rolagem horizontal, erros de console ou falhas de carregamento.
- Confirmados os seis slides e sua alternância automática, os seis cards e modais, as 17 imagens distintas e suas dimensões finais.
- Iframe confirmado no carregamento inicial, com a integração original preservada e imagem exclusiva do player.
- Conferidos 26 trechos do briefing editorial anterior, links do aplicativo e JSON-LD. Sem alterações nos textos editoriais, SEO, logotipo, aplicativo ou workflow.
- Inspeção visual das fotografias individuais, das três pranchas comparativas e das capturas de página e modal. As imagens foram aprovadas para os componentes, com as limitações de reconstrução descritas acima.
- git diff --check concluído sem erros.