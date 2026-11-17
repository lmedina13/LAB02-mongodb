# LAB-02 - Auditoría y trazabilidad en MongoDB

| Usuario | Base de datos | Rol |
|---|---|---|
| admin | admin | root |
| app_ventas | comercial | readWrite |

## Estructura

- `evidencias/`: contiene los resultados de las diez actividades y los archivos exportados.
- `scripts/`: contiene los comandos utilizados durante el laboratorio.
- `informe.md`: contiene el reporte general.
- `README.md`: contiene la descripción y estructura del proyecto.

## Actividades

1. Configuración inicial y limitaciones.
2. Incidente sin perfilador.
3. Uso del Database Profiler.
4. Filtros de operaciones.
5. Registro de autenticaciones.
6. Correlación de eventos.
7. Control de privilegios.
8. Conservación de evidencias.
9. Comparación de mecanismos de auditoría.
10. Respuesta a Dirección.

## Evidencias

Los principales archivos exportados son:

- `system-profile.json`
- `bitacora-mongod.log`
- `hashes.sha256`

Las huellas SHA-256 permiten verificar la integridad de los archivos exportados.
