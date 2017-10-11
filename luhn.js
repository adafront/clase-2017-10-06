var numero = "";

var dobles = [0,2,4,6,8,1,3,5,7,9],
  total = 0,
  esSegundoDigito = true;

for (var i = numero.length - 1; i >= 0; i--) {
  total += (esSegundoDigito = !esSegundoDigito) ? dobles[parseInt(numero.charAt(i))] : parseInt(numero.charAt(i));
}

if (total % 10 === 0) {
  console.log("bien ahi");
} else {
  console.log("mala");
}