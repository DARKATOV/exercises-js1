let porcentaje = "%";

let numberOfStudents = 20;
let p1 ="Porcentaje de estudiantes: "

let numberOfMentors = 2;
let p2 ="Porcentaje de mentores : "

const total = numberOfStudents + numberOfMentors

const porc1 = numberOfStudents * 100 / total
const porc2 = numberOfMentors * 100 / total

const final1 = Math.round(porc1);
const final2 = Math.round(porc2);

const r1 = `${p1} ${final1} ${porcentaje} `;
const r2 = `${p2} ${final2} ${porcentaje} `;

console.log(r1);
console.log(r2);
