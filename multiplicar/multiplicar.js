const fs = require ('fs')


async function listarTabla(base,limite = 10) {
    for (let index = 1; index <= limite; index++) {
        console.log(`${base}*${index}=${base * index}`);
        
    }
    return null
}



async function crearArchivo(base, limite = 10){
    let ans = ''
    for (let i = 1; i <= limite; i++) {
        ans += `${base}*${i}=${base * i} \n`;
    }
    
    fs.writeFile(`tablas/tabla-${base}.txt`, ans, (err) => {
        if (err) throw err;
        console.log('El archivo ha sido creado');
        return `tabla-${base}.txt`
    });
    return `tabla-${base}.txt`
}

module.exports = {listarTabla,crearArchivo}


