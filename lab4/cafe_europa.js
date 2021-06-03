let marghCost = 12;
let quattroCost = 12.5;
let capriCost = 13;
let schnitzCost = 8.5;
let grillCost = 9.5;
let beefCost = 10;
let coffeeCost = 2;
let latteCost = 2.5;
let sodaCost = 1.75;

window.onload = function setDate() {
    let dateNode = document.getElementById('date');
    dateNode.textContent = 'The date is ' + new Date();
}

function printOrder() {
    
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let phoneNum = document.getElementById('phone').value;
    let pickDate = document.getElementById('pickup-time').value;

    let numMargh = document.getElementById('marghQuantity').value;
    let numQuattro = document.getElementById('quattroQuantity').value;
    let numCapri = document.getElementById('capriQuantity').value;

    let numSchnitz = document.getElementById('schnitzQuantity').value;
    let numGrill = document.getElementById('grillQuantity').value;
    let numBeef = document.getElementById('beefQuantity').value;

    let numCoffee = document.getElementById('coffeeQuantity').value;
    let numLatte = document.getElementById('latteQuantity').value;
    let numSoda = document.getElementById('sodaQuantity').value;

    let totalCost = 0;
    

    let orderConfirmationNode = document.getElementById('orderConfirmation');
    let orderConfirmation = `<h3>Order Confirmed!</h3>
                            <p>${firstName} ${lastName} <br>
                            ${phoneNum} <br>
                            ${pickDate}</p><br>
                            <table>`;
    
    if (numMargh > 0) {
        let lineItem = marghCost * numMargh;
        orderConfirmation += `<tr><td>${numMargh}</td><td>Margherita</td><td>$${lineItem.toFixed(2)}</td></tr>`;
        totalCost += lineItem;
    }

    if (numQuattro > 0) {
        let lineItem = quattroCost * numQuattro;
        orderConfirmation += `<tr><td>${numQuattro}</td><td>Quattro Formaggi</td><td>$${lineItem.toFixed(2)}</td></tr>`;
        totalCost += lineItem;
    }

    if (numCapri > 0) {
        let lineItem = capriCost * numCapri;
        orderConfirmation += `<tr><td>${numCapri}</td><td>Capricciosa</td><td>$${lineItem.toFixed(2)}</td></tr>`;
        totalCost += lineItem;
    }

    if (numSchnitz > 0) {
        let lineItem = schnitzCost * numSchnitz;
        orderConfirmation += `<tr><td>${numSchnitz}</td><td>Schnitzel</td><td>$${lineItem.toFixed(2)}</td></tr>`;
        totalCost += lineItem;
    }

    if (numGrill > 0) {
        let lineItem = grillCost * numGrill;
        orderConfirmation += `<tr><td>${numGrill}</td><td>Mixed Grill</td><td>$${lineItem.toFixed(2)}</td></tr>`;
        totalCost += lineItem;
    }

    if (numBeef > 0) {
        let lineItem = beefCost * numBeef;
        orderConfirmation += `<tr><td>${numBeef}</td><td>Big Beef on a Bun</td><td>$${lineItem.toFixed(2)}</td></tr>`;
        totalCost += lineItem;
    }

    if (numCoffee > 0) {
        let lineItem = coffeeCost * numCoffee;
        orderConfirmation += `<tr><td>${numCoffee}</td><td>Coffee</td><td>$${lineItem.toFixed(2)}</td></tr>`;
        totalCost += lineItem;
    }

    if (numLatte > 0) {
        let lineItem = latteCost * numLatte;
        orderConfirmation += `<tr><td>${numLatte}</td><td>Latte</td><td>$${lineItem.toFixed(2)}</td></tr>`;
        totalCost += lineItem;
    }
    
    if (numSoda > 0) {
        let lineItem = sodaCost * numSoda;
        orderConfirmation += `<tr><td>${numSoda}</td><td>Soft Drink</td><td>$${lineItem.toFixed(2)}</td></tr>`;
        totalCost += lineItem;
    }

    orderConfirmation += `<tr></tr><tr><td></td><td>Total Cost: </td><td>$${totalCost.toFixed(2)}</td></tr></table>`;
    orderConfirmationNode.innerHTML = orderConfirmation;
    
}