var pais = prompt("ingrese su pais de nacimiento")
var genero = prompt("ingrese su genero (masculino o femenino)")
var estatura = prompt("ingrese su estatura en centimetros")

switch (pais){
    case "mexico":
if (pais == "mexico" && genero == "masculino" && estatura >= 170){
    alert(`su estatura de ${estatura} es mayor al promedio nacional por su genero ${genero}`)
}else if (pais == "mexico" && genero == "masculino" && estatura <= 169.9){
    alert(`su estatura de ${estatura} es menor al promedio nacional por su genero ${genero}`)
}else if (pais == "mexico" && genero == "femenino" && estatura >= 160.8){
    alert(`su estatura de ${estatura} es mayor al promedio nacional por su genero ${genero}`)
}else if(pais == "mexico" && genero == "femenino" && estatura <= 159.8){
    alert(`su estatura de ${estatura} es menor al promedio nacional por su genero ${genero}`)
}
break;

case "australia":
if (pais == "australia" && genero == "masculino" && estatura >= 179){
    alert(`su estatura de ${estatura} es mayor al promedio nacional por su genero ${genero}`)
}else if (pais == "australia" && genero == "masculino" && estatura <= 172.6){
    alert(`su estatura de ${estatura} es menor al promedio nacional por su genero ${genero}`)
}else if (pais == "australia" && genero == "masculino" && estatura >= 172.7 && estatura <= 178.9){
    alert(`su estatura de ${estatura} es el promedio nacional por su genero ${genero}`)
}else if (pais == "australia" && genero == "femenino" && estatura >= 165){
    alert(`su estatura de ${estatura} es mayor al promedio nacional por su genero ${genero}`)
}else if(pais == "australia" && genero == "femenino" && estatura <= 164.9){
    alert(`su estatura de ${estatura} es menor al promedio nacional por su genero ${genero}`)
}
break;

case "canada":
if (pais == "canada" && genero == "masculino" && estatura >= 178.1){
    alert(`su estatura de ${estatura} es mayor al promedio nacional por su genero ${genero}`)
}else if (pais == "canada" && genero == "masculino" && estatura <= 171.9){
    alert(`su estatura de ${estatura} es menor al promedio nacional por su genero ${genero}`)
}else if (pais == "canada" && genero == "masculino" && estatura >= 172 && estatura <= 177.9){
    alert(`su estatura de ${estatura} es el promedio nacional por su genero ${genero}`)
}else if (pais == "canada" && genero == "femenino" && estatura >= 163.9){
    alert(`su estatura de ${estatura} es mayor al promedio nacional por su genero ${genero}`)
}else if(pais == "canada" && genero == "femenino" && estatura <= 163.8){
    alert(`su estatura de ${estatura} es menor al promedio nacional por su genero ${genero}`)
}
break;

case "brasil":
if (pais == "brasil" && genero == "masculino" && estatura >= 173.6){
    alert(`su estatura de ${estatura} es mayor al promedio nacional por su genero ${genero}`)
}else if (pais == "brasil" && genero == "masculino" && estatura <= 167.3){
    alert(`su estatura de ${estatura} es menor al promedio nacional por su genero ${genero}`)
}else if (pais == "brasil" && genero == "masculino" && estatura >= 167.4 && estatura <= 173.7){
    alert(`su estatura de ${estatura} es el promedio nacional por su genero ${genero}`)
}else if (pais == "brasil" && genero == "femenino" && estatura >= 160.9){
    alert(`su estatura de ${estatura} es mayor al promedio nacional por su genero ${genero}`)
}else if(pais == "brasil" && genero == "femenino" && estatura <= 160.8){
    alert(`su estatura de ${estatura} es menor al promedio nacional por su genero ${genero}`)
}
break

case"reino unido":
if (pais == "reino unido" && genero == "masculino" && estatura >= 177.5){
    alert(`su estatura de ${estatura} es mayor al promedio nacional por su genero ${genero}`)
}else if (pais == "reino unido" && genero == "masculino" && estatura <= 171){
    alert(`su estatura de ${estatura} es menor al promedio nacional por su genero ${genero}`)
}else if (pais == "reino unido" && genero == "masculino" && estatura >= 171.1 && estatura <= 177.4){
    alert(`su estatura de ${estatura} es el promedio nacional por su genero ${genero}`)
}else if (pais == "reino unido" && genero == "femenino" && estatura >= 164.4){
    alert(`su estatura de ${estatura} es mayor al promedio nacional por su genero ${genero}`)
}else if(pais == "reino unido" && genero == "femenino" && estatura <= 164.3){
    alert(`su estatura de ${estatura} es menor al promedio nacional por su genero ${genero}`)
}
break
default: alert("alguno de los datos no es correcto")
}
