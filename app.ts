
// Desafio 1



class Employee{
    code: number
    name: string

    constructor(code: number, name: string){
        this.name = name
        this.code = code
    }
}

let employee = new Employee(1,"test");

employee.code = 10;
employee.name = "John";

console.log(employee.name)
console.log(employee.code)


// Desafio 2

interface Pessoa {
    nome: string;
    idade: number;
    profissao: string;
}

let pessoa1: Pessoa = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
};

let pessoa2: Pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
};

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
};

// Desafio 3

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = '0';

function somarAoSaldo(valor: string) {
    campoSaldo.innerHTML = (parseFloat(campoSaldo.innerHTML) + parseFloat(valor)).toString();
}

function limparSaldo() {
    campoSaldo.innerHTML = '0';
}

botaoAtualizar.addEventListener('click', function () {
    let soma = (document.getElementById('soma') as HTMLInputElement).value;
    somarAoSaldo(soma);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

