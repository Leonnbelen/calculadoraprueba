let op1 = document.getElementById("op1");
    let op2 = document.getElementById("op2");
    let signo = document.getElementById("signo");
    let calculando = document.getElementById("calcular");
    let resultado = document.getElementById("resultado");

    calculando.addEventListener('click', calcular);

    function calcular() {
        let signito = signo.value;
        let ope1 = parseFloat(op1.value);
        let ope2 = parseFloat(op2.value);

        if ((signito == "+" || signito == "-" || signito == "/" || signito == "*") && !isNaN(ope1) && !isNaN(ope2)) {
            let resul;
            if (signito == "+") {
                resul = ope1 + ope2;
            } else if (signito == "-") {
                resul = ope1 - ope2;
            } else if (signito == "*") {
                resul = ope1 * ope2;
            } else {
                resul = ope1 / ope2;
            }
            resultado.innerText = "El resultado es = " + resul;
        } else {
            resultado.innerText = "Cálculo imposible";
        }
    }