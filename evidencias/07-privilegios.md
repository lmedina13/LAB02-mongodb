Primero se consultaron los roles del usuario app_ventas.

Se encontró que tenía únicamente el rol readWrite sobre la base de datos comercial.

Después se creó la base de datos auditoria y la colección instantaneas_privilegios.

Se guardó una primera instantánea de los privilegios.

Posteriormente se agregó temporalmente el rol dbAdmin al usuario y se guardó una segunda instantánea.

## Resultados

Al comparar las instantáneas se encontró la siguiente diferencia:

| Primera instantánea | Segunda instantánea |
|---|---|
| readWrite | readWrite |
| No tenía dbAdmin | dbAdmin |

Las consultas realizadas al perfilador y a la bitácora no mostraron un registro directo del cambio de privilegios.

Finalmente se retiró el rol dbAdmin y se verificó que el usuario volviera a tener únicamente readWrite.
