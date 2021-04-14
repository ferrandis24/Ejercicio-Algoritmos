let array = [[20,"M"],[3,"M"],[24,"M"],[52,"H"],[30,"M"],[24,"H"],[11,"H"],[14,"H"],[78,"M"],[33,"H"],[13,"H"],[56,"H"],[42,"M"],[9,"M"],[51,"M"],[69,"H"],[20,"M"],[3,"M"],[24,"M"],[52,"H"],[30,"M"],[24,"H"],[11,"H"],[14,"H"],[78,"M"],[33,"H"],[13,"H"],[56,"H"],[42,"M"],[9,"M"],[51,"M"],[69,"H"],[20,"M"],[3,"M"],[24,"M"],[52,"H"],[30,"M"],[24,"H"],[11,"H"],[14,"H"],[78,"M"],[33,"H"],[13,"H"],[56,"H"],[42,"M"],[9,"M"],[51,"M"],[69,"H"],[20,"M"],[3,"M"]];
let contador = 0;
let porcentaje = 0

function comprobacionAdulto() {
    for (let i = 0; i < array.length; i++) {
        let edad = array[i][0];
        if (edad >= 18) {
            contador++;
        }
    }
    console.log(contador+" mayores de edad");
    menores = array.length - contador;
    console.log(menores+" menores de edad");
    porcentaje = (menores / contador) * 100;
    console.log(Math.floor(porcentaje)+"% es mayor de edad");
}

function comprobacionAdultoHombre() {
    contador = 0
    for (let i = 0; i < array.length; i++) {
        let edad = array[i][0];
        let sexo = array[i][1];
        if (edad >= 18 && sexo == "H") {
            contador++;
        }
    }
    console.log(contador+" hombres son mayores de edad");
}

function comprobacionAdultoMujer() {
    contador = 0
    for (let i = 0; i < array.length; i++) {
        let edad = array[i][0];
        let sexo = array[i][1];
        if (edad >= 18 && sexo == "M") {
            contador++;
        }
    }
    console.log(contador+" mujeres son mayores de edad");
}

function comprobacionMujer() {
    contador = 0
    for (let i = 0; i < array.length; i++) {
        let sexo = array[i][1];
        if (sexo == "M") {
            contador++;
        }
    }
    porcentaje = (contador / array.length) * 100;
    console.log(porcentaje+"% son mujeres respecto al total");
}

comprobacionAdulto();
comprobacionAdultoHombre();
comprobacionAdultoMujer();
comprobacionMujer();