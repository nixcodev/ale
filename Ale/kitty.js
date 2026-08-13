const kittyContainer = document.getElementById("kitty-container");

const kitties = [
    "./img/1.png",
    "./img/2.png",
    "./img/3.png"
];

const posiciones = [
    { left: "20%", top: "68%" }, 
    { left: "46%", top: "65%" }, 
    { left: "66%", top: "68%" }  
];

kitties.forEach((src, i) => {
    const kitty = document.createElement("img");

    kitty.src = src;
    kitty.className = "kitty";

    kitty.style.position = "absolute";
    kitty.style.left = posiciones[i].left;
    kitty.style.top = posiciones[i].top;

    kitty.style.width = "120px";
    kitty.style.height = "120px";

    kitty.style.animationDelay = `${i * 0.8}s`;

    kittyContainer.appendChild(kitty);
});