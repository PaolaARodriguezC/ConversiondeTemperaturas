
let btn = document.getElementById("btn");
let gradosF  = document.getElementById("resultadoF");
let gradosK  = document.getElementById("resultadoK");
let error = document.getElementById("error");

btn.addEventListener("click", convertidorGrados);

function convertidorGrados(){
    let C = document.getElementById("grados").value;

    let gradosC = parseInt(C);

        if(!isNaN(gradosC)){
            //Formula de conversion  DE GRADOS CELSIUS A FAHRENHEIT
            let F = (gradosC * 1.8) + 32;
        
            //La fórmula para pasar de Celsius a Kelvin es la siguiente:
        
            let K = 273.15 + gradosC;

            gradosF.innerHTML =  "Los grados fahrenheit es: " + F;
            gradosK.innerHTML =  "Los grados kelvin es: "+ K;
            error.innerHTML = " ";

            
        
        }else{
            gradosF.innerHTML =  " " ;
            gradosK.innerHTML =  " ";
            error.innerHTML = `Error, el dato ${C} que ingresaste no es un numero, ingresa nuevamente`
            
        }
    

}
