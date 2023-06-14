function limpiarFormulario() {
  document.getElementById("cantidad").value = "";
  document.getElementById("convertirDolar").value = "";
  document.getElementById("resultado").textContent = "";
}

function limpiarFormulario2() {
  document.getElementById("convertirDolar2").value = "";
  document.getElementById("cantidad2").value = "";
  document.getElementById("resultado2").textContent = "";
}

document.getElementById("buttonConvertir").addEventListener("click", function(event) {
  event.preventDefault();

  var cantidad = parseFloat(document.getElementById("cantidad").value);
  var convertir = parseFloat(document.getElementById("convertirDolar").value);

  var resultado = cantidad / convertir;

  document.getElementById("resultado").textContent = resultado.toFixed(2);
});
document.getElementById("buttonConvertir2").addEventListener("click", function(event) {
  event.preventDefault();

  var convertir = parseFloat(document.getElementById("convertirDolar2").value);
  var cantidad = parseFloat(document.getElementById("cantidad2").value);

  var resultado2 = convertir * cantidad;

  document.getElementById("resultado2").textContent = resultado2.toFixed(2);
});

