function isOldEnoughToDrive() {
  // your code here


  var edad=parseInt(prompt("Cuál es la edad"));
    if(edad>15){
        var puede="Sí puede manejar";
    }else{
        var puede="No puede manejar";
    }

    return puede
}

var output = isOldEnoughToDrive();
console.log(output);
