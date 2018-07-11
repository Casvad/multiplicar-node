const fs = require('fs');
const {argv} = require('./config/yargs')
const {crearArchivo, listarTabla} = require ('./multiplicar/multiplicar')
let comando = argv._[0]

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base,argv.limite).then (res => console.log(`listado con exito`))
        break;
    case 'crear':
        console.log('creando archivo')
        crearArchivo(argv.base,argv.limite).then(res=>console.log(`archivo ${res} creado con exito`)).catch(err => console.log(error))
    default:
        console.log('Comando no reconocido');
        break;
}

