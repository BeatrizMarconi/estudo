let carros = [
    {
        nome: "Gol",
        marca: "volkswagem",
        km: 123644,
        cor: "preta",
        ano: 2013
    },
    {
        nome: "Mobi",
        marca: "fiat",
        km: 239156,
        cor: "branca",
        ano: 2016
    },
    {
        nome: "Celta",
        marca: "gm",
        km: 90000,
        cor: "vermelha",
        ano: 2012
    },
    {
        nome: "Fiesta",
        marca: "ford",
        km: 156234,
        cor: "vermelha",
        ano: 2012
    },
    {
        nome: "Focus",
        marca: "ford",
        km: 186234,
        cor: "vermelha",
        ano: 2008
    },
    {
        nome: "Onix",
        marca: "gm",
        km: 50000,
        cor: "branca",
        ano: 2017
    },
    {
        nome: "Fox",
        marca: "volkswagem",
        km: 202000,
        cor: "cinza",
        ano: 2011
    },
    {
        nome: "Toro",
        marca: "fiat",
        km: 200,
        cor: "cinza",
        ano: 2022
    }
];

// let carrosimplificado = carros.map(carro=>{
//     return{
//         marca: carro.marca,
//         cor: carro.cor
//     }
// });

// console.log(carrosimplificado)

let carrosimplificado = carros.map(carro=>{
    return{
        marca: carro.marca,
        ano: carro.ano
    }
});

let carromaior2018 = carrosimplificado.filter(carrosmaior2018=>{
    return carrosmaior2018.ano >=2018
});

let carromenor2018 = carrosimplificado.filter(carrosmenor2018=>{
    return carrosmenor2018.ano < 2018
});

console.log(carromaior2018)
console.log(carromenor2018)