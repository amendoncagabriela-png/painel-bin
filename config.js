// Configuração do Painel da Diretoria BIN na versão web (GitHub Pages).
// Aqui não há dados nem senha: só o endereço do login do Google e onde procurar o arquivo trancado.
window.BIN_CONFIG = {
  // ID do cliente OAuth criado no Google Cloud (termina em .apps.googleusercontent.com).
  CLIENT_ID: '653947149034-e1s05qp6jmjs3ellj5h6jl6mhnohq3u6.apps.googleusercontent.com',
  // ID da pasta "BIN Painel" no Google Drive (o trecho depois de /folders/ no link da pasta). Opcional, mas recomendado.
  PASTA_ID: '1eSQy2Xpx22C-i5f7eC9fJ5J-yTAZ6xiG',
  // Nome do arquivo trancado que o atualizar.ps1 grava no Drive.
  ARQUIVO: 'painel_bin_dados.enc.json'
};
