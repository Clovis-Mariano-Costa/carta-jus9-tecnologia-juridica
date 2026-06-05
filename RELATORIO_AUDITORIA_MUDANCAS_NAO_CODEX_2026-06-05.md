# Relatorio de auditoria - mudancas nao Codex

Data: 2026-06-05
Repositorio: carta-jus9-tecnologia-juridica

## Arquivos revisados

- `instalar-app.html`
- `nascimento-charlie-echo.html`

## Diagnostico

As mudancas encontradas adicionavam favicon nas paginas. A intencao e adequada e foi preservada.

Foi identificado problema de codificacao nos dois arquivos: acentos e sinais como `·`, `©` e `—` apareceram como sequencias quebradas, por exemplo `JurÃ­dica`, `Â·` e `Â©`. Tambem havia BOM invisivel no inicio dos arquivos.

## Acao executada

- Favicon preservado.
- Codificacao textual corrigida para portugues legivel.
- BOM removido.
- Estrutura HTML de `nascimento-charlie-echo.html` foi expandida para leitura e manutencao mais segura.
- Links institucionais da pagina de nascimento foram padronizados para destinos atuais: Equipe no subdominio oficial, MVPs/Demos com ancora publica e Charlie Echo em `ia-profissional`.
- Conteudo simbolico-institucional foi mantido, sem alterar identidade, nascimento, governanca ou sentido da pagina.

## Status

Aprovado com saneamento tecnico.
