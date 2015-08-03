function minMax(arr){
var res = [];
arr.sort(function(a,b){return a - b});
res.push(arr[0]);
arr.reverse()
res.push(arr[0]);
return res;
}
//easy enough
