var s = "31241341581651983581359813985", space=0;
var arr = ["41341581","813985","13061994","65198","312","3581359"];
//312 41341581 65198 3581359 813985
debugger
for(var i = 0 ; i < arr.length; i++) {
    if(s.indexOf(arr[i])>-1) {
        console.log("test: " + arr[i]);
        space++;
        var part1 = s.slice(0,s.indexOf(arr[i]));
        var part2 =  s.slice(s.indexOf(arr[i])+arr[i].length,s.length);
        s = part1+part2;  
        console.log("remaining: " + s); 
    }
}
console.log(space-1);
    
