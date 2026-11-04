// ============================================================
//  CONFIGURAÇÃO — cole abaixo o endereço de entrega do Discord
// ============================================================
//
//  O que é o WEBHOOK_URL?
//  É um "endereço de entrega" do Discord. Tudo que a página mandar
//  (foto + localização + horário) chega no seu canal do Discord.
//
//  Como obter (passo a passo completo no README da pasta):
//
//  1) Crie um servidor no Discord (de graça, só seu).
//  2) No canal, abra as configurações (engrenagem) -> Integrações
//     -> Webhooks -> Novo Webhook -> Copiar URL do Webhook.
//  3) Cole essa URL abaixo. Ela se parece com:
//     https://discord.com/api/webhooks/123456789/AbCd...xyz
//
//  ⚠️  Atenção: este é um site PÚBLICO. Essa URL fica visível pra quem
//      olhar o código. Se algo parecer errado, é só apagar o webhook
//      no Discord e criar outro (a URL antiga para de funcionar).
// ============================================================

window.CONFIG = {
  WEBHOOK_URL: "COLE_SEU_WEBHOOK_AQUI",

  // Nome que aparece na mensagem (opcional). Ex.: "João"
  NOME: ""
};
