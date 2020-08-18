//input
var s = "31241341581651983581359813985"; 
var arr = ["41341581","813985","13061994","65198","312","3581359"];

//output
//4(312 41341581 65198 3581359 813985)

//code
var space=0,aOutput = s;
arr.sort(function(a, b){return b.length - a.length});
for(var i = 0 ; i < arr.length; i++) {
    if(s.indexOf(arr[i])>-1) {
        console.log("test: " + arr[i]);
        space++;
        s = s.slice(0,s.indexOf(arr[i])) + s.slice(s.indexOf(arr[i])+arr[i].length,s.length);
        console.log("remaining: " + s);
        if(aOutput.slice(aOutput.indexOf(arr[i])+arr[i].length,aOutput.length).length>1) {
             aOutput = aOutput.slice(0,aOutput.indexOf(arr[i])+arr[i].length) + " " + aOutput.slice(aOutput.indexOf(arr[i])+arr[i].length,aOutput.length);
        } else { 
             aOutput = aOutput.slice(0,aOutput.indexOf(arr[i])+arr[i].length)
        }
       
    }
}
console.log("Output");
console.log(space-1 + " (" + aOutput + ")");
