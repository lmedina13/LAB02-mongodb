
db.version()
db.adminCommand({ buildInfo: 1 })
db.serverCmdLineOpts()

db.getProfilingStatus()

db.getSiblingDB("comercial").system.profile.find().toArray()

db.getSiblingDB("comercial").setProfilingLevel(2)

db.getSiblingDB("comercial").setProfilingLevel(1, {
    filter: {
        op: {
            $in: ["insert", "update", "remove"]
        }
    }
})

function bitacora() {
    return db.adminCommand({ getLog: "global" }).log.map(l => JSON.parse(l))
}

bitacora().filter(l =>
    l.c === "ACCESS" &&
    (l.msg.toLowerCase().includes("fail") ||
     l.msg.toLowerCase().includes("auth"))
)

bitacora().filter(l => l.msg === "Profiler settings changed")

bitacora().filter(l => l.ctx === "conn15")

db.getSiblingDB("comercial").getUser("app_ventas")

db.getSiblingDB("auditoria").instantaneas_privilegios.insertOne({
    usuario: "app_ventas",
    fecha: new Date(),
    roles: db.getSiblingDB("comercial").getUser("app_ventas").roles
})

db.getSiblingDB("auditoria").instantaneas_privilegios.find().pretty()

var perfil = db.getSiblingDB("comercial").system.profile.find().toArray()
var fs = require("fs")

fs.writeFileSync(
    "C:/Users/angel/OneDrive/Escritorio/LAB02/evidencias/system-profile.json",
    JSON.stringify(perfil, null, 2)
)

var registros = db.adminCommand({ getLog: "global" }).log

fs.writeFileSync(
    "C:/Users/angel/OneDrive/Escritorio/LAB02/evidencias/bitacora-mongod.log",
    registros.join("\n")
)