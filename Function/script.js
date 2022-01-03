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

// function retornaMarca (marca){
//     let retornaMarcaCarros = carros.filter(carro=>{
//         return carro.marca == marca
//     });
//     console.log(retornaMarcaCarros);
// }
// retornaMarca('gm')


// function retornaNomeIdade (nome,idade){
//     console.log(`Olá! Me chamo ${nome} e tenho ${idade} anos de idade.`)
// }

// retornaNomeIdade('Junior', 87);



// function retornaIMC (peso,altura){

//     let IMC= peso/(altura*altura)
//     console.log(`Seu IMC é: ${IMC}.`);

// }

// retornaIMC (98.000,1.55);


// let animais = ['Baleia','Macaco','Tubarão','Ovelha','Onça','Jacaré','Cachorro'];

// function adicionaFinal (nomeAnimal1){
//     animais.push(nomeAnimal1)
// };

// function adicionaInicio (nomeAnimal2){
//     animais.unshift(nomeAnimal2)
// };

// function substituiAnimal(nomeAnimal3){
//     animais[1] = nomeAnimal3
// };

// adicionaFinal('Morcego');
// adicionaInicio('Peixe-Palhaço');
// substituiAnimal('Macaco-Prego');

// console.log(animais);

function adicionaCarros (nome){
    carros.push (nome)
    console.log(carros);
};

adicionaCarros(
    {
        nome: "Clio",
        marca: "Renault",
        km: 183000,
        cor: "Cinza",
        ano: 2001
    }
);
