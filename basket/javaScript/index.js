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


const video = document.getElementById('videoPlayer');
  const playPauseBtn = document.getElementById('playPause');
  const progress = document.getElementById('progress');
  const currentTimeDisplay = document.getElementById('currentTime');
  const volumeControl = document.getElementById('volume');

  // Formata segundos em mm:ss
  function formatTime(time) {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  // Atualiza botão play/pause e barra de progresso
  function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100 || 0;
    currentTimeDisplay.textContent = formatTime(video.currentTime);
    
    if (video.paused) {
      playPauseBtn.textContent = '▶️';
    } else {
      playPauseBtn.textContent = '⏸️';
    }
    updateProgressBar();
  }

  //Função para muda a cor da barra de video 
  function updateProgressBar() {
  const value = progress.value;
 progress.style.background = `linear-gradient(to right, #bb530efb 0%, #bb5b0cff ${value}%, #ccc ${value}%, #ccc 100%)`; 

} 
  //Função para muda a cor da barra de volume

function updateVolumeBar() {
  const val = ((volumeControl.value - volumeControl.min) / (volumeControl.max - volumeControl.min)) * 100;
  volumeControl.style.background =  `linear-gradient(to right, #bb530efb 0%, #bb5b0cff ${val}%, #ccc ${val}%, #ccc 100%)`; 

}
  // Play/pause no botão
  playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    updateProgress();
  });

  // Atualiza barra de progresso enquanto vídeo toca
  video.addEventListener('timeupdate', updateProgress);

  // Alterar tempo via barra de progresso
  progress.addEventListener('input', () => {
    video.currentTime = (progress.value / 100) * video.duration;
    updateProgress();
  });



  volumeControl.addEventListener('input', () => {
  video.volume = volumeControl.value;
  updateVolumeBar();
});

  // Atualiza controles ao carregar vídeo
  video.addEventListener('loadedmetadata', () => {
    updateProgress();
    updateProgressBar();
    updateVolumeBar();

progress.addEventListener('input', () => {
  updateProgressBar();   // funciona ao arrastar manualmente
});

// Atualiza a barra de progresso e volume ao carregar a página
window.addEventListener('load', () => {
  updateProgressBar();
  updateVolumeBar();
});
});


