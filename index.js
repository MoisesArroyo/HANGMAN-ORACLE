let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreto = "";
let letras = [];

let errores = 8;

//Palabra secreta 

function escogerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreto = palabra;
    console.log(palabraSecreto);
}
//ComprobarLetras
function comprobarLetra(key){
    let estado = false;
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
        letras.push(key);
        console.log(key);
        return estado;
    }else{
        estado=true;
        console.log(key);
        return true;
    }
}
function anadirLetraErrores(){
    errores -= 1;
    console.log(errores);
}


//Iniciar   
function iniciarJuego(){
    document.getElementById("iniciar-juego").style.display = "none";
    escogerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();
        
        if(comprobarLetra(letra) && palabraSecreto.includes(letra)){
            for(let i = 0; i<palabraSecreto.length; i++){
                if(palabraSecreto[i] === letra){
                    escribirLetraCorrecta(i);
                }
            }
        }else{
            anadirLetraErrores(letra);
            escribirLetraIncorrecta(letra, errores);
        }
    }
}