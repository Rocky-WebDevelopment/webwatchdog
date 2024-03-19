const emailTemplate = `
  <!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2; /* Cor de fundo do corpo */
      margin: 0;
      padding: 0;
      background-color: #120e1f;
    }
    .wrapper{
      background-color: #120e1f;
      padding:20px;
    }
    .container {
      max-width: 360px;
      margin: 20px auto;
      padding: 20px;
      background-color: #d9e1e1; /* Cor de fundo do container principal */
      border-radius: 10px;
      box-shadow: -1px -2px 20px 2px #756f6f /* Sombra do container */
    }
    h1 {
      font-size: 28px;
      text-align: center;
      margin-bottom: 20px;
      color: #271c3b;
      text-transform: uppercase;
    }
    .image-container {
      text-align: center;
    }
    .rounded-image {
      border-radius: 50%; /* Tornar a imagem arredondada */
      width:150px;
    }
    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #6a1b9a; /* Cor roxa para o botão */
      color: orange !important; /* Cor do texto do botão */
      text-decoration: none;
      border-radius: 5px;
      font-size: 16px;
      transition: background-color 0.3s;
    }
    .button:hover {
      background-color: #4a148c; /* Cor roxa escura quando passa o mouse sobre o botão */
      color: white;
      transform: scale(1.2);
      transition: transform 0.6s;
    }
  </style>
</head>
<body class="wrapper">
  <div class="container">
    <div class="image-container">
        <img src="https://raw.githubusercontent.com/Rocky-WebDevelopment/webwatchdog/main/logo-ww.png" alt="Imagem" class="rounded-image">
    </div>
    <h1>Watchdog Alert!</h1>
    <p style="text-align: center;color: #6f6281;padding: 0 9px 26px 9px;">
      Na minha última verificação encontrei algumas páginas com alguns problemas! por favor entre no painel para realizar uma analise!
    </p>
    <p style="text-align: center;">
      <a href="https://docs.google.com/spreadsheets/d/1-OG48j2UwsyuHE0tm-guqyIEejSK2BWKccFLGTbxZGE/edit#gid=1413902202" class="button">Acessar painel</a>
    </p>
    <p style="text-align: center;color: #969499;padding: 28px 9px 0px 9px;">Developed by: Abraao morais</p>
  </div>
</body>
</html>
`
