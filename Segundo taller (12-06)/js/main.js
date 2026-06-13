const inputNombre = document.querySelector("#nombre");
const inputNota1 = document.querySelector("#nota1");
const inputNota2 = document.querySelector("#nota2");
const inputNota3 = document.querySelector("#nota3");
const btnEvaluar = document.querySelector("#btn-evaluar");
const txtResultado = document.querySelector("#resultado");

btnEvaluar.addEventListener("click", () => {
    let nombre = inputNombre.value.trim();
    let n1 = parseFloat(inputNota1.value);
    let n2 = parseFloat(inputNota2.value);
    let n3 = parseFloat(inputNota3.value);

    if (nombre === "" || isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        txtResultado.textContent = "* Advertencia: Faltan datos o son inválidos.";
        return;
    }

    let notaFinal = (n1 * 0.35) + (n2 * 0.35) + (n3 * 0.30);

    let rendimiento = "Reprobado";
    if (notaFinal >= 4.5) {
        rendimiento = "Excelente desempeño";
    } else if (notaFinal >= 3.0) {
        rendimiento = "Aprobado";
    }

    txtResultado.innerHTML = `
        * Estudiante: ${nombre.toUpperCase()}<br>
        * Nota Definitiva: ${notaFinal.toFixed(1)}<br>
        * Estado: [ ${rendimiento.toUpperCase()} ]
    `;
});