# Check-in da família

Página de **presença combinada**: ao abrir o link e tocar em *"Fazer check-in"*, o
aparelho — **com a permissão da pessoa** — tira uma foto da câmera frontal, pega a
localização e o horário, e envia tudo para o seu Telegram.

> Esta página é feita para uso **transparente e combinado** entre a família. O
> navegador sempre pede permissão de câmera e de localização; nada é feito escondido.

**Link que a pessoa usa:** `https://wiliansantos492.github.io/checkin/`

---

## Configuração (uma vez só)

### 1. Criar o bot do Telegram
1. No Telegram, abra uma conversa com **@BotFather**.
2. Envie `/newbot` e siga as instruções (escolha um nome e um usuário para o bot).
3. O BotFather devolve um **token**, algo como `123456789:AAE...xyz`.

### 2. Descobrir o seu chat_id (pra onde as fotos vão)
1. Abra uma conversa com o **bot que você acabou de criar** e mande qualquer mensagem (ex.: `oi`).
2. No navegador, acesse (trocando `SEU_TOKEN`):
   ```
   https://api.telegram.org/botSEU_TOKEN/getUpdates
   ```
3. Procure no resultado por algo como `"chat":{"id":123456789`. Esse número é o seu **chat_id**.

### 3. Preencher o `config.js`
Edite o arquivo [`config.js`](config.js) e cole os dois valores:
```js
window.CONFIG = {
  BOT_TOKEN: "123456789:AAE...xyz",
  CHAT_ID:   "123456789",
  NOME: "João"   // opcional, aparece na mensagem
};
```
Salve, faça commit e pronto.

---

## Observações importantes

- **A página é pública.** Como é hospedada no GitHub Pages, o token do bot fica
  visível pra quem olhar o código-fonte. Por isso:
  - use um bot **dedicado só pra isso**;
  - se precisar, gere um token novo com `/revoke` no **@BotFather** (o token antigo
    para de funcionar na hora).
- Só funciona em **HTTPS** (o GitHub Pages já é HTTPS) — câmera e localização não
  funcionam em `http://`.
- No iPhone, a câmera só abre no **Safari** (o Chrome do iOS não dá acesso à câmera
  em páginas web). No Android, Chrome funciona normalmente.
- A localização depende de GPS/sinal; se a pessoa negar ou estiver sem sinal, a foto
  é enviada mesmo assim, com um aviso de "localização indisponível".
