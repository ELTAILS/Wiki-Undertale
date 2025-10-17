document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('playVideo');
  playButton.addEventListener('click', () => {
    playButton.innerHTML = `
      <iframe width="560" height="315"
        src="https://www.youtube-nocookie.com/embed/K6-ep-Goie8?autoplay=1"
        title="Introdução Undertale (PT-BR)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>`;
  });
});