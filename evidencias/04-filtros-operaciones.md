Se configuró el perfilador en nivel 1 con el siguiente filtro:

db.setProfilingLevel(1, {
    filter: {
        op: {
            $in: ["insert", "update", "remove"]
        }
    }
})

Se verificó la configuración mediante db.getProfilingStatus().

## Prueba realizada

Se intentó modificar el teléfono del cliente Luis Medina en la colección clientes.

El teléfono establecido fue:

`6671234567`

Se comprobó que la modificación se realizara correctamente mediante una consulta posterior.

## Resultados

En system.profile se encontró el registro de la operación de actualización.

El registro permitió identificar el tipo de operación, la colección afectada, el usuario asociado y la fecha del evento.

También se observó que el perfilador puede registrar operaciones aunque no modifiquen ningún documento, dependiendo del filtro configurado.

