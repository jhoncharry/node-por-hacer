const { boolean } = require("yargs");

const descripcion = {
    demand: true,
    alias: "d",
    description: "Descripcion de la tarea por hacer"

}

const completado = {
    default: true,
    alias: "c",
    description: "Marca como completado o pendiente la tarea",
    type: "boolean"

}

const yargsOpts = {

    create: { descripcion },

    update: { descripcion, completado },

    delete: { descripcion }

}



const argv = require("yargs")
    .command("crear", "Crear un elemento por hacer", yargsOpts.create)
    .command("actualizar", "Actualiza el estado completado de una tarea", yargsOpts.update)
    .command("borrar", "Eliminar una tarea", yargsOpts.delete)
    .help()
    .argv;


module.exports = { argv }



