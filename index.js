import fs from 'fs';
import dayjs from './node_modules/dayjs/dayjs.min.js';

//1)
try {
    const leer = fs.readFileSync('productos.json', 'utf-8');
    console.log('Productos:', leer);
    
} catch (error) {
    console.log('Error al leer el archivo:', error.message);
}

//2) VERIFICAR
function agregarProducto(nombre, precio){
    try {
    const contenido = fs.readFileSync('productos.json', 'utf-8');
    const listaProductos = JSON.parse(contenido);

    const nuevoProducto = {nombre, precio};
    listaProductos.push(nuevoProducto);
    fs.writeFileSync('productos.json', JSON.stringify(listaProductos, null, 2));
    console.log("Se agrego correctamente:", nombre);

    
    } catch (error) {
        console.log('Error al leer el archivo:', error.message);
        console.log('--------------');
    }
}

agregarProducto("Monitor", 120000);

//3)
function mostrar(){
    const ahora = dayjs();
    console.log("Fecha actual:", ahora.format('DD/MM/YYYY')); 
    console.log("Hora actual:", ahora.format('HH:mm'));
    console.log('--------------');
}

mostrar();

//4)
async function obtenerPais(nombrePais){
try {
        const respuesta = await fetch(`https://restcountries.com/v3.1/name/${nombrePais}`);

        if (!respuesta.ok) {
           console.log(`No se encontró el país: ${nombrePais}`);
        }

        const datos = await respuesta.json();
        const pais = datos[0];

        console.log(`Pais: ${pais.name.common}`);
        console.log(`Capital: ${pais.capital}`);
        console.log(`Region: ${pais.region}`);
        console.log(`Población: ${pais.population.toLocaleString()}`);
        console.log('--------------');

    } catch (error) {
        console.log('Error al consultar la API:', error.message);}
}

obtenerPais("Argentina");