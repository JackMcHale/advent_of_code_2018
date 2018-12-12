var utils = require('./fileutils.js');

function calculateCheckSum(inputArray) {
    var total = 0;
    var doubles = 0;
    var triples = 0;
    //loop through 
    inputArray.forEach(input => {
        //Count the characters
        const characterCounts = countCharacters(input);
        //Add the doubles
        if (hasAmount(characterCounts, 2)) {
            doubles++
        }
        //Add the triples
        if (hasAmount(characterCounts, 3)) {
            triples++
        }
    });
    total = doubles * triples;
    return total;
}

function countCharacters(input) {
    var characters = {};
    for (var c of input)
    {
        if(characters.hasOwnProperty(c))
        {
            characters[c]++;
        }
        else{
            characters[c] = 1;
        }
    };
    return characters;
}

function hasAmount(characterCounts, amount) {
    const valueArray = Object.values(characterCounts);
    return valueArray.includes(amount);
}




function main() {
    //Get values from file
    let valueArray = utils.getArrayFromFile('daytwo.txt');
    //Pass values into adder
    let result = calculateCheckSum(valueArray);
    //Print result
    process.stdout.write(result + "");
}

main();