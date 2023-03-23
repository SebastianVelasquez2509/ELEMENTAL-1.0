let ataqueJugador
let ataqueEnemigo
let vidasEnemigo=3
let vidasJugador=3

function iniciarJuego()
{
    //OCULTAR LOS ELEMENTOS QUE AUN/YA NO NECESITO 
    let sectionSeleccionarAtaque=document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display="none"

    let sectionReiniciar=document.getElementById("reiniciar")
    sectionReiniciar.style.display="none"

    let botonMascotaJugador=document.getElementById("bt-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    //style es una propiedad de css y sirve para lo visual

    let btFuego=document.getElementById("bt-fuego")
    btFuego.addEventListener("click", ataqueFuego)
    let btAgua=document.getElementById("bt-agua")
    btAgua.addEventListener("click", ataqueAgua)
    let btTierra=document.getElementById("bt-tierra")
    btTierra.addEventListener("click", ataqueTierra)
    //VARIABLE REINICIO
    let btReiniciar=document.getElementById("bt-reiniciar")
    btReiniciar.addEventListener("click", reiniciar)
}
function seleccionarMascotaJugador()
{
    let sectionSeleccionarMascota=document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display="none"
    let botonSeleccionarDefinitivo=document.getElementById("botonSeleccionarDefinitivo")
    botonSeleccionarDefinitivo.style.display="none"
    let subtituloOculto=document.getElementById("subtituloOculto")
    subtituloOculto.style.display="none"
    

    let sectionSeleccionarAtaque=document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display="block"


    //getElementById es para hacer referencia a algo por su id
    
    let inputSquirtle= document.getElementById("squirtle")
    let inputCharmander= document.getElementById("charmander")
    let inputBulbasaur= document.getElementById("bulbasaur")
    let spannombreMascotaJugador= document.getElementById("nombreMascotaJugador")
    
    
    if (inputSquirtle.checked)
    {spannombreMascotaJugador.innerHTML = "Squirtle "}
    else if(inputCharmander.checked)
    {spannombreMascotaJugador.innerHTML = "Charmander "}
    else if(inputBulbasaur.checked)
    {spannombreMascotaJugador.innerHTML = "Bulbasaur "}

    else {alert("Selecciona una Mascota")}

    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo()
{
    let mascotaAleatoria= aleatorio(1,3)
    let spanMascotaEnemigo=document.getElementById("MascotaEnemigo")

    if(mascotaAleatoria==1){spanMascotaEnemigo.innerHTML="Squirtle "}
    else if(mascotaAleatoria==2){spanMascotaEnemigo.innerHTML="Charmander "}
    else if(mascotaAleatoria==3){spanMascotaEnemigo.innerHTML="Bulbasaur "}

}

function ataqueFuego(){
    ataqueJugador="FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador="AGUA"
    ataqueAleatorioEnemigo()

}
function ataqueTierra(){
    ataqueJugador="TIERRA"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio=aleatorio(1,3)

    if (ataqueAleatorio==1){
        ataqueEnemigo="FUEGO"}
    else if (ataqueAleatorio==2){
        ataqueEnemigo="AGUA"}
    else
    {ataqueEnemigo="TIERRA"}

    COMBATE()
}

function COMBATE(){
    let spanvidasJugador=document.getElementById("vidasJugador")
    let spanvidasEnemigo=document.getElementById("vidasEnemigo")
    
    if(ataqueEnemigo==ataqueJugador)
    crearMensaje("EMPATE🤝")

    else if(ataqueJugador=="FUEGO"&&ataqueEnemigo=="TIERRA")
        {crearMensaje("GANASTE🥳")
        vidasEnemigo--
        spanvidasEnemigo.innerHTML=vidasEnemigo
    } 
    else if(ataqueJugador=="AGUA"&&ataqueEnemigo=="FUEGO")
        {crearMensaje("GANASTE🥳")
        vidasEnemigo--
        spanvidasEnemigo.innerHTML=vidasEnemigo
    }
    else if(ataqueJugador=="TIERRA"&&ataqueEnemigo=="AGUA")
        {crearMensaje("GANASTE🥳")
        vidasEnemigo--
        spanvidasEnemigo.innerHTML=vidasEnemigo
    }
    else {crearMensaje("PERDISTE🤣")
        vidasJugador--
        spanvidasJugador.innerHTML=vidasJugador
    }
    revisarVidas()
    revisarVidasFinal()
}

function revisarVidas(){
    if (vidasEnemigo==0)
    {alert("GANASTE EL COMBATE")}
    else if (vidasJugador==0)
    {alert("PERDISTE EL COMBATE")}  
}
function revisarVidasFinal(){
    if (vidasEnemigo==0)
    {crearMensajeFinal("FELICITACIONES, GANASTE EL COMBATE 🐱‍💻")}
    else if (vidasJugador==0)
    {crearMensajeFinal("LO SIENTO, PERDISTE EL COMBATE 😢")}  
}


function crearMensaje(resultado)
{
    let sectionMensajes=document.getElementById("mensajes")

    let parrafo=document.createElement("p")
    parrafo.innerHTML="Tu mascota ataco con "+ataqueJugador+ " la mascota del enemigo ataco con "+ataqueEnemigo+"--->"+resultado

    sectionMensajes.appendChild(parrafo)
    //appendChild es para agregar un nodo nuevo 
}

function crearMensajeFinal(resultadoFinal)
{
    let sectionMensajes=document.getElementById("mensajes")

    let parrafo=document.createElement("p")
    parrafo.innerHTML=resultadoFinal

    sectionMensajes.appendChild(parrafo)
    //appendChild es para agregar un nodo nuevo 

    let btFuego=document.getElementById("bt-fuego")
    btFuego.disabled=true
    let btAgua=document.getElementById("bt-agua")
    btAgua.disabled=true
    let btTierra=document.getElementById("bt-tierra")
    btTierra.disabled=true

    let sectionReiniciar=document.getElementById("reiniciar")
    sectionReiniciar.style.display="block"
}

function reiniciar (){
    location.reload ()
    //SIRVE PARA REFRESCAR UNA PAGINA WB (location.reload ())
}

function aleatorio(min,max){return Math.floor(Math.random()*(max-min+1)+min)}

window.addEventListener("load", iniciarJuego)