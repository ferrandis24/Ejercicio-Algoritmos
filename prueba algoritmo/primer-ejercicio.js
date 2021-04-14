let numero = 198

if ( numero % 2 == 0 )
{
    console.log("El número "+numero+" es par");
    while (numero > -1) {
        console.log(numero)
        numero-=2
    }
}
else
{
    console.log("El número "+numero+" es impar");
    while (numero > 0) {
        console.log(numero)
        numero-=2
    }
}