// Opdracht 1
let winkelmandje = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];
document.getElementById("result").innerText = `Aantal producten in winkelmandje: ${winkelmandje.length}`;

// Opdracht 2
document.write(`<p>Uw producten zijn: ${winkelmandje.join(', ')}</p>`);

// Opdracht 3
document.write(`<p>${winkelmandje[3]}, staat op de vierde plek in uw winkelmand.</p>`);

// Opdracht 4
winkelmandje[1] = "Bier";

// Opdracht 5
document.write('<button onclick="addProduct()">Product toevoegen</button>');

// Opdracht 6
if (winkelmandje.length > 1) {
    document.write(`<p>Uw producten zijn: ${winkelmandje.join(', ')}</p>`);
} else {
    document.write('<p>U heeft niet genoeg producten om te tonen.</p>');
}

// Opdracht 7
if (winkelmandje[4] === "Drop") {
    document.write(`<p>Uw producten zijn: ${winkelmandje.join(', ')}</p>`);
} else {
    document.write('<p>U heeft geen drop</p>');
}

// Opdracht 8
winkelmandje = winkelmandje.join(', ').split(', ');

// Opdracht 9
let oudeWinkelmandje = [...winkelmandje];
winkelmandje.splice(0, 2);

document.write(`<p>Oude winkelmandje: ${oudeWinkelmandje.join(', ')}</p>`);
document.write(`<p>Nieuwe winkelmandje: ${winkelmandje.join(', ')}</p>`);

// Opdracht 10
winkelmandje.sort();
document.write(`<p>Winkelmandje gesorteerd op alfabetische volgorde: ${winkelmandje.join(', ')}</p>`);

// Opdracht 5 functie
function addProduct() {
    let nieuwProduct = prompt("Voer een nieuw product in:");
    winkelmandje.push(nieuwProduct);
    document.write(`<p>Uw producten zijn: ${winkelmandje.join(', ')}</p>`);
}