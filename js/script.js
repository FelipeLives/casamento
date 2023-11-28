document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");

    const descriptions = [
        "Air Fryer",
        "Descrição da Foto 2",
        "Descrição da Foto 3",
        "Descrição da Foto 4",
        "Descrição da Foto 5",
        "Descrição da Foto 6",
        "Descrição da Foto 7",
        "Descrição da Foto 8",
        "Descrição da Foto 9",
        "Descrição da Foto 10"
    ];

    for (let i = 1; i <= 10; i++) {
        const photoSrc = `fotos/foto${i}.jfif`;
        const description = descriptions[i - 1];

        const photoDiv = document.createElement("div");
        photoDiv.classList.add("photo");

        const image = document.createElement("img");
        image.src = photoSrc;
        image.alt = `Foto ${i}`;

        
        const button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-primary");
        button.classList.add("botao");
        button.textContent = "Comprar!"

        const descDiv = document.createElement("div");
        descDiv.classList.add("description");
        descDiv.textContent = description;

        photoDiv.appendChild(image);
        photoDiv.appendChild(descDiv);
        photoDiv.appendChild(button);
        gallery.appendChild(photoDiv);
        
    }
});
