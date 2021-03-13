function isOldEnoughToDrinkAndDrive(age) {
  // your code here

  var edad=parseInt(prompt("Cuál es la edad"));
  if(edad>20) {
            var puede="licencia para conducir y pero no debe beber";
            }else{
                if(edad<16) {
                var puede="Sin licencia para conducir y puede beber";

            }

            }
  
            if(edad>15 && edad<21){
            var puede="Conducir y no tiene edad para beber";
            }
                
                
        
        
    return puede
}




var output = isOldEnoughToDrinkAndDrive(22);
console.log(output);