document.addEventListener("DOMContentLoaded", () => {
  // Animação ao passar o mouse
  const botoes = document.querySelectorAll('.saibaMais');

  botoes.forEach(botao => {
    botao.addEventListener('mouseenter', () => {
      botao.classList.add('pulando'); // adiciona o efeito
    });

    botao.addEventListener('mouseleave', () => {
      botao.classList.remove('pulando'); // remove o efeito quando sai
    });
  });

  // Função para lidar com a abertura e fechamento das modais
  const noticias = document.querySelectorAll('.noticia1, .noticia2, .noticia3, .noticia4');

  noticias.forEach(noticia => {
    const botao = noticia.querySelector('.saibaMais');
    const modal = noticia.querySelector('.modal');
    const fechar = modal.querySelector('.buttonClose');

    // Garante que a modal comece oculta
    modal.style.display = 'none';

    // Abrir a modal ao clicar no botão
    botao.addEventListener('click', () => {
      modal.style.display = 'flex'; // flex para centralizar com CSS
    });

    // Fechar a modal ao clicar no botão de fechar
    fechar.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Fechar a modal ao clicar fora do conteúdo
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});