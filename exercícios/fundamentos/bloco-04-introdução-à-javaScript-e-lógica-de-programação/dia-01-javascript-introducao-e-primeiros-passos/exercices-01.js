// EXERCÍCIO 01


const myNAme = "Thiago";

const birthCity = "Teresina";

let birthYear = 2000;

birthCity = "Parnaíba";

birthYear = 2030;

console.log(myNAme);
console.log(birthCity);
console.log(birthYear);

///////////////////////////////////

// EXERCÍCIO 02

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

///////////////////////////////////


// EXERCÍCIO 03

const base = 5;

let height = 8;

const area = base * height;

const perimeter = (base + height) * 2;

console.log(area);
console.log(perimeter);

///////////////////////////////////

// EXERCÍCIO 04

const score = 65;

if (score >= 80) {
    console.log("Parabéns, você foi aprovado(a)!");
} else if (score < 80 && score >= 60) {
    console.log("Você está na nossa lista de espera!");
} else {
    console.log("Você foi reprovado!");
}

///////////////////////////////////

// EXERCÍCIO 05

const currentHour = 5;

let message = "";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
} else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
}

console.log(message);

///////////////////////////////////

// EXERCÍCIO 06

let weekDay = "quarta-feira";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe :D");
} else {
    console.log("FINALMENTE, descanso merecido UwU");
}

///////////////////////////////////

// EXERCÍCIO 07

let student = "aprovada";

switch (student) {
    case "aprovada":
        console.log("Parabéns, você foi aprovado(a)!");
        break;

    case "lista":
        console.log("Você está na nossa lista de espera!");
        break;

    case "reprovada":
        console.log("Você foi reprovado!");
        break;

    default:
        console.log("valor não identificado.")
}