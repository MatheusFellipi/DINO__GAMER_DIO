const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let position = 0;
let isJumping = false;


function handlEvent(event) {
  if (event.keyCode === 32)
    if (!isJumping)
      jump();
}

function jump() {

  isJumping = true;
  let upIntereval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upIntereval)

      let dawnInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(dawnInterval)
          isJumping = false;
        } else {
          position -= 20
          dino.style.bottom = position + "px";
        }

      })
    } else {
      position += 20;
      dino.style.bottom = position + "px";
    }

  }, 20)
}

function createCactus() {
  let cactusPosition = 1000;
  let ramdomTime = Math.random() * 6000;

  const cactus = document.createElement('div')
  cactus.classList.add('cactus');
  cactus.style.left = 1000 + "px";
  background.appendChild(cactus);

  let leftInterval = setInterval(() => {

    if (cactusPosition < -60) {
      clearInterval(leftInterval)
      background.removeChild(cactus)
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      clearInterval(leftInterval);
      document.body.innerHTML = "<h1 class='game_over'>Fim de jogo</h1>"
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + "px";
    }
  }, 20)
  setTimeout(createCactus, ramdomTime);
}
createCactus();
document.addEventListener('keyup', handlEvent)
