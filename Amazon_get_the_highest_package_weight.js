//Amazon

//[30,15,5,9]

//1. if [i] < [i+1] then sum it
//2. tell the highest number after sumasion

//30,15,14
//30,29
//output =29

var arr = [30,15,5,9];
var result=0;
var current = arr[arr.length-1];
for(var i = arr.length-2; i >=0; i--) {
    if(current> arr[i]) {
        current = current + arr[i];
    } else {
        result = result < current ? current : result;
        current = arr[i];
    }
}
result = result < current ? current : result;
