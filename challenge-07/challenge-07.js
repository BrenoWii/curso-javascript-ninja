/*
Crie um array com 5 items (tipos variados).
*/
var variados = ['breno', 'william', 'branco' ,1.95,22];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function additem (valor){
	variados.push(valor) ;

}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
additem (['teste',{data:10, mes:12,ano:2000}]); 

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é '+ variados[5][1].data );
VM142:1 O segundo elemento do segundo array é 10

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem '+ variados.length + 'itens.') 
O primeiro array tem 6itens.
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem '+variados[5].length+'itens')
VM226:1 O segundo array tem 2itens

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
function teste (){
	var cont=10;
	
	while (cont<=20){
		result= cont %2;
		if(result === 0 ){
			console.log(cont);
			
        }
	cont++;
    }

}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
function teste (){
	var cont=10;
	
	while (cont<=20){
		result= cont %2;
		if(result === 1 ){
			console.log(cont);
			
        }
	cont++;
    }

}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
// ?

console.log( 'Números ímpares entre 111 e 125:' );
// ?
