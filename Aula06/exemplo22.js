class Operacoes{
    constructor(){

    }//Sobrecarga de metodos-- nao temos a sobrecarga no js. pq ele entende a ultima declaração do metodo
    Somar(valorA, valorB){
        console.log(valorA+valorB)

    }
    Somar(valorA, valorB, valorC){
        console.log(valorA+valorB+valorC)

    }
}
var obj= new Operacoes()
obj.Somar(10,20,30)