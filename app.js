const operadores  = new Array('+','-','*','/');

const btnRespuesta = document.getElementsByName("btnRespuesta");

const operadorInterfaz = document.getElementById("operador");

btnRespuesta.addEventListener('click', () => {
    respuestaRealizada();
})

const Azar = (valorMaximo, valorminimo) => {
    resultado = Math.floor(Math.random() * (valorMaximo-valorminimo + 1)) + valorminimo;
    return resultado;
}

const asignarOperador = (operador) =>{
    return operadores[operador-1];
}

const respuestaRealizada = () =>{
    
}


const turno  = () => {


    let operadorTurno =  asignarOperador(Azar(1,4));

    switch (operadorTurno) {
        case '+':

            break;
        case '-':
            break;
        case '*':
            break;
        case '/':
            break;
    }

} 

turno();