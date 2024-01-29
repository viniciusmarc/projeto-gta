

 // Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
  
 // Passo 1 - pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele
 const botao = document.querySelector(".btn-plataforma");
 const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

 // Passo 3 - pegar o clique do usuario no js
 botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
 });
