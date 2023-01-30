var i = 0;
function barra() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("mibarra");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function openForm() {
  document.getElementById("miformulario").style.display = "block";
}

function closeForm() {
  document.getElementById("miformulario").style.display = "none";
}
function enviarformulario(){
      document.formulario.submit();
      closeForm();
 }
function experiencia(){
  barra();
  document.getElementById("exp").style.display="block";
  document.getElementById("est").style.display="none";
  document.getElementById("hab").style.display="none";
  document.getElementById("info").style.display="none"; 
}
function estudios(){
  barra();
  document.getElementById("exp").style.display="none";
  document.getElementById("est").style.display="block";
  document.getElementById("hab").style.display="none";
  document.getElementById("info").style.display="none"; 
}
function habilidades(){
  barra();
  document.getElementById("exp").style.display="none";
  document.getElementById("est").style.display="none";
  document.getElementById("hab").style.display="block";
  document.getElementById("info").style.display="none"; 
}
function informacion(){
  barra();
  document.getElementById("exp").style.display="none";
  document.getElementById("est").style.display="none";
  document.getElementById("hab").style.display="none";
  document.getElementById("info").style.display="block"; 
}
