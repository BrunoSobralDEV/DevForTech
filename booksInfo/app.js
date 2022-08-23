const readline = require('readline-sync');
const livros = require('./database');


const entradaInicial = readline.question('Deseja buscar um livro? [S/N]: ')

// se for Sim, mostra as categorias disponíveis
if (entradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias disponíveis: ')
  console.log(
    '1- Produtividade', 
    '2- História brasileira', 
    '3- Américas', 
    '4- Estilo de vida', 
    '5- Tecnologia'
    );

    const entradaCategoria = readline.question('Qual categoria: ')

    const retorno = livros.filter(
      livro => livro.categoria === entradaCategoria
    )

    console.table(retorno)
} else {
  const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas);
  console.log('Essas são todos os livros disponíveis: ');
  console.table(livrosOrdenados);
}
