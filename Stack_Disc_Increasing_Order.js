var input = [14, 5, 13, 19, 17, 10, 18, 12];
var output = [];
debugger;
var finaloutput = fnGetResult();
for(var i=0;i<finaloutput.length; i++) {
    console.log(finaloutput[i]);
}

function fnGetResult() {
    for(var i=0;i<input.length; i++) {
        if (!output.length) {
            output[0] = input[i];
            continue;
        } 
        bIsNewStackRequired = fnNewStackRequired(input[i]);
        if (bIsNewStackRequired)
            output[output.length] = input[i];
    } 
    output.unshift(output.length)
    return(output);
}

function fnNewStackRequired(currentNum){
    for(var j = 0; j<output.length; j++){
        if(output[j] > currentNum){
            output[j] = currentNum;
            return false;
        }
    }
    return true;
}
