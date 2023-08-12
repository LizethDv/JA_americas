// Aquí se crea la función del clic en le botón
function muestra_oculta(id){
  // se declara y le dices que tiene que encontrar en los divs, 
  // los que tengan el parámetro id.
  let div = document.getElementById(id);
  // Quieres pedirle un sí o un no, entonces pones una condición
  if (div.style.display == "none"){
    div.style.display = "flex";
  }else{
    div.style.display = "none";
  }
}
