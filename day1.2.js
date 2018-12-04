
function main()
{
    //Get values from file
    var fs = require('fs');
 
    let datafile = fs.readFileSync('data/dayone.txt', 'utf8');
        //Parse values into array of strings
    let valueArray = datafile.split("\n");
    //Pass values into adder
    let result = findFirst(valueArray);
        //Print result
    process.stdout.write(result+"");
}

function findFirst (inputValues)
{
    var result = 0;
    var resultArray = [0];
    //loop through values
    for(i=0; i<inputValues.length;i++){
        let input = inputValues[i];
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
        process.stdout.write(result + ":" + resultArray.length + "\n");
        process.stdout.write(resultArray.includes(result)+ "\n");
        if(resultArray.includes(result))
        {
            break;
        }
        else
        {
            resultArray.push(result);
            process.stdout.write("adding" + result + "\n");
        }
    }


    return result;
    //Add result to array
    //If already exists
    //return
}

main();