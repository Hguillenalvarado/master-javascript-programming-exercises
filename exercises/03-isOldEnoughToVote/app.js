function isOldEnoughToVote(age) {
  // your code here
   var edad=parseInt(prompt("Cuál es la edad"));
    if(edad>17){
        var puede="Sí puede votar";
    }else{
        var puede="No puede votar";
    }

    return puede

}

var output = isOldEnoughToVote(22);
console.log(output);