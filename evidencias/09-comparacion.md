| Característica | PostgreSQL LAB-01 | MongoDB Community | MongoDB Enterprise/Atlas |
|---|---|---|---|
| Registro de conexiones | Depende de la configuración | Sí, mediante registros del servidor | Sí |
| Autenticaciones fallidas | Según configuración | Sí, en los eventos observados | Sí |
| Operaciones de modificación | Según configuración de registros y auditoría | Mediante profiler | Auditoría nativa |
| Cambios de privilegios | Según configuración de auditoría | No se obtuvo evidencia directa | Puede auditarse |
| Consultas de lectura | Depende de la configuración | Limitado mediante profiler | Puede auditarse según configuración |
| Conservación de registros | Según configuración | Requiere exportación y controles adicionales | Depende del destino y configuración |

## PostgreSQL

En PostgreSQL se pueden utilizar registros del servidor y herramientas como pgAudit para registrar actividades de la base de datos.

Las capacidades dependen de la configuración aplicada.

## MongoDB Community

MongoDB Community permite utilizar el Database Profiler y consultar los registros del servidor.

Durante el laboratorio se identificaron operaciones y eventos de autenticación. Sin embargo, no se obtuvo evidencia directa de los cambios de privilegios mediante las consultas realizadas.

## MongoDB Enterprise y Atlas

MongoDB Enterprise y Atlas ofrecen capacidades de auditoría nativa. Estas permiten registrar eventos de seguridad y actividades administrativas, según la configuración y el servicio utilizado.

La auditoría de MongoDB Enterprise/Atlas se revisó documentalmente y no se practicó directamente durante este laboratorio.
