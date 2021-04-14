let horas_trabajadas = 41
let tarifa = 8
let horas_extras = 0
let salario = 0
let tarifa_extras = 0


if ( horas_trabajadas >= 40) {
    horas_extras = horas_trabajadas - 40
    tarifa_extras = (tarifa * 0.5) + tarifa
    console.log(salario = (horas_extras * tarifa_extras) + (40 * tarifa));
}
