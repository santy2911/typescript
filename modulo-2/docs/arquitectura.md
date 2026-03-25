# Documentación - Módulo 2

## src/domain/types/index.ts

### Estudiante y Asignatura

Se ha utilizado `interface` para estas dos entidades porque al final son objetos con propiedades concretas y definidas. Un estudiante siempre tiene un nombre, apellidos, fecha de nacimiento y curso, y una asignatura siempre tiene un nombre, créditos y profesor.

Se ha añadido `readonly` en el `id` porque un identificador no debería poder cambiar una vez creado. Si el id de un estudiante cambia, dejaría de ser el mismo estudiante en el sistema.

### EstadoMatricula

Se han separado los tres estados en interfaces distintas porque cada uno tiene propiedades diferentes. No tendría sentido, por ejemplo, tener `notaMedia` en una matrícula activa o `motivoSuspension` en una finalizada.

Se ha utilizado `type` para unirlas porque con `interface` no es posible definir uniones. De esta forma cada estado contiene exactamente las propiedades que necesita.

La función `generarReporte` utiliza un `switch` sobre la propiedad `tipo` para identificar el estado de la matrícula y devolver el mensaje correspondiente.


## src/services/api-client.ts

### RespuestaAPI<T>

Se ha utilizado un genérico `<T>` porque la misma interfaz debe servir para distintos tipos de datos. Sin usar genéricos, habría que crear una interfaz diferente para cada entidad del sistema, lo que haría el código más repetitivo.

### obtenerRecurso<T>

Se ha utilizado `setTimeout` para simular el tiempo de respuesta de una base de datos real. De esta forma se puede imitar un pequeño retraso como el que habría en una petición real.

La promesa permite manejar ese tiempo de espera sin bloquear la ejecución del resto del programa.

La función devuelve siempre un objeto que cumple con la interfaz `RespuestaAPI<T>`, lo que asegura que la respuesta mantiene la misma estructura independientemente del tipo de dato que se solicite.