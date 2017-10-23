/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [1, 'breno', 22,'masculino', 'lindo'  ]
undefined

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var minhafuncao=function (qualquer){
	return qualquer;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
minhafuncao(qualquer)[1]
"breno"

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function rec2 (array, indice) {
	return array[indice];
	
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var qualquer = [1, 'breno', 22,'masculino', 'lindo'  ]
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
rec2 (qualquer,0)
1
rec2 (qualquer,1)
"breno"
rec2 (qualquer,2)
22
rec2 (qualquer,3)
"masculino"
rec2 (qualquer,4)
"lindo"

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (nome){ 
	livros={
		'harry':{
			quantidadePaginas:100,
			autor:'desconhecido',
			editora:'hogwarts'
		},
		'prisioneiro':{
			quantidadePaginas:200,
			autor:'Breno',
			editora:'safra'
		},
		'atracao':{
			quantidadePaginas:50,
			autor:'sonia',
			editora:'teste'
		}

	};

	if(!nome){
		return livros;
    }
return livros[nome];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();
{harry: {…}, prisioneiro: {…}, atracao: {…}}
atracao
:
{quantidadePaginas: 50, autor: "sonia", editora: "teste"}
harry
:
{quantidadePaginas: 100, autor: "desconhecido", editora: "hogwarts"}
prisioneiro
:
{quantidadePaginas: 200, autor: "Breno", editora: "safra"}
__proto__
:
Object

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
book('atracao').quantidadePaginas
50

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro atracao é '+book('atracao').autor+'.')
 O autor do livro atracao é sonia.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('A editora do livro atracao é '+book('atracao').editora+'.')
VM2474:1 A editora do livro atracao é teste.
