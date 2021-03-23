var lado = prompt("escriba el tamaño de los lados en cm para calcular la dimension del cubo")
var material = prompt("indique el material deseado")
var diametro = parseInt(lado)
var dimension = Math.pow(diametro,3)

switch (material) {
    case "acero":
    if(material == "acero"){
       densidad = 7850*dimension / 100000
       alert(`el peso del ${material} es ${densidad} kg`)
    }
    break;
    case "cobre":
    if(material == "cobre"){
       densidad = 8940*dimension / 100000
       alert(`el peso del ${material} es ${densidad} kg`)
    }
    break;

    case "oro":
    if(material == "oro"){
       densidad = 19300*dimension / 100000
       alert(`el peso del ${material} es ${densidad} kg`)
    }
    break;

    case "plata":
    if(material == "plata"){
       densidad = 10490*dimension / 100000
       alert(`el peso del ${material} es ${densidad} kg`)
    }
    break;

    case "diamante":
    if(material == "diamante"){
       densidad = 3515*dimension / 100000
       alert(`el peso del ${material} es ${densidad} kg`)
    }
    break;
    default: alert("alguno de los datos no es correcto")
}
