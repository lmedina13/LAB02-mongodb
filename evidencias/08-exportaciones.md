Antes de reiniciar el servicio se exportó el contenido de system.profile al archivo:

system-profile.json

También se exportó la bitácora global al archivo:

bitacora-mongod.log

Después se calcularon las huellas SHA-256 de ambos archivos y se guardaron en hashes.sha256.

## Resultados

Se obtuvieron las siguientes huellas:

| Archivo | SHA-256 |
|---|---|
| system-profile.json | ADC4C7EB8F5CD6B7CED49725DB9437175021A5989A6C90AD8530D6FC4DB879D6 |
| bitacora-mongod.log | 812707A1DB0B0F7204BAFD2036BEB88860A4FBB3EEA4AA411E8A7DED4AD60B37 |

Antes del reinicio, la bitácora global contenía 433 registros.

Después del reinicio contenía 96 registros y el nivel del perfilador regresó a 0.

Posteriormente se configuró el perfilador en mongod.cfg con modo slowOp y un umbral de 100 milisegundos. Después de reiniciar nuevamente el servicio, se comprobó que iniciaba en nivel 1.

Se recalcularon las huellas SHA-256 de los archivos exportados y coincidieron con las originales.
