// lista
const convidados = ["javascript"];

//utilizo push para acrescentar

convidados.push("Python");

console.log(convidados);
const curso = ["Java", "C", "C#"];
curso.push(...convidados);

console.log(curso);
curso.splice(3, 1);
console.log(curso);

//pilha

curso.push("javascript");
console.log(curso);
curso.push("PHP");
curso.push("");
console.log(curso);

curso[6] = "Html";
console.log(curso);

if (curso.length > 0) {
  curso.shift();
}
console.log(curso);
