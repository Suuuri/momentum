const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");


bgImage.src = `image/${chosenImage}`

console.log(bgImage);

document.body.appendChild(bgImage);
// prepend()를 사용하면 html의 body 맨 위로 오게 된다. 
// appendchild()를 사용하면 html의 body 맨 아래로 가게 된다. 