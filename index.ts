import * as readline from 'readline';

// Define the player object
const player = {
    name: "",
    health: 100,
    inventory: []
};

// Define the NPC object
const npc = {
    name: "Bob",
    dialogue: "Welcome to Orgoth! How can I help you today?"
};

// Define the room object
const room = {
    description: "You are in a small room with one window and one door.",
    window: {
        description: "The window is small and dirty, but you can see a beautiful landscape outside.",
        isBroken: false
    },
    door: {
        description: "The door is made of wood and looks sturdy.",
        isLocked: true
    }
};

// Define the game loop
async function gameLoop() {
    while (player.health > 0) {
        // Display the room description
        console.log(room.description);

        // Display the window and door descriptions
        console.log(room.window.description);
        console.log(room.door.description);

        // Display the NPC dialogue
        console.log(npc.dialogue);

        // Wait for player input
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('What do you want to do?', answer => {
            console.log(`Hello ${answer}!`);
            readline.close();
        });

        // Process player input
        if (input === "look window") {
            console.log(room.window.description);
        } else if (input === "look door") {
            console.log(room.door.description);
        } else if (input === "talk npc") {
            console.log(npc.dialogue);
        } else {
            console.log("I don't understand.");
        }
    }
}

gameLoop();
