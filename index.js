const estilos = {
  width: "80%",
  height: "600px",
  textAlign: "center",
  margin: "15px 0 15px 0",
  padding: "5px",
  backgroundColor: "#d8dfe8",
  padding: "60% 10px",
  borderRadius: "5px",
  border: "1px solid #0a3871",
  color: "#0a3871",
  wordBreak: "break-all",
};

const estilosTitulo = {
  color: "#0a3871",
};

function cifrarTexto() {
  const textoUsuario = document.getElementById("textoUsuario").value;

  // Verifica si el texto contiene mayúsculas o caracteres especiales
  if (/[A-Z!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(textoUsuario)) {
    document.getElementById("popupMessage").innerText =
      "No se aceptan mayúsculas ni caracteres especiales.";
    document.getElementById("customPopup").style.display = "block";
    return;
  }

  // Codifica en Base64
  const textoCifrado = btoa(textoUsuario);

  // document.getElementById(
  //   "popupMessage"
  // ).innerHTML = `<h3>Texto Cifrado: </h3> <p>${textoCifrado}</p>`;
  // document.getElementById("customPopup").style.display = "block";

  const resultadoCifrado = document.getElementById("resultadoCifrado");
  resultadoCifrado.textContent = textoCifrado;
  Object.assign(resultadoCifrado.style, estilos);

  const tituloCifrado = document.getElementById("titulo-resultado");
  tituloCifrado.textContent = "Texto cifrado";
  Object.assign(tituloCifrado.style, estilosTitulo);

  document.getElementById("textoUsuario").value = "";

  document.querySelector(".aviso-mensaje > div").style.display = "none";
  // document.getElementById("resultadoCifrado").style= {word-break:break-all}

  // document.querySelector("section").appendChild(parrafoCifrado);
  // document.getElementById("textoUsuario").value = textoCifrado;
  // alert("Texto cifrado: " + textoCifrado);
}

function copiarTexto() {
  const textoCifrado = document
    .getElementById("resultadoCifrado")
    .textContent.trim();

  const textarea = document.createElement("textarea");
  textarea.value = textoCifrado;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

// Función para descifrar texto
function descifrarTexto() {
  const textoUsuario = document.getElementById("textoUsuario").value;
  const textoCifrado = textoUsuario;

  // Decodifica desde Base64
  const textoDescifrado = atob(textoCifrado);

  const resultadoDescifrado = document.getElementById("resultadoCifrado");

  resultadoDescifrado.textContent = textoDescifrado;
  const tituloDescifrado = document.getElementById("titulo-resultado");
  tituloDescifrado.textContent = "Texto descifrado";
  Object.assign(tituloDescifrado.style, estilosTitulo);
  // tituloDescifrado.style.color = "#0a3871";

  Object.assign(resultadoDescifrado.style, estilos);
  document.getElementById("textoUsuario").value = "";

  // document.getElementById(
  //   "popupMessage"
  // ).innerHTML = `<h3> Texto Descifrado: </h3> <p>${textoDescifrado}</p>`;
  // document.getElementById("customPopup").style.display = "block";
}

function closePopup() {
  // Close the custom popup
  document.getElementById("customPopup").style.display = "none";
}
