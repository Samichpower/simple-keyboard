window.addEventListener('keydown', playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.code}']`)
  if (!audio) return;
  audio.play();
}