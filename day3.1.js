var utils = require('./fileutils.js');
function main() {
    //Get values from file
    let valueArray = utils.getArrayFromFile('daythree.txt');
    //Pass values into adder
    let result = countContestedSquares(valueArray);
    //Print result
    process.stdout.write(result + '\n');
}

function countContestedSquares(inputValues) {
    var conflicts=0;
    var allSquares = initializeSquare(1000);
    process.stdout.write('Finishing inialization\n');
    inputValues.forEach(record =>
        {
            var swatch = parseRecord(record);
            process.stdout.write((swatch.width * swatch.height)+"\n");
            for(var row=swatch.startRow; row< (swatch.startRow + swatch.height); row++)
            {
                for(var col = swatch.startColumn;col<(swatch.startColumn + swatch.width); col++)
                {
                    var squareValue = allSquares[row][col];
                    if(squareValue == 0)
                    {
                        conflicts++;
                        
                    }
                    allSquares[row][col]++;
                    process.stdout.write(row + ':' + col + '\n');
                }
            }
        });
    return conflicts;
}

function initializeSquare(inputSize) {
    var rows = [];
    for (var rowIndex = 0; rowIndex < inputSize; rowIndex++) {
        rows[rowIndex] = [];
        for (var columnIndex = 0; columnIndex < inputSize; columnIndex++) {
            rows[rowIndex][columnIndex] = -1;
        }
    }
    return rows;
}

//#1 @ 808,550: 12x22
//## @ c,r: wxh)
function parseRecord(record)
{
    
    //Find the @
    const atLocation = record.indexOf("@");
    //Find the colon
    const colonLocation = record.indexOf(":")
    const location = record.substr(atLocation+2,colonLocation-1);
    //Split at the comma
    const position = location.split(",");
    //one space after the colon
    const dimensions = record.substr(colonLocation+2);
    const size = dimensions.split("x");
    //Split at the x
    return new SwatchClaim(parseInt(position[1]),parseInt(position[0]),parseInt(size[1]),parseInt(size[0]));
}

function SwatchClaim(startRow,startColumn,height,width)
{
    this.startRow = startRow;
    this.startColumn = startColumn;
    this.height = height;
    this.width = width;
}

main();