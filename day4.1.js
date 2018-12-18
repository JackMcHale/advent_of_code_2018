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
    var cleanSwatch = 0;
    var allSquares = initializeSquare(1000);
    var swatches = [];
    process.stdout.write('Finishing inialization\n');
    inputValues.forEach((record ,index) =>
        {
            var swatch = parseRecord(record);
            swatches[index] = swatch;
            for(var row=swatch.startRow; row< (swatch.startRow + swatch.height); row++)
            {
                for(var col = swatch.startColumn;col<(swatch.startColumn + swatch.width); col++)
                {
                    var squareValue = allSquares[row][col];
                    allSquares[row][col]++;
                }
            }
        });
    swatches.forEach(swatch =>
            {
                var swatchValue = 0;
                for(var row=swatch.startRow; row< (swatch.startRow + swatch.height); row++)
                {
                    for(var col = swatch.startColumn;col<(swatch.startColumn + swatch.width); col++)
                    {
                        
                        swatchValue = allSquares[row][col] + swatchValue;
                    }
                }
                if(swatchValue == 0)
                {
                    cleanSwatch = swatch.recNo;
                }
            });
    return cleanSwatch;
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
    var recordNumber = record.substr(1,atLocation-1);
    //Find the colon
    const colonLocation = record.indexOf(":")
    const location = record.substr(atLocation+2,colonLocation-1);
    //Split at the comma
    const position = location.split(",");
    //one space after the colon
    const dimensions = record.substr(colonLocation+2);
    const size = dimensions.split("x");
    //Split at the x
    return new SwatchClaim(parseInt(recordNumber),parseInt(position[1]),parseInt(position[0]),parseInt(size[1]),parseInt(size[0]));
}

function SwatchClaim(recNo,startRow,startColumn,height,width)
{
    this.recNo = recNo;
    this.startRow = startRow;
    this.startColumn = startColumn;
    this.height = height;
    this.width = width;
}

main();