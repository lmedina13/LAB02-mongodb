# LAB-02. Auditoría y trazabilidad en MongoDB

En este laboratorio se trabajó con MongoDB Community para conocer sus herramientas de registro y analizar la información que se puede obtener sobre las actividades realizadas en una base de datos.

Se realizaron diferentes pruebas relacionadas con la autenticación de usuarios, modificación de documentos, configuración del perfilador, cambios de privilegios y conservación de evidencias.

## 2. Objetivo

Configurar MongoDB Community y utilizar sus herramientas de registro para identificar operaciones, revisar conexiones, detectar cambios de privilegios y conservar evidencias que permitan analizar las actividades realizadas en la base de datos.

## 4. Configuración de usuarios

Se crearon dos usuarios para realizar las pruebas del laboratorio.

| Usuario | Base de datos | Rol |
|---|---|---|
| admin | admin | root |
| app_ventas | comercial | readWrite |

El usuario `admin` se utilizó para realizar las operaciones administrativas y consultar los registros del servidor.

El usuario `app_ventas` se utilizó para simular el acceso de una aplicación que trabaja con la base de datos `comercial`.

Se comprobó que cada usuario tuviera los permisos correspondientes.

## 6. Resultados generales

Durante el laboratorio se obtuvieron los siguientes resultados:

- Se instaló y configuró MongoDB Community Server 7.0.48.
- Se habilitó la autenticación.
- Se crearon los usuarios `admin` y `app_ventas`.
- Se realizaron modificaciones y consultas sobre documentos.
- Se activó y configuró el Database Profiler.
- Se identificaron autenticaciones exitosas y fallidas.
- Se relacionaron eventos mediante identificadores de conexión.
- Se detectó un cambio de privilegios mediante instantáneas.
- Se exportaron registros del servidor.
- Se calcularon y verificaron huellas SHA-256.
- Se identificaron las limitaciones de auditoría de MongoDB Community.


