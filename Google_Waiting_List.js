// Simple Javascript Code
var list = new Map();
var addCustomer = function(name, pax) {
list.set(name,pax);
console.log(list);
}

var removeCustomer = function (name, pax) {
var a = list.get(name);
if (a === pax) {
list.delete(name);
}
console.log(list);
}

var serve = function (pax) {
for(var [key, value] of list) {
if(value === pax || value === pax-1) {
list.delete(key);
console.log(key + ' with pax ' + value + ', Assigned a Table of ' + pax);
console.log(list);
return;
}
}
}

addCustomer("rounak",2);
addCustomer("runa",2);
addCustomer("abcd",2);
addCustomer("abc",5);
removeCustomer("abc",5);
serve(2);
