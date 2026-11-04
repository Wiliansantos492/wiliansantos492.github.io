// ============================================================
//  CONFIGURAÇÃO — preencha os dois valores abaixo
// ============================================================
//
//  Como obter (passo a passo completo no README da pasta):
//
//  1) BOT_TOKEN:
//     - No Telegram, fale com @BotFather
//     - Envie /newbot e siga as instruções
//     - Ele devolve um token parecido com: 123456789:AAE...xyz
//     - Cole esse token abaixo.
//
//  2) CHAT_ID (pra onde as fotos vão — o SEU Telegram):
//     - Abra uma conversa com o bot que você criou e mande "oi"
//     - No navegador, abra:
//       https://api.telegram.org/bot<SEU_TOKEN>/getUpdates
//     - Procure por  "chat":{"id":123456789  — esse número é o seu CHAT_ID.
//     - Cole abaixo (pode ser negativo se for um grupo).
//
//  ⚠️  Atenção: este é um site PÚBLICO. O token fica visível pra quem
//      olhar o código. Por isso:
//        - Use um bot DEDICADO só pra isso.
//        - Se algo parecer errado, fale /revoke com o @BotFather pra
//          gerar um token novo.
// ============================================================

window.CONFIG = {
  BOT_TOKEN: "COLE_SEU_TOKEN_AQUI",
  CHAT_ID:   "COLE_SEU_CHAT_ID_AQUI",

  // Nome que aparece na mensagem (opcional). Ex.: "João"
  NOME: ""
};
