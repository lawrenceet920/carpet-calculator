// Ethan Lawrence
// May 14 2024
// Carpet Calculator

document.getElementById("calculate").addEventListener("click", calc)

function calc() {
    // Imput
    const width = document.getElementById('width').value;
    const length = document.getElementById('length').value;
    const price = document.getElementById('price').value;

    // Process
    const totalPrice = width * length * price;

    // Output
    console.log (`The total of width, height and, price multiplied is ${totalPrice}`)
    document.getElementById('output').innerHTML = `A carpet with an area of <em>${width * length}</em> and a price of <em>$${price}</em>ft<sup>2</sup> will have a value of <strong>$${totalPrice}</strong>`;
}