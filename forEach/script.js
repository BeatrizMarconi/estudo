// let nomes = ['Marcia','Roberta','Nicolas', 'Ivis','Eliane','Beatriz','Lucas','Vania','joabe','jair'];

// nomes.forEach(nome => {
//     console.log(`Olá meu nome é ${nome}`)
// });

let carros = [{
    "marca":"Renault",
    "ano": 2000,
    "modelo":"Clio",
    "km" : "136.000"
},
{
    "marca":"Fiat",
    "ano": 1995,
    "modelo":"Uno",
    "km" : "180.000"
},
{
    "marca":"Mercedes",
    "ano": 2011,
    "modelo":"CLS",
    "km" : "178.000"
},
{
    "marca":"Chevrolet",
    "ano": 2012,
    "modelo":"Celta",
    "km" : "98.000"
},
{
    "marca":"Ford",
    "ano": 2022,
    "modelo":"f 150 raptor ",
    "km" : "00"
}]

carros.forEach((carro) => {
    console.log(`A marca do carro é ${carro.marca}, Modelo ${carro.modelo}, Ano ${carro.ano}, e sua quilometragem é de ${carro.km}.`)
});