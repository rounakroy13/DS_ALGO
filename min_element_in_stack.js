var arr = [], temp = [];
function pushProto(num) {
    if(arr.length ===0){
        arr.push(num);
        temp.push(num);
        console.log(arr);
        console.log(temp);
        return;
    }
    arr.push(num);
    if(arr[arr.length-2]>num) {
        temp.push(num);
    } else {
        temp.push(temp[temp.length-1]);
    }
    console.log(arr);
    console.log(temp);
}
function popProto() {
    arr.pop();
    temp.pop();
    console.log(arr);
    console.log(temp);
}
function getMinProto() {
    console.log("Min : " +  temp[temp.length-1]);
}
