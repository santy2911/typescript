interface Asignatura {
    readonly id: string;
    nombre: string;
    creditos: number;
    profesor: string;
}

interface Estudiante {
    readonly id: string;
    nombre: string;
    apellidos: string;
    fechaNacimiento: Date;
    curso: number;
}


interface MatriculaActiva {
    tipo: "ACTIVA";
    asignaturas: Asignatura[];
}

interface MatriculaSuspendida {
    tipo: "SUSPENDIDA";
    motivoSuspension: string;
}

interface MatriculaFinalizada {
    tipo: "FINALIZADA";
    notaMedia: number;
}

type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;