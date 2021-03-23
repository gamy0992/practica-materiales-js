var peso = prompt("ingrese su peso en kg")
var estatura = prompt("ingrese su estatura en cm")
var imc = peso / Math.pow(estatura, 2) * 10000

if(imc < 18.5){
    alert(`Su IMC es ${imc} el cual es inferior al normal`)
}else if(imc >= 18.5 && imc <= 24.9){
   alert(`Su IMC es ${imc} el cual es normal`) 
}else if(imc >= 25.0 && imc <= 29.9){
    alert(`Su IMC es ${imc} el cual es superior al normal`) 
}else{
    alert(`Su IMC es ${imc} el cual es obesidad`) 
}

