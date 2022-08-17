const imageElement = document.querySelector(
  ".gallery.container > .image-gallery > img"
);
const paragraphElement = document.querySelector(
  ".gallery.container > .image-gallery > p"
);
const autoPlayIntervalInput = document.getElementById("auto-play-interval");
const autoPlayBtn = document.getElementById("auto-play-btn");

document
  .querySelector(".gallery.container > .actions button#next-btn")
  .addEventListener("click", next);

document
  .querySelector(".gallery.container > .actions button#prev-btn")
  .addEventListener("click", previous);

const images = [
  {
    url: "https://cdn.pixabay.com/photo/2022/07/30/14/07/butterfly-7353884_960_720.jpg",
    title: "Butterfly ",
    description: "A beautiful butterfly in the wild",
  },
  {
    url: "https://cdn.pixabay.com/photo/2022/08/07/16/03/bee-7370876__340.jpg",
    title: "Bee",
    description: "A beautiful bee in the wild",
  },
  {
    url: "https://cdn.pixabay.com/photo/2022/07/31/17/07/bird-7356346_960_720.jpg",
    title: "Owl",
    description: "A beautiful owl in the wild",
  },
];
let currentImageIndex = 0;
let autoPlayIntervalId = null;

autoPlayBtn.addEventListener("click", function () {
  try {
    renderStartStopAutoPlay();
  } catch (error) {
    console.dir(error);
    alert(error.message);
  }
});

render();

function renderStartStopAutoPlay() {
  let seconds = Number(autoPlayIntervalInput.value);
  if (
    typeof seconds !== "number" ||
    isNaN(seconds) ||
    seconds < 1 ||
    seconds > 10
  ) {
    throw new Error("seconds must be between 1 - 10");
  }

  if (autoPlayIntervalId) {
    autoPlayStop();
    autoPlayBtn.innerText = "start";
    autoPlayIntervalInput.disabled = false;
  } else {
    autoPlayStart(seconds);
    autoPlayBtn.innerText = "stop";
    autoPlayIntervalInput.disabled = true;
  }
}

function next() {
  currentImageIndex =
    currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
  render();
}

function previous() {
  currentImageIndex =
    currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
  render();
}

function autoPlayStart(seconds = 2) {
  if (autoPlayIntervalId) {
    return;
  }

  autoPlayIntervalId = setInterval(next, seconds * 1000);
}

function autoPlayStop() {
  clearInterval(autoPlayIntervalId);
  autoPlayIntervalId = null;
}

function render() {
  const image = images[currentImageIndex];

  imageElement.src = image.url;
  imageElement.alt = image.title;

  paragraphElement.innerText = image.description;
}
