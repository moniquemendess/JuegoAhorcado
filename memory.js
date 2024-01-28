/* AÑADIENDO EL CONTENIDO AL HTM ABAJO */
const contentApp = document.querySelector("body"); // acendo el body

const template = () => ` 
<header>
<h1>Ahorcado P A Í S E S </h1>
</header>
<main>
<img id= "imagen" src="img/img0.png" alt="ahorcado"/>
<div>
<p id= "palavra_a_advinar">
</p>
<button id= "jugar">Obtener palavra</button>
<p id="resultado"></p>
<div id="letras">
    <button>a</button>
    <button>b</button>
    <button>c</button>
    <button>d</button>
    <button>e</button>
    <button>f</button>
    <button>g</button>
    <button>h</button>
    <button>i</button>
    <button>j</button>
    <button>k</button>
    <button>l</button>
    <button>m</button>
    <button>n</button>
    <button>o</button>
    <button>p</button>
    <button>q</button>
    <button>r</button>
    <button>s</button>
    <button>t</button>
    <button>u</button>
    <button>v</button>
    <button>w</button>
    <button>x</button>
    <button>y</button>
    <button>z</button>
</div>
</main>
`; // creando la estructura // <button> para las letras // la <p> esta sin y quando tenemos la palavra
// ponemos el en span

contentApp.innerHTML = template; /* ENVIANDO EL CONTENIDO AL HTML */

let palavraAleatoria; /* creando una variable global */
let cant_errores = 0; /* cuantas veces  me equivoqué */
let cant_aciertos = 0; /* cuantas letras  acerté */

/* [PARTE 02] hacer el array de palabras */
const palabras = [
  "Brasil" /* la posición 0 */,
  "Dinamarca" /* la posición 1 */,
  "Rusia" /* la posición 2 */,
  "Tailandia" /* la posición 3 */,
  "Noruega" /* la posición 4 */,
  "México" /* la posición 5 */,
  "Egipto" /* la posición 6 */,
];

/*  BUSCAR LOS BOTONES PARA JOGAR */
const btn = id("jugar"); /* quando empiza a jugar con click [PART 03]*/
const imagen = id("imagen");
const btn_letras = document.querySelectorAll("#letras button");

/* CLICK EN INICIAR JUEGO */
btn.addEventListener("click", iniciar);

function iniciar(event) {
  imagen.src = "img/img0.png";
  btn.disabled = true;
  cant_errores = 0; /* cuantas veces  me equivoqué */
  cant_aciertos = 0; /* cuantas letras  acerté */

  const parrafo = id("palavra_a_advinar");
  parrafo.innerHTML = ""; // vazio para generar los elementos en span

  const cantPalabras = palabras.length; /* saber las cantidad de palavras */
  const valAzar = obtener_random(
    0,
    cantPalabras
  ); /*function Random en zero hasta 7 por la const cantpalabras */

  palavraAleatoria = palabras[valAzar]; /* [PARTE 4]  Reeplaza aquí*/
  console.log("🚀 ~ iniciar ~ palavraAleatoria:", palavraAleatoria);
  const cant_letras = palavraAleatoria.length;

  for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].disabled = false;
  }

  for (let i = 0; i < cant_letras; i++) {
    const span = document.createElement("span");
    parrafo.appendChild(span);
  }
}

/* CLICK ADIVINAR LETRAS */

for (let i = 0; i < btn_letras.length; i++) {
  btn_letras[i].addEventListener("click", click_letras);
}

/* function para click en cada letra*/
function click_letras(event) {
  const spans = document.querySelectorAll("#palavra_a_advinar span");
  const button = event.target; /* cual de todas las letras, llamo la function*/
  button.disabled = true;

  const letra = button.innerHTML.toUpperCase();
  const palabra = palavraAleatoria.toUpperCase();

  let acerto = false;

  for (let i = 0; i < palabra.length; i++) {
    if (letra == palabra[i]) {
      /*la variable i es la posición de la letra  en la palara */
      /* que coincide con el span que tenemos que mostrarle esta letra*/
      spans[i].innerHTML = letra;
      cant_aciertos++;
      acerto = true;
    }
  }

  if (acerto == false) {
    cant_errores++;
    const source = `img/img${cant_errores}.png`;
    imagen.src = source;
  }

  if (cant_errores == 7) {
    id("resultado").innerHTML =
      "Perdiste \uD83D\uDE2D, la palabra era " +
      palavraAleatoria +
      "\uD83C\uDF0E";
    game_over();
  } else if (cant_aciertos == palavraAleatoria.length) {
    id("resultado").innerHTML = "!MUY BIEN, GANASTE EL JUEGO \uD83E\uDD29";
    game_over();
  }
}

/* FIM DE JUEGO */

function game_over() {
  for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].disabled = true;
  }

  btn.disabled = false;
}

game_over();
