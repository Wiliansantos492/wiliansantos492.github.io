# Check-in da família

Página de **presença combinada**: ao abrir o link e tocar em *"Fazer check-in"*, o
aparelho — **com a permissão da pessoa** — tira uma foto da câmera frontal, pega a
localização e o horário, e envia tudo para o seu **Discord**.

> Esta página é feita para uso **transparente e combinado** entre a família. O
> navegador sempre pede permissão de câmera e de localização; nada é feito escondido.

**Link que a pessoa usa:** `https://wiliansantos492.github.io/checkin/`

---

## Configuração (uma vez só)

### 1. Criar um servidor no Discord
1. Instale/abra o **Discord** (celular ou computador) e faça login.
2. Na lista de servidores (à esquerda), toque no **+** → **Criar meu próprio** →
   **Para mim e meus amigos**. Dê um nome (ex.: `Família`).
3. Ele já vem com um canal chamado `# geral`. Pode usar esse mesmo.

### 2. Gerar o webhook (o "endereço de entrega")
1. Toque no nome do servidor → **Configurações** (engrenagem) → **Integrações**.
   *(No celular: segure o canal `# geral` → Editar Canal → Webhooks.)*
2. Toque em **Webhooks** → **Novo Webhook** (ou **Criar Webhook**).
3. Toque no webhook criado → **Copiar URL do Webhook**.
   Ela se parece com:
   ```
   https://discord.com/api/webhooks/123456789/AbCd...xyz
   ```

### 3. Preencher o `config.js`
Edite o arquivo [`config.js`](config.js) e cole a URL:
```js
window.CONFIG = {
  WEBHOOK_URL: "https://discord.com/api/webhooks/123456789/AbCd...xyz",
  NOME: "João"   // opcional, aparece na mensagem
};
```
Salve, faça commit e pronto.

> Dica: ative as **notificações** desse servidor no seu celular para ser avisado
> na hora em que o check-in chegar.

---

## Observações importantes

- **A página é pública.** Como é hospedada no GitHub Pages, a URL do webhook fica
  visível pra quem olhar o código-fonte. Se precisar, é só **apagar o webhook** no
  Discord e **criar outro** — a URL antiga para de funcionar na hora.
- Um webhook só pode **enviar** mensagens pro canal; ele **não** dá acesso a ler
  suas conversas nem fazer outra coisa no servidor.
- Só funciona em **HTTPS** (o GitHub Pages já é HTTPS) — câmera e localização não
  funcionam em `http://`.
- No iPhone, a câmera só abre no **Safari** (o Chrome do iOS não dá acesso à câmera
  em páginas web). No Android, Chrome funciona normalmente.
- A localização depende de GPS/sinal; se a pessoa negar ou estiver sem sinal, a foto
  é enviada mesmo assim, com um aviso de "localização indisponível".
