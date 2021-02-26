
var nombre = document.getElementById("nombre")
var apellido = document.getElementById("apellido")
var direccion = document.getElementById("direccion")
var telefono = document.getElementById("telefono")
var email = document.getElementById("email")
var error = document.getElementById("error")
var resul = document.getElementById("resul")
var vacio = document.getElementById("vacio")
error.style.color= 'red'; 
vacio.style.color= 'red';

function comprobar(){

    var message = "";

    if(nombre.value == ""){
        message+="Nombre no ingresado <br>"
    }
  
    if(apellido.value == ""){
        message+="Apellido no ingresado <br>";
    }
  
    if(direccion.value == ""){
        message+="Direccion no ingresada <br>";
    }

    if(telefono.value == ""){
        message+="Telefono no ingresado <br>";
    }

    if(email.value == ""){
        message+="Email no ingresado <br>";
    }
    
   error.innerHTML = message;
}

function resultado(){

    var formulario = document.cuestionario;

    var num = 0;
    if(formulario.a1.checked){
        num++;
    }
    if(formulario.b1.checked){
        num++;
    }
    if(formulario.c1.checked){
        num++;
    }
    if(formulario.d1.checked){
        num++;
    }
    resul.innerHTML="Su puntaje es: " + num;
}

function Numero(){
    var numero = document.getElementById("numero");
    if(numero.value == ""){
        vacio.innerHTML="no ha ingresado un numero";
    }
    else{
        if(!isNaN(numero.value)){ 
            vacio.innerHTML="la cantidad de digitos del numero es: "+ numero.value.length;
        }else{
            alert("No es un numero");
        } 
    }
}

function navegar(){
    var navegador = document.navegador;
    var url;
    if(navegador.google.checked){
        url = "http://www.google.com";
    }
    if(navegador.bing.checked){
        url = "http://www.bing.com";
    }
    if(navegador.yahoo.checked){
        url = "http://www.yahoo.com";
    }
    if(navegador.ask.checked){
        url = "http://www.ask.com";
    }
    window.location.href = url;
}