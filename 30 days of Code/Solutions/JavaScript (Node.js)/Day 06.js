function processData(input) {
    //Enter your code here
    const inputLines = input.trim().split("\n");
    const numberOfLines = parseInt(inputLines[0], 10);
    
    for (let i=1; i <= numberOfLines; i++)
    {
        const S = inputLines[i];
        let evenIndexedChars = "";
        let oddIndexedChars = "";
        
        for (let j = 0; j < S.length; j++)
        {
            if (j % 2 === 0)
            {
                evenIndexedChars += S[j];
            }
            else
            {
                oddIndexedChars += S[j];
            }
        }
        
        console.log(`${evenIndexedChars} ${oddIndexedChars}`);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");

_input = "";

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
