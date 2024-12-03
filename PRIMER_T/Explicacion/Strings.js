let persona = "Zahira";
let city = "Malaga";
let str = `hi ${persona}, are you in ${city}`;
console.log(str);

let str2 = `hi ${persona},
 are you in:
  ${city}`;
  console.log(str2)

let str3 = `hi ${persona}, are you in ${city}`;

(function(a,b){
  console.log("se suma", a,b);
  return a + b;
})(2,3);

let suma = (a,b) => {
  return a +b;
}
suma(2,3)
