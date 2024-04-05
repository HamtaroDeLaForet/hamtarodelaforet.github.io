// Liste des chemins des images
const imagePaths = [
    "./images/chatgpt.jpg",
    "./images/feedly.png",
    "./images/googlealert.png",
    "./images/hitek.jpeg"
];

// Fonction pour charger les images dans le tableau
function loadImages() {
    const gridContainer = document.getElementById("gridContainer");

    imagePaths.forEach((path, index) => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        const img = document.createElement("img");
        img.src = path;
        img.alt = "Image " + (index + 1);
        gridItem.appendChild(img);
        gridContainer.appendChild(gridItem);
    });
}

// Charger les images lorsque la page est prête
window.onload = function() {
    loadImages();
};
