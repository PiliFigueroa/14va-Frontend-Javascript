const img =  document.querySelector("#img");
const btn =  document.querySelector("#btn");

// const changeImg = () => {
//   fetch("https://randomfox.ca/floof/")
//   .then(res => res.json())
//   .then(data => {
//     img.src = data.image;
//   })
// }

const changeImg = async () => {
  const res = await fetch("https://randomfox.ca/floof/");
  const data = await res.json();
  img.src = data.image;
}


btn.addEventListener("click",changeImg);

changeImg();