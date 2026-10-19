# Painel da Diretoria BIN (versão web)

Esta pasta guarda só o código do painel. Ela pode ficar num repositório público do GitHub porque não contém nenhum número da empresa.

Os dados ficam no Google Drive da BIN, num único arquivo trancado com senha (`painel_bin_dados.enc.json`). Para ver o painel, a pessoa precisa de duas coisas:

1. **Conta Google autorizada.** A pasta do Drive é compartilhada só com os e-mails cadastrados. Outras contas não encontram o arquivo.
2. **Senha do painel.** O arquivo vem trancado (AES-256 + HMAC, chave derivada da senha por PBKDF2 com 310 mil iterações) e só é aberto dentro do celular ou computador de quem entrou. A senha nunca é enviada a lugar nenhum.

## Como os dados chegam ao Drive

No computador da BIN, o `Abrir painel` → **Atualizar dados** (ou o `atualizar.ps1` na pasta `Analises\painel`):

- relê os relatórios das pastas;
- gera o painel local;
- grava o arquivo trancado em `G:\Meu Drive\BIN Painel`.

O Google Drive para computador sobe o arquivo sozinho. Quem estiver com o painel aberto toca em **Atualizar dados → Buscar versão nova**.

## Configuração (uma vez só)

### 1. Senha

Na pasta `Analises\painel`, dê dois cliques em **Definir senha**. Use no mínimo 10 caracteres.

A senha fica guardada só naquele computador, protegida pelo Windows. Passe-a para a diretoria pessoalmente ou por telefone, nunca junto com o link.

Para trocar a senha, rode de novo e depois clique em Atualizar dados.

### 2. Pasta no Google Drive

1. Rode o **Atualizar dados** uma vez. Isso cria a pasta `G:\Meu Drive\BIN Painel` com o arquivo trancado.
2. No drive.google.com, clique com o botão direito na pasta **BIN Painel** → **Compartilhar**.
3. Adicione os e-mails autorizados como **Leitor**. Deixe "Acesso geral" como **Restrito**.
4. Copie o ID da pasta (o trecho depois de `/folders/` no endereço) e cole em `PASTA_ID` no `config.js`.

> Nunca coloque nessa pasta os relatórios do ERP, planilhas ou o `dados.js`. Eles não são trancados. Lá deve ficar só o `painel_bin_dados.enc.json`.

### 3. Login do Google (Google Cloud)

1. Abra console.cloud.google.com e crie um projeto, por exemplo `Painel BIN`.
2. Em **APIs e serviços → Biblioteca**, ative a **Google Drive API**.
3. Em **Tela de permissão OAuth** (Google Auth Platform):
   - Tipo **Externo**, nome `Painel da Diretoria BIN`, com seu e-mail de suporte.
   - Em **Escopos**, adicione `.../auth/drive.readonly`.
   - Deixe o app em **Teste**.
   - Em **Usuários de teste**, adicione os mesmos e-mails autorizados (até 100).
   - Só esses e-mails conseguem passar do login. É a segunda tranca de acesso por e-mail.
4. Em **Credenciais → Criar credenciais → ID do cliente OAuth**, crie um ID do tipo **Aplicativo da Web**:
   - Em **Origens JavaScript autorizadas**, coloque `https://SEU-USUARIO.github.io`.
   - Para testar no computador, coloque também `http://localhost:8790`.
5. Copie o **ID do cliente** (termina em `.apps.googleusercontent.com`) e cole em `CLIENT_ID` no `config.js`.

Como o app fica em modo de teste, o Google mostra o aviso "O Google não verificou este app". Basta tocar em **Continuar**. O aviso aparece porque o app é interno e não passou pela verificação pública do Google. Ele não indica problema de segurança.

### 4. GitHub Pages

1. Crie um repositório no GitHub, por exemplo `painel-bin`, e envie o conteúdo desta pasta.
   - Repositório público: o Pages é gratuito e o código não contém dados.
   - Repositório privado: o Pages exige plano pago.
2. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. O endereço será `https://SEU-USUARIO.github.io/painel-bin/`.

## Para cadastrar ou tirar uma pessoa

- **Cadastrar:** compartilhe a pasta **BIN Painel** com o e-mail e adicione-o em **Usuários de teste** no Google Cloud. Depois, passe a senha por um canal seguro.
- **Tirar:** remova o e-mail do compartilhamento da pasta e dos usuários de teste. Se a pessoa sabia a senha, troque-a com **Definir senha** e clique em **Atualizar dados**.

## No celular

Abra o link no Chrome (Android) ou no Safari (iPhone). Depois use **Adicionar à tela inicial**: o painel abre como um aplicativo, em tela cheia.

O login do Google vale por 1 hora em cada aba. A senha é pedida de novo a cada vez que o painel é aberto. O gerenciador de senhas do celular pode guardá-la.

O botão **Sair e trancar**, no fim da página, encerra o acesso naquele aparelho.

## Como esta página é gerada

O `index.html` é montado a partir do mesmo código do painel local (`Analises\painel\index.html`), com a tela de entrada na frente. Não edite à mão: as mudanças no painel são feitas no código-fonte e a página é gerada de novo.
