// let nomes = ['Marcia','Roberta','Nicolas', 'Ivis','Eliane','Beatriz','Lucas','Vania','joabe','jair'];

// nomes.forEach(nome => {
//     console.log(`Olá meu nome é ${nome}`)
// });

let carros = [{
    "marca":"Renault",
    "ano": 2000,
    "modelo":"Clio",
    "km" : "136.000"
}]

carros.forEach((carro) => {
    console.log(`A marca do carro é ${carro.marca}, Modelo ${carro.modelo}, Ano ${carro.ano}, e sua quilometragem é de ${carro.km}.`)
});