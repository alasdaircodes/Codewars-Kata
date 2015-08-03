function pattern(n){
  var output="";
  var number = "";
  var line = ""
  // Happy Coding ^_^
  if (n<=0){
    return output
  }
  else{
     for (var i = 1 ; i<=n ; i ++){
       var digit = String(i);
       var number = number + digit.charAt(digit.length -1 )
     }
     while (number.length < 2*n-1){
       number = " " + number;
     }
     for (var p = 0; p<n; p++){
       line = number.slice(p)+ number.slice(0,p)
       if (p<n-1){
       output = output + line + "\\n";
     }
       else {
       output = output + line;
       }

     }
     return output
  }
}
  console.log(pattern(3));
