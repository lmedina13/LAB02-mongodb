## 1. ¿Quién modificó el RFC de María García?

No hay evidencia suficiente para identificar a la persona que realizó la modificación. MongoDB Community no proporcionó un registro completo que permita atribuir el cambio a una persona específica.

## 2. ¿Cuándo se realizó la modificación?

No se encontró evidencia suficiente para confirmar la fecha y hora exactas del cambio original del RFC de María García.

## 3. ¿Desde qué aplicación se realizó?

Durante las pruebas se identificó mongosh 2.14.2 como aplicación de conexión. Sin embargo, esto corresponde a las pruebas del laboratorio y no demuestra que fuera la aplicación utilizada en el incidente original.

## 4. ¿Cuál era el RFC anterior?

No hay evidencia suficiente para recuperar el valor anterior. Para conocerlo sería necesario contar con un respaldo histórico o un mecanismo que conservara los cambios anteriores.

## 5. ¿Se modificaron los privilegios de app_ventas?

Durante el laboratorio se agregó temporalmente el rol dbAdmin al usuario app_ventas. La comparación de instantáneas permitió detectar el cambio. Posteriormente se retiró el rol y se comprobó que permaneciera únicamente readWrite.

## 6. ¿Qué limitaciones se encontraron?

- MongoDB Community no incluye auditoría nativa de seguridad.
- El perfilador está orientado al rendimiento.
- La bitácora global tiene retención limitada.
- No se recuperan automáticamente los valores anteriores de los documentos.
- No se obtuvo evidencia directa del cambio de privilegios en los registros consultados.

## 7. ¿Qué se recomienda?

Se recomienda mantener el principio de mínimo privilegio, guardar instantáneas periódicas de los roles, exportar los registros, realizar respaldos y evaluar una solución con auditoría nativa si la empresa necesita mayor trazabilidad.
