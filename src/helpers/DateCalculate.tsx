

const dateCalculate = (fecha:string) => {

    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();

    // Parsear la fecha proporcionada
    const fechaIngresada = new Date(fecha);
    const anioIngresado = fechaIngresada.getFullYear();

    // Calcular la diferencia en años
    const diferenciaAnios = anioActual - anioIngresado;

    return diferenciaAnios;
}
export default dateCalculate;