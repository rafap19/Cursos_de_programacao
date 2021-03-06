/* ex final de reduce */

const numeros = [2, 3, 6, 5, 10];
let novoArrayNumeros = []

for (let i = 0; i < numeros.length; i++) {
    novoArrayNumeros.push(numeros[i] * 2)
  }

  const novoArrayMap = numeros.map(function(numero) {
    return numero * 2;
  });

  // console.log('arrayMapArrow', numeros.map(numero => numero * 2));

  const nomes = ['Ayrton', 'Teshima', 'Teste', 'Fulano de Tal'];


  const nomesMinusculos = nomes.map(nome => nome.toLowerCase())

  // console.log(nomes);
  // console.log(nomesMinusculos);


  let mult2 = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      mult2.push(numeros[i]);
    }
  }

  const numerosFiltrados = numeros.filter(numero => numero % 2 === 0);

  // console.log('numerosFiltrados', numerosFiltrados);


  const arrayMapFilter = numeros
    .filter(numero => numero % 2 === 0)
    .map(numero => numero * 2);

  // console.log('arrayMapFilter', arrayMapFilter); 


  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];
  }

  console.log('for norma', soma);

  // const numeros = [2, 3, 6, 5, 10];
  
  const somaReduce = numeros.reduce((valorAcumulador, valorArray) =>  valorAcumulador + valorArray, 0)

  console.log('somaReduce', somaReduce);





  const pessoas = [
    {
      nome: 'Ayrton',
      idade: 27
    },
    {
      nome: 'João',
      idade: 14
    },
    {
      nome: 'Maria',
      idade: 23
    },
    {
      nome: 'Joana',
      idade: 21
    },
    {
      nome: 'Lucas',
      idade: 32
    },
    {
      nome: 'Mateus',
      idade: 15
    },
    {
      nome: 'Isa',
      idade: 23
    },
    {
      nome: 'Luiza',
      idade: 17
    }
  ];

  /*
      {
        maiores: [
          {
            nome: 'Ayrton',
            idade: 27
          },
          {
            nome: 'Maria',
            idade: 23
          },
          {
            nome: 'Joana',
            idade: 21
          },
          {
            nome: 'Lucas',
            idade: 32
          },
          {
            nome: 'Isa',
            idade: 23
          },
        ],
        menores: [
          {
            nome: 'João',
            idade: 14
          },
          {
            nome: 'Mateus',
            idade: 15
          },
          {
            nome: 'Luiza',
            idade: 17
          }
        ]
      }
     */

      const pessoasAgrupadas = pessoas.reduce(function(valorAcumulador, valorArray) {
        const propMaiorOuMenor = valorArray.idade >= 18 ? 'maiores' : 'menores';
  
        valorAcumulador[propMaiorOuMenor].push(valorArray);
  
        return valorAcumulador;
       }, { maiores: [], menores: []})
  
       console.log('pessoasAgrupadas', pessoasAgrupadas);