const imgCount = 18;
const containers = document.querySelectorAll(".container");
const imageContainers = document.querySelectorAll(".image-container");

const audio = new Audio("asset/audio.mp3");
document.addEventListener("click", ()=>{audio.play(); console.log(1)})

for (let i = 0; i < imageContainers.length; i++) {
  let container = imageContainers[i];
  let numArray = [];
  let delay = 0;
  for (let j = 0; j < 18; j++) {
    let random = Math.floor(Math.random() * 18) + 1;
    while (numArray.includes(random)) {
      random = Math.floor(Math.random() * 18) + 1;
    }
    numArray.push(random);
    let imgHtml = `<img src="img/img-${random}.jpg" alt="Crush's portrait" style="--delay: ${0.5 + delay}s"/>`;
    container.innerHTML += imgHtml;
    delay += 0.05;
  }
}


setTimeout(() => {
  document.querySelectorAll("img").forEach((element) => {
    element.style.transform = "translateX(0)";
  })
}, 1000);


function isElementOutOfScreen(element) {
  const rect = element.getBoundingClientRect();
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
  return (
    rect.right < 0 ||
    rect.bottom < 0 ||
    rect.left > viewportWidth ||
    rect.top > viewportHeight
  );
}

function autoScroll() {
  const containers = document.querySelectorAll('.image-container');

  containers.forEach((container) => {
    const content = container.querySelectorAll('img');
    let scrollX = 0;

    setInterval(() => {
      scrollX++;
      if (scrollX >= content[0].offsetWidth) {
        const firstImage = container.querySelector('img:first-child');
        container.appendChild(firstImage);
        scrollX -= content[0].offsetWidth;
      }
      if (container.classList.contains("box-2") || container.classList.contains("box-4")){
        container.scroll(-scrollX, 0);
      } else {
        container.scroll(scrollX, 0);
      }
    }, 10);
  });
}


setTimeout(() => {
  autoScroll()
}, 1500);

