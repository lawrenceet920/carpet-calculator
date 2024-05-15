// Ethan Lawrence
// May 14 2024
// Carpet Calculator

document.getElementById("calculate").addEventListener("click", calc)

function calc() {
    // Imput
    const width = +document.getElementById('width').value;
    const length = +document.getElementById('length').value;
    const price = +document.getElementById('price').value;

    // Process
    const totalPrice = '$' + (width * length * price).toFixed(2);

    // Output
    console.log (`The total of width, height and, price multiplied is ${totalPrice}`)
    document.getElementById('output').innerHTML = `A carpet with an area of <em>${width * length}</em>ft<sup>2</sup> and a price of $<em>${price}</em>ft<sup>2</sup> will have a value of: <h3>${totalPrice}</h3>`;
}