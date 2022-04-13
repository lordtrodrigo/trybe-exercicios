// EXERCÍCIO 01 - CALCULADORA

const a = 5;

const b = 5;

operador = "adição";

let resultado;

// COM IF/ELSE:

// if (operador === "adição") {
//     resultado = a + b;
// } else if (operador === "subtração") {
//     resultado = a - b;
// } else if (operador === "multiplicação") {
//     resultado = a * b;
// } else if (operador === "divisão") {
//     resultado = a / b;
// } else if (operador === "módulo") {
//     resultado = a % b;
// } else {
//     console.log("operador não identificado.")
// }




// COM SWITCH - CASE:

switch (operador) {
    case "adição":
        resultado = a + b;
        console.log(resultado);
        break;
    
    case "subtração":
        resultado = a - b;
        console.log(resultado);
        break;
    
    case "multiplicação":
        resultado = a * b;
        console.log(resultado);
        break;

    case "divisão":
        resultado = a / b;
        console.log(resultado);
        break;

    case "módulo":
        resultado = a % b;
        console.log(resultado);
        break;

    default:
        console.log("Operador não identificado.")
}

//////////////////////////////////////////////////


// EXERCÍCIO 02 - MAIOR DE DOIS NÚMEROS

const x = 5;

const y = 7;

if (x > y) {
    console.log("o A é maior");
} else if (x < y) {
    console.log("o B é menor");
} else {
    console.log("os dois são iguais");
}


//////////////////////////////////////////////////


// EXERCÍCIO 03 - MAIOR DE 3 NÚMEROS

const n = 5;

const m = 5;

const o = 3;




if (n > m && n > o) {
    console.log("O 'n' é o maior");
} else if (m > n && m > o) {
    console.log("O 'm' é o maior");
} else if (n === m && m === o) {
    console.log("Os três são iguais");
} else if (o > n && o > m){
    console.log("O 'o' é o maior");
} else {
    console.log("Existem dois números iguais");
}

//////////////////////////////////////////////////


// EXERCÍCIO 04 - POSITIVO E NEGATIVO

const value = 0;

if (value > 0) {
    console.log("positive");
} else if (value < 0) {
    console.log("negative");
} else {
    console.log("zero");
}


//////////////////////////////////////////////////


// EXERCÍCIO 05 - ÂNGULOS

const anguloInterno1 = 60;

const anguloInterno2 = 60;

const anguloInterno3 = 60;

let somaAngulosInternos = anguloInterno1 + anguloInterno2 + anguloInterno3;

if (somaAngulosInternos === 180) {
    console.log(true);
} else {
    console.log(false);
}


//////////////////////////////////////////////////


// EXERCÍCIO 06 - XADREZ

// king = "rei";

// queen = "rainha";

// rook = "torre";

// bishop = "bispo";

// knight = "cavalo";

// pawn = "peão";

let part = "BISPO";

// if (part.toLowerCase() === "rei") {
//     console.log("Uma casa para todas as direções.");
// } else if (part.toLowerCase() === "rainha") {
//     console.log("console.log("Todas as direções.");
// } else if (part.toLowerCase() === "torre") {
//     console.log("Vertical e horizontal.");
// } else if (part.toLowerCase() === "bispo") {
//     console.log("Diagonal.");
// } else if (part.toLowerCase() === "cavalo") {
//     console.log("Em 'L'");
// } else if (part.toLowerCase() === "Peão.") {
//     console.log("Uma ou duas casas à frente.");
// }

switch (part.toLowerCase()) {
    
    case "rei":
        console.log("Uma casa para todas as direções.");
        break;

    case "rainha":
        console.log("Todas as direções.");
        break;
            
    case "torre":
        console.log("Vertical e horizontal.");
        break;
    
    case "rei":
        console.log("Uma casa para todas as direções.");
        break;
    
    case "rei":
        console.log("Uma casa para todas as direções.");
        break;
    
    case "rei":
        console.log("Uma casa para todas as direções.");
        break;

}






