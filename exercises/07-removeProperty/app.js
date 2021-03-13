function removeProperty(obj, key) {
  // your code here
var obj = {
  name: 'Sam',
  age: 20
};
delete obj.age;

return obj

}

var borrar = removeProperty('obj', 'age');

console.log(borrar);