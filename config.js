// Configuração do Painel da Diretoria BIN na versão web (GitHub Pages).
// Aqui não há dados nem senha: só o endereço do login do Google e onde procurar o arquivo trancado.
window.BIN_CONFIG = {
  // ID do cliente OAuth criado no Google Cloud (termina em .apps.googleusercontent.com).
  CLIENT_ID: '653947149034-e1s05qp6jmjs3ellj5h6jl6mhnohq3u6.apps.googleusercontent.com',
  // ID da pasta "BIN Painel" no Google Drive (o trecho depois de /folders/ no link da pasta). Opcional, mas recomendado.
  PASTA_ID: '1eSQy2Xpx22C-i5f7eC9fJ5J-yTAZ6xiG',
  // Nome do arquivo trancado que o atualizar.ps1 grava no Drive.
  ARQUIVO: 'painel_bin_dados.enc.json',
  // Atualização ao vivo sem depender do acesso do Google (que vence em 1 hora): o arquivo trancado é lido pelo link fixo
  // (compartilhado como "qualquer pessoa com o link: leitor"; continua cifrado com a senha) e uma chave de API do Google Cloud
  // restrita a este site e à API do Drive. Sem a chave, o painel volta a conferir só com o acesso do Google.
  ARQUIVO_ID: '16gV2wlU2hmKNkn7D6py0L15V0wfz6y69',
  API_KEY: 'AIzaSyDooAO42E6BVajDA1vsRpfQzR7ij1iB_VM'
};
