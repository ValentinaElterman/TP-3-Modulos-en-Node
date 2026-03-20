import fs from 'fs';
import dayjs from 'dayjs';

//1)
try {
    const leer = fs.readFileSync('productos.json', 'utf-8');
    console.log('Productos:', leer);
    console.log('--------------');
    
} catch (error) {
    console.error('Error al leer el archivo:', error.message);
}

//2)
function agregarProducto(nombre, precio){
    try {
    const contenido = fs.readFileSync('productos.json', 'utf-8');
    const listaProductos = JSON.parse(contenido);

    const nuevoProducto = {nombre, precio};
    listaProductos.push(nuevoProducto);
    fs.writeFileSync('productos.json', JSON.stringify(listaProductos, null, 2)); //strimg JSON
    console.log("Se agrego correctamente:", nombre);
    console.log('--------------');

    
    } catch (error) {
        console.error('Error al leer el archivo:', error.message);
    }
}

//3)
function mostrar(){
    const ahora = dayjs();
    console.log("Fecha actual:", ahora.format('DD/MM/YYYY')); 
    console.log("Hora actual:", ahora.format('HH:mm'));
    console.log('--------------');
}

//4)
async function obtenerPais(nombrePais){
try {
        const respuesta = await fetch(`https://restcountries.com/v3.1/name/${nombrePais}`);

        if (!respuesta.ok) {
            console.log(`No se encontró el país: ${nombrePais}`);
            return;
        }

        const datos = await respuesta.json();
        const pais = datos[0];

        console.log(`Pais: ${pais.name.common}`);
        console.log(`Capital: ${pais.capital}`);
        console.log(`Region: ${pais.region}`);
        console.log(`Población: ${pais.population.toLocaleString()}`);
        console.log('--------------');

    } catch (error) {
        console.error('Error al consultar la API:', error.message);
    }
}

//5)
function buscarProducto(nombre){
    try {
    const products = fs.readFileSync('productos.json', 'utf-8');
    const listaProductos = JSON.parse(products); 
    const encontrado = listaProductos.find(p => p.nombre === nombre);
    if (encontrado) {
            console.log('Producto encontrado:', encontrado);
            console.log('----------------');
        } else {
            console.log(`El producto "${nombre}" no existe.`);
        }
    
    } catch (error) {
        console.error('Error al leer el archivo:', error.message);
    }
}

agregarProducto("Lechuga", 1200);
mostrar();
buscarProducto("Banana");
obtenerPais("Argentina"); // ultima porque sino aparece tarde por el await.