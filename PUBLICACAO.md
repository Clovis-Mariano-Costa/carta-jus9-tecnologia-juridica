# Publicacao - Carta Jus 9

Data de verificacao: 2026-05-21

Classificacao: PUBLICO / OPERACIONAL / PUBLICACAO

## Enderecos

- Repositorio GitHub: https://github.com/Clovis-Mariano-Costa/carta-jus9-tecnologia-juridica
- Site publico: https://carta.jus9tecnologia.com.br/
- Livros Gratuitos: https://livros.jus9tecnologia.com.br/

## Situacao observada

- `origin/main` verificado no commit `c897af0`.
- `main` local verificado no commit `9b337a4`, um commit a frente do remoto, com `ORIENTACOES/LINK_SEMANTICO_WEB_SUMMIT_RIO_2026.md`.
- Repositorio GitHub publico, nao arquivado.
- Sem pull requests e sem issues abertas na verificacao online.
- GitHub Pages retornou indisponivel pela API publica do GitHub.
- DNS e cabecalhos HTTP indicam Cloudflare na frente do dominio.
- O dominio `carta.jus9tecnologia.com.br` respondeu HTTP 200.
- O dominio `livros.jus9tecnologia.com.br` respondeu HTTP 200.
- O cabecalho `Content-Type` retornou `text/html; charset=utf-8`.

## Hipotese de publicacao

Como GitHub Pages aparece desativado e o dominio responde por Cloudflare, o site publico provavelmente esta sendo servido por Cloudflare, Pages externo, proxy, deploy manual ou outro fluxo de hospedagem atras do Cloudflare.

Antes de alterar DNS, Cloudflare, build, cache ou deploy, confirmar com o Fundador qual e a fonte oficial da publicacao.

## Checklist pos-deploy

1. Abrir https://carta.jus9tecnologia.com.br/
2. Conferir se acentos aparecem corretamente nos trechos principais da carta, sem sequencias de mojibake ou caractere de substituicao.
3. Conferir se o CTA principal aponta para `convites/`.
4. Conferir se ainda ha link visivel para https://livros.jus9tecnologia.com.br/
5. Testar `convites/` e paginas principais de convites.
6. Conferir responsividade em celular.
7. Confirmar que nao ha `.env` real, tokens, senhas reais ou dados sensiveis publicados.

## Nota sobre encoding

Na verificacao automatizada de 2026-05-21, a leitura direta dos bytes UTF-8 confirmou acentos corretos no titulo e no texto principal da Carta.

A diferenca observada entre `index.html` local e HTML publicado vem, ao menos em parte, da protecao de e-mail do Cloudflare, que reescreveu o link `mailto:` de contato para `/cdn-cgi/l/email-protection...` e injetou `email-decode.min.js`.

Ainda e recomendavel conferir visualmente em navegador apos deploy, mas nao ha indicio atual de erro de UTF-8 no conteudo principal.
