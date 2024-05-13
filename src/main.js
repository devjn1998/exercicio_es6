const alunos = [
    { nome: "Juan", nota: 6.7 },
    { nome: "Laura", nota: 9.0 },
    { nome: "Margareth", nota: 8.0 },
    { nome: "Luiz", nota: 4.4 },
    { nome: "Gabriel", nota: 5.8 },
    { nome: "Luccas", nota: 4.5 },
    { nome: "Gabrielli", nota: 3.8 },
    { nome: "Felipe", nota: 5.1 },
    { nome: "Rhudson", nota: 5.5 },
    { nome: "Fabiano", nota: 6.1 },
    { nome: "Aline", nota: 8.1 },
    { nome: "Clarisse", nota: 8.8 },
]
console.log("=======================================================")
console.log("Nome e nota dos alunos:")
console.log("=======================================================")
for (let i = 0; i < alunos.length; i++) {
    console.log(`nome: ${alunos[i].nome} | nota: ${alunos[i].nota}`)
}
console.log("=======================================================")

setTimeout(function (){
    console.log("Alunos aprovados:")
    console.log("=======================================================")  
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nota >= 6.0) {
            console.log(`A nota de ${alunos[i].nome} foi de ${alunos[i].nota} // maior ou igual que 6.0`);
        }
    }
    console.log("=======================================================")
}, 1000)

