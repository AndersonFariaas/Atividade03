// ----- 01 ----- //

let motos = ['Bros', 'Fan', 'Titan', 'Start', 'Xre'];
console.log(motos);

//----- 02 -----//

motos.unshift('Biz');
console.log(motos);

//----- 03 ----//

motos.pop();
console.log(motos);

//----- 04 ----//

motos.push('Xre', 'Pop');
console.log(motos);

// ----- 05 ---- //

motos.shift();
console.log(motos);

// ----- 06 ---- //

let numbers = [7,5,6,3,8,9,2,1,4];
numbers.sort();
console.log(numbers);

// ---- 07 ------ //

let pessoa = {
    nome: 'Anderson',
    idade: 28,
    profissao: 'Programador'
};
console.log(pessoa);

// ---- 08 ---- //

pessoa.origem = 'Brasileiro';
console.log(pessoa);

// ----- 09 ----- //

delete pessoa.origem;

// ----- 10 ---- //

console.log(pessoa);

// ----- 11 ----- //

let cadastro = [
    {
        nome: 'Allan',
        idade: 16,
        telefone: '4002-8922',
        amigos: ['Ellen', 'Lais', 'Anderson', 'Jonas']
    },
    {
        nome: 'Ellen',
        idade: 22,
        telefone: '4002-8922',
        amigos: ['Lais', 'Allan', 'Lucas', 'Anderson']
    },
    {
        nome: 'Lais',
        idade: 26,
        telefone: '4002-8922',
        amigos: ['Allan', 'Ellen', 'Anderson', 'Jonas']
    },
    {
        nome: 'Jonas',
        idade: 30,
        telefone: '4002-8922',
        amigos: ['Thiago', 'Anderson', 'Allan', 'Ellen']
    },
    {
        nome: 'Thiago',
        idade: 30,
        telefone: '4002-8922',
        amigos: ['Jonas', 'Anderson', 'Allan', 'Lais']
    }
];

// ----- 12 ---- //

console.log(cadastro[0].amigos[3]);
console.log(cadastro[1].amigos[2]);
console.log(cadastro[2].amigos[1]);
console.log(cadastro[3].amigos[0]);
console.log(cadastro[4].amigos[1]);


