function coletarDados(){
    let peso =Number( document.getElementById("peso").value)
    let altura = Number( document.getElementById("altura").value)
   calcularIMC(peso,altura)
}
function calcularIMC(argPeso, argAltura){
    let imc= argPeso / (argAltura*argAltura)
    document.getElementById("res").innerHTML= imc
    classificar(imc)
}


function classificar(argimc){
    var classificacao=""

    if(argimc<18.5){
         classificacao= "Desnutrição";
    }
    else if(argimc<25){
         classificacao="Peso normal";
    }
    else if(argimc<35){
         classificacao="Sobrepeso";
    }
    else if(argimc<40){
         classificacao="Obesidade I";
    }
    else {
         classificacao="Obesidade II";
    }
    document.getElementById("status").innerHTML= classificacao;

}