function checkAge(name, age) {
  // your code here
  var persona={
      name:name,
      age:age
  };

  if(persona.age <21){
    return "¡Para la casa, "+persona.name
  }
    return "¡Bienvenido, "+ persona.name
}

var output = checkAge('Adrian', 22);
console.log(output);