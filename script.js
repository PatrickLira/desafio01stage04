let number1 = prompt("Digite o primeiro número")
let number2 = prompt("Digite o segundo número")

let soma = Number(number1) + Number(number2) 
let sub = Number(number1) - Number(number2) 
let multi = Number(number1) * Number(number2) 
let div = Number(number1) / Number(number2) 
let rest = Number(number1) % Number(number2)


let resultado = Number(soma) % 2 == 0 ? "par" : "impar" 

let difIgual = Number(number1) == Number(number2) ? "iguais" : "diferentes"

alert("A soma dos dois números é: " + soma)
alert("A subtração dos dois números é: " + sub)
alert("O produto dos dois números é: " + multi)
alert("A razão dos dois números é: " + div.toFixed(2))
alert("O resto da divisão dos dois números é: " + rest)
alert("A soma é " + resultado)
alert("Os números inseridos são " + difIgual)