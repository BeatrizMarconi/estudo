// let carros = [
//     {
//         nome: "Gol",
//         marca: "volkswagem",
//         km: 123644,
//         cor: "preta",
//         ano: 2013
//     },
//     {
//         nome: "Mobi",
//         marca: "fiat",
//         km: 239156,
//         cor: "branca",
//         ano: 2016
//     },
//     {
//         nome: "Celta",
//         marca: "gm",
//         km: 90000,
//         cor: "vermelha",
//         ano: 2012
//     },
//     {
//         nome: "Fiesta",
//         marca: "ford",
//         km: 156234,
//         cor: "vermelha",
//         ano: 2012
//     },
//     {
//         nome: "Focus",
//         marca: "ford",
//         km: 186234,
//         cor: "vermelha",
//         ano: 2008
//     },
//     {
//         nome: "Onix",
//         marca: "gm",
//         km: 50000,
//         cor: "branca",
//         ano: 2017
//     },
//     {
//         nome: "Fox",
//         marca: "volkswagem",
//         km: 202000,
//         cor: "cinza",
//         ano: 2011
//     },
//     {
//         nome: "Toro",
//         marca: "fiat",
//         km: 200,
//         cor: "cinza",
//         ano: 2022
//     }
// ]

// let volks = carros.filter(carrosvolks =>{
//     return carrosvolks.marca == "volkswagem"
// });
// console.log('========Carros Volks======')
// volks.forEach(carro =>{    
//     console.log(`Carro ${carro.nome}, marca ${carro.marca}, km ${carro.km}, cor ${carro.cor}, ano ${carro.ano}`)
// });

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
]

let ford = carros.filter(autoford=>{
    return autoford.marca == "ford"
});
let ford_e_preto = carros.filter(autoford_e_preto=>{
    return autoford_e_preto.marca == "ford" && autoford_e_preto.cor == "preta"
});
let ford_e_km = carros.filter(autoford_e_km=>{
    return autoford_e_km.marca == "ford" && autoford_e_km.km < 160000
});

console.log('========Carros FORD======')
ford.forEach(carroford =>{    
    console.log(`Carro ${carroford.nome}, marca ${carroford.marca}, km ${carroford.km}, cor ${carroford.cor}, ano ${carroford.ano}`)
});

console.log('========Carros FORD e Pretos======')
ford_e_preto.forEach(carrosford_e_preto =>{    
    console.log(`Carro ${carrosford_e_preto.nome}, marca ${carrosford_e_preto.marca}, km ${carrosford_e_preto.km}, cor ${carrosford_e_preto.cor}, ano ${carrosford_e_preto.ano}`)
});

console.log('========Carros FORD e menos de 160mil KM======')
ford_e_km.forEach(carroford_e_km =>{    
    console.log(`Carro ${carroford_e_km.nome}, marca ${carroford_e_km.marca}, km ${carroford_e_km.km}, cor ${carroford_e_km.cor}, ano ${carroford_e_km.ano}`)
});

