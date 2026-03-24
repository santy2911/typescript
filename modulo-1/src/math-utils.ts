function calcularMedia (datos: number[]): number | null {
    if(datos.length === 0) {
        return null;
    }

    let suma = 0;
    for (let i = 0; i<datos.length; i++){
        suma = suma + datos[i];
    }

    const media = suma / datos.length;
    return media
}


function calcularMediana(datos: number[]): number | null {
    if (datos.length === 0) {
        return null;
    }

    const ordenado = datos.slice().sort((a, b) => a - b);
    const mitad = Math.floor(ordenado.length / 2);
    
    if (ordenado.length % 2 !== 0) {
        return ordenado[mitad];
    } else {
        const valorIzquierda = ordenado[mitad - 1];
        const valorDerecha = ordenado[mitad]
        return (valorIzquierda + valorDerecha) / 2;
    }
}


function filtrarAtipicos(datos: number[], limite: number): number[] {
    if (datos.length === 0) {
        return [];
    }

    const media = calcularMedia(datos);

    if (media === null) {
        return [];
    }

    const resultado: number[] = [];

    for (let i = 0; i < datos.length; i++) {
        const diferencia = Math.abs(datos[i] - media);
        if (diferencia <= limite) {
            resultado.push(datos[i]);
        }
    }

    return resultado;
}