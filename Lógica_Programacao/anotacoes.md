# Ciclo de desenvolvimento de Software:

1 - idealização - Uma ideia surge


2 - Analise de Requisitos - Aonde é feito todo planejamento do projeto


3 - Validação de Requisitos -  Aonde os requisitos são validados,caso o cliente não goste voltamos para a etapa 2


4 - Testes - Aonde após aprovação do cliente podemos finalmente começar a codar pois já sabemos exatamente oque o cliente quer que seja desenvolvido.


5 - Entrega


# Resolvendo Problemas com lógica


## Intro:

A resolução de problemas de lógica, no começo parecem impossíveis de resolver.
Porém com essa técnica que aprendi, parecem que alguns problemas ficam
mais fáceis de organizar a lógica para resolvê-los

## Antes de tudo:


É necessário ler com calma o problema, se possível em voz alta.
Entender o que se pede é a parte mais importante.

### Método 5Qs:

### Esse método é composto por 5 questões:

##### Quais são os dados de entrada necessários ?
##### O que devo fazer com estes dados ?
##### Quais são as restrições deste problema ?
##### Qual é o resultado esperado ?
##### Qual é sequência de passos para chegar ao resultado esperado (Algoritmo final)?



## Aplicando o método a um problema:

Escreva um programa que ao iniciar gera um valor aleatório de 1 a 10 e permite que o usuário “chute” um número até que o valor aleatório gerado no início do programa seja chutado corretamente.
O programa deve informar se o chute foi acima, abaixo ou igual ao valor aleatório gerado no início do programa.

### 1 - Quais são os dados de entrada necessários ?

valorAleatorio = (1 a 10)

valorUsuario = (1 a 10)

### 2 - O que devo fazer com estes dados ?

Comparar o valorAleatorio e o valorUsuario

### 3 - Quais são as restrições deste problema ?

Os valores deveram ser entre 1 e 10
O usuário deverá ser capaz de jogar quantas vezes quiser
o programa não deve ser finalizado até que um valor seja chutado corretamente

### 4 - Qual é o resultado esperado ?

Retornar se a comparação está exata, caso não, informar se o valor chutado foi maior, menor ou igual ao valor aleatório gerado no início do programa

### 5 - Qual é sequência de passos para chegar ao resultado esperado (Algoritmo final)?

O computador gerar um número aleatório
Solicitar ao usuário que entre com um número
Armazenar esse número
Comparar esse número com o número aleatório gerado
Retornar na tela se o número do usuário foi igual ao numero gerado
Caso não seja o valor correto, retornar se foi acima ou abaixo do número esperado.

