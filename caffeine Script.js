// caffeineBuzz

function caffeineBuzz(n){
  var response = "";
  if (n % 3 == 0 && n % 4 == 0){
    response = "Coffee";
  }
  else if (n % 3 == 0){
    response = "Java";
  }
  else {
    response = "mocha_missing!"
  }
  if ((response == "Java" || response == "Coffee")&& n % 2 == 0){
    response = response +"Script";
  }
return response
}
caffeineBuzz(1);
caffeineBuzz(3);
caffeineBuzz(6);
caffeineBuzz(12);
