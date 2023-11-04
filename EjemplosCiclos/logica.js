var listPersonas =["Sofia","Juan","Pedro","maria"]

listPersonas.push("Michel")
listPersonas.pop()
var lista = document.getElementById("contenedor")
/*
for(var i=0; i<listPersonas.length;i++){
    lista.innerHTML += i + " " + listPersonas[i] + '<br>'
}*/

var bandera =2;
/*
while(bandera<listPersonas.length){
    alert(bandera)
    lista.innerHTML += (bandera+1) + " " + listPersonas[bandera] + '<br>'
    bandera++;
}*/
do{
lista.innerHTML += (bandera+1) + " " + listPersonas[bandera] + '<br>'
bandera++;
}while(bandera<=3)