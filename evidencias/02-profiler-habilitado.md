Primero se verificó que el perfilador estuviera desactivado:

db.getProfilingStatus()

El nivel de perfilado utilizado fue 0.

Después se realizó una modificación de prueba en el RFC de un cliente de la colección comercial.clientes, utilizando el usuario de aplicación.

El nuevo valor indicado en la práctica fue:

GAMA780912XXX

Posteriormente se revisó la colección system.profile y la bitácora global del servidor.

## Resultados

Con el perfilador desactivado no se registraron las operaciones de la prueba en system.profile.

La bitácora global permitió consultar eventos generales del servidor, pero no proporcionó por sí sola toda la información necesaria para reconstruir la modificación del documento.
