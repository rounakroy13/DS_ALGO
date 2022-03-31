//Amazon

//Input good
// get unique character in all sub string and sum it

// g,o,o,d,go,oo,od,goo,ood,good
//1,1,1,1,2,1,2,2,2,3

//Output 16

function printDistinct(str){
    var count = [];
    var ans = 0;
    for(var i=0;i<26;i++)
    {
        count[i]=0;
    }

    for (var i = 0; i < str.length; i++){
        if(str[i]!=' ' && (count[str[i].charCodeAt(0)-96]) <1){
            count[str[i].charCodeAt(0)-96]++;
            ans++;
        }
    }
    return ans;
}

var str ="good";
var n=str.length;


var total = 0;
for (var i = 0; i < n; i++){
           for (var j = i+1; j <= n; j++) {
                total+=printDistinct(str.substring(i, j));
           }
}
console.log(total);
