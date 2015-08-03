var FilterString = function(value) {
  //Complete this function :)
  var filtered = []
  for (var i = 0; i<value.length; i++){
  if ( value.charAt(i)="0" || "1" ||"2" ||"3"||"4"||"5"||"6"||"7"||"8"||"9"){
  filtered.push(value.charAt(i))
  }
}
  for(var i = 0; i<filtered.length; i++){
  filtered[i] = parseInt(i,10);
  }
  }
  return filtered
}
