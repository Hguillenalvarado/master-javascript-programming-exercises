function isOldEnoughToDrink(){
    // your code here	
    var edad=parseInt(prompt("Cuál es la edad"));
    if(edad>20){
        var puede="Sí puede beber";
    }else{
        var puede="No puede beber";
    }

    return puede
}

var output = isOldEnoughToDrink();
console.log(output);