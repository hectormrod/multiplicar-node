const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un numero.`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) data += `${base} x ${i} = ${i*base}\n`;

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`.green)
        });
    });
}
let listarTabla = (base, limite = 10) => {

    console.log("===============".red);
    console.log(`==Tabla del ${base}==`.red);
    console.log("===============".red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${i*base}\n`.blue);
    }
}


module.exports = {
    listarTabla,
    crearArchivo
}