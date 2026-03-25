interface RespuestaAPI<T> {
    codigoEstado: number;
    exito: boolean;
    datos: T;
}

function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                codigoEstado: 200,
                exito: true,
                datos: {} as T
            });
        }, 1000);
    });
}