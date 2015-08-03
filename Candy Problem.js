function candies(kids){
  var extra = 0;
  if (kids.length>=2){
    kids.sort(function(a,b){return b-a});
    for (i=1; i < kids.length; i++){
      extra +=  kids[0] - kids[i];  }
    }
  else {
    extra = -1
    }
  return extra;
  }
//what gave me problems on this was understanding kids.length and also ithink a missing bracket messed up the is/else statement
