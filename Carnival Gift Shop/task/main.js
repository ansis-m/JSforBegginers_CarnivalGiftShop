let gifts = [["Teddy Bear", 10],
    ["Big Red Ball", 5],
    ["Huge Bear", 50],
    ["Candy", 8],
    ["Stuffed Tiger", 15],
    ["Stuffed Dragon", 30],
    ["Skateboard", 100],
    ["Toy Car", 25],
    ["Basketball", 20],
    ["Scary Mask", 75]];

let tickets = 100;


function buyGift() {
    console.log("Enter the number of the gift you want to get:")

    let choice = new Number();
    const input = require("sync-input");
    while (true) {
        choice = Number(input());
        if (choice > 0 && choice < 11)
            break;
    }
    console.log(`Here you go, one ${gifts[choice - 1][0]}!`)
    console.log(`Total tickets: ${tickets - gifts[choice -1][1]}`)
}

function addTickets() {
    console.log("Enter the ticket amount:")
    let choice = new Number();
    const input = require("sync-input");
    while (true) {
        choice = Number(input());
        if (choice > 0)
            break;
    }
    console.log(`Total tickets: ${tickets + choice}`)
}

function checkTickets() {
    console.log("Total tickets: 100");
}

function showGifts() {
    console.log("Here's the list of gifts:\n")
    gifts.forEach(function (gift, order) {console.log(`${order + 1}- ${gift[0]}, Cost: ${gift[1]} tickets`)})

}

function main() {
    console.log("WELCOME TO THE CARNIVAL GIFT SHOP!")
    console.log("Hello friend! Thank you for visiting the carnival!")
    showGifts();
    console.log("\nWhat do you want to do?");
    console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts");

    let choice = new Number();
    const input = require("sync-input");
    while (true) {
        choice = Number(input());
        if (choice > 0 && choice < 5)
            break;
    }
    switch (choice){
        case (1):
            buyGift();
            break;
        case(2):
            addTickets();
            break;
        case (3):
            checkTickets();
            break;
        case(4):
            showGifts();
            break;
    }
    console.log("Have a nice day!");
}

main();