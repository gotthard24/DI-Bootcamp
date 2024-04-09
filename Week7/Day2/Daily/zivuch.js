const BASE_URL = "https://api.giphy.com/v1/gifs";
const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const root = document.getElementById("root");

const search4random = async (e) => {
  e.preventDefault();

  const url = `${BASE_URL}/random?tag=${e.target.search.value}&api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    if (result.meta.status === 200) {
      preLoadImages(result.data.images)
        .then((img) => {
          renderGif(img);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } catch (error) {
    console.error(error);
  }
};

const preLoadImages = (images) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    // const img = document.createElement("img");
    img.src = images.original.url;
    img.onload = () => resolve(img);
    img.onerror = () => reject("Problem to load image");
  });
};

const renderGif = (image) => {
  //   const img = document.createElement("img");
  //   img.setAttribute("src", images.fixed_width.url);
  image.addEventListener("dblclick", () => {
    image.remove();
  });
  root.appendChild(image);
};