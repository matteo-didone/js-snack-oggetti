// Create an object that represents a basketball player with the following properties:
//     Player code
//     First name
//     Last name
//     Age
//     Average points scored per game
//     Three-point shooting percentage
//     Blocks
//     Shots

const basketballPlayer = 
{
    playerCode : "LBJ023",
    playerName : "Lebron James",
    age : 36,
    avgPoints : 25,
    threePointPercentage : 35,
    blocks : 10,
    shots : 50
};

// Create a function that returns the player code, first name, last name, and age of the player.
function getPlayerInfo() 
{
    return `${basketballPlayer.playerCode} ${basketballPlayer.playerName} ${basketballPlayer.age}`;
}

// Create a function that returns the average points scored per game, three-point shooting percentage, blocks, and shots of the player.
function getPlayerStats()
{
    return `${basketballPlayer.avgPoints} ${basketballPlayer.threePointPercentage} ${basketballPlayer.blocks} ${basketballPlayer.shots}`;
}

// Randomly generate game statistics according to the following rules:
//     The player code must consist of 3 random uppercase letters and 3 random digits.
//     The average points scored per game should be between 0 and 50.
//     The three-point shooting percentage should be between 0 and 100.
//     Blocks should be an integer between 0 and 30.
//     Shots should be an integer between 20 and 100

// Create a function that randomly generates a player code.
function generateRandomPlayerCode()
{
    // Create a variable to store the player code.
    let playerCode = "";
    // Create a variable to store the alphabet.
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Create a variable to store the numbers.
    const numbers = "0123456789";

    // Create a for loop to generate 3 random uppercase letters and 3 random digits.
    for (let i = 0; i < 3; i++)
    {
        playerCode += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }

    // Create a for loop to generate 3 random uppercase letters and 3 random digits.
    for (let i = 0; i < 3; i++)
    {
        playerCode += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    // Return the player code.
    return playerCode;
}

// Create a function that randomly generates the average points scored per game.
function generateRandomAvgPoints() 
{
    // Return a random number between 0 and 50 (inclusive).
    return Math.floor(Math.random() * 50);
}

// Create a function that randomly generates the three-point shooting percentage.
function generateRandomThreePointPercentage()
{
    // Return a random number between 0 and 100 (inclusive).
    return Math.floor(Math.random() * 100);
}

// Create a function that randomly generates the blocks.
function generateRandomBlocks() 
{
    // Return a random number between 0 and 30 (inclusive).
    return Math.floor(Math.random() * 30);
}

// Create a function that randomly generates the shots.
function generateRandomShots() 
{
    // Return a random number between 20 and 100 (inclusive).
    return Math.floor(Math.random() * (100 - 20 + 1) + 20);
}

// Create a function that randomly generates the player statistics.
function generateRandomPlayerStats()
{
    // Generate the player code.
    basketballPlayer.playerCode = generateRandomPlayerCode();    
    // Generate the average points scored per game.
    basketballPlayer.avgPoints = generateRandomAvgPoints();
    // Generate the three-point shooting percentage.
    basketballPlayer.threePointPercentage = generateRandomThreePointPercentage();
    // Generate the blocks.
    basketballPlayer.blocks = generateRandomBlocks();
    // Generate the shots.
    basketballPlayer.shots = generateRandomShots();
}