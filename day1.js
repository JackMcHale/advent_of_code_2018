
function main()
{
    //Get values from file
    var fs = require('fs');
 
    let datafile = fs.readFileSync('data/dayone.txt', 'utf8');
        //Parse values into array of strings
    let valueArray = datafile.split("\n");
    //Pass values into adder
    let result = addValues(valueArray);
        //Print result
    process.stdout.write(result+"");
}

function addValues (inputValues)
{
    var result = 0;
    //loop through values
    inputValues.map(input => {
        //get first character
        let firstChar = input.charAt(0);
        let value = parseInt(input.substring(1),10);
        if(firstChar == "+")
        {
            result += value;
        }
        else if(firstChar =="-")
        {
            result -= value;
        }

    })
    return result;
}

main();