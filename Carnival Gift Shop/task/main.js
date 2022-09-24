let gifts = [["Teddy Bear", 10, 1],
    ["Big Red Ball", 5, 2],
    ["Huge Bear", 50, 3],
    ["Candy", 8, 4],
    ["Stuffed Tiger", 15, 5],
    ["Stuffed Dragon", 30, 6],
    ["Skateboard", 100, 7],
    ["Toy Car", 25, 8],
    ["Basketball", 20, 9],
    ["Scary Mask", 75, 10]];

let tickets =0;


function buyGift() {


    if (gifts.length == 0){
        console.log("Wow! There are no gifts to buy.");
        return;
    }
    console.log("Enter the number of the gift you want to get:");

    let choice = new Number();
    let index = new Number();
    const input = require("sync-input");
    while (true) {
        choice = Number(input());
        index = gifts.findIndex(e => e[2] === choice);
        if (choice > 0 && choice < 1000 && index == -1)
            console.log("There is no gift with that number!")
        else if (choice > 0 && choice < 1000 && index != -1 && gifts[index][1] > tickets)
            console.log("You don't have enough tickets to buy this gift.")
        else if (choice > 0 && choice < 1000 && index != -1)
            break;
        else
            console.log("Please enter a valid number!");
    }

    if (index > -1) {
        tickets -= gifts[index][1];
        console.log(`Here you go, one ${gifts[index][0]}!`);
        console.log(`Total tickets: ${tickets}`);
        gifts.splice(index, 1);
    }

}

function addTickets() {
    console.log("Enter the ticket amount:")
    let choice = new Number();
    const input = require("sync-input");
    while (true) {
        choice = Number(input());
        if (choice >= 0 && choice <= 1000)
            break;
        else
            console.log("Please enter a valid number between 0 and 1000.")
    }
    tickets += choice;
    console.log(`Total tickets: ${tickets}`)
}

function checkTickets() {
    console.log(`Total tickets: ${tickets}`);
}

function showGifts() {
    console.log("Here's the list of gifts:\n")
    gifts.forEach(function (gift) {console.log(`${gift[2]}- ${gift[0]}, Cost: ${gift[1]} tickets`)})
    return;
}

function main() {
    console.log("WELCOME TO THE CARNIVAL GIFT SHOP!")
    console.log("Hello friend! Thank you for visiting the carnival!")
    showGifts();

    let choice = new Number();
    const input = require("sync-input");

    while(true) {
        console.log("\nWhat do you want to do?");
        console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
        let c = true;
        while (c) {
            choice = Number(input());
            switch (choice){
                case (1):
                    buyGift();
                    c = false;
                    break;
                case(2):
                    addTickets();
                    c = false;
                    break;
                case (3):
                    checkTickets();
                    c = false;
                    break;
                case(4):
                    showGifts();
                    c = false;
                    break;
                case(5):
                    console.log("Have a nice day!");
                    return;
                default:
                    console.log("Please enter a valid number!");
                    break;
            }
        }

    }
}

main();