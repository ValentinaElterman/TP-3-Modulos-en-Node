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

//6)
function GeneradorArchivoCSV(){
    try {
        const data = fs.readFileSync('productos.json', 'utf-8');
        const productos = JSON.parse(data);

        let contenidoCSV = "nombre,precio\n";

        productos.forEach(p => {
            contenidoCSV += `${p.nombre},${p.precio}\n`;
        });

        fs.writeFileSync('productos.csv', contenidoCSV);

        console.log("Archivo 'productos.csv' generado.");
        console.log(contenidoCSV);
        console.log('--------------');

    } catch (error) {
        console.error('Error al generar el CSV:', error.message);
    }
}

//7)
function temporizador() {
    let contador = 1;

    const intervalo = setInterval(() => {
    console.log(contador);

    if (contador === 10) {
        clearInterval(intervalo);
                
        setTimeout(() => {
        console.log("Fin del contador");
        console.log('--------------');
        }, 100); 
    }

    contador++;
    }, 1000);
}

//8)
function analizarTexto(texto){
    let vocales = 0;
    let consonantes = 0;
    
    const palabrasArray = texto.split(' ');
    let palabrasContadas = 0;
    for (let i = 0; i < palabrasArray.length; i++) {
        if (palabrasArray[i] !== "") {
            palabrasContadas++;
        }
    }

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i].toLowerCase();

        if (letra >= 'a' && letra <= 'z') {
            if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
                vocales++;
            } else {
                consonantes++;
            }
        }
    }

    const resultado = {
        caracteres: texto.length,
        palabras: palabrasContadas,
        vocales: vocales,
        consonantes: consonantes
    };

    console.log(resultado);
    console.log('--------------');
}

//9)
function validarPassword(password) {
    let tieneNumero = false;
    let tieneMayuscula = false;

    if (password.length >= 8) {
        
        for (let i = 0; i < password.length; i++) {
            let caracter = password[i];

            if (caracter >= '0' && caracter <= '9') {
                tieneNumero = true;
            }
            if (caracter >= 'A' && caracter <= 'Z') {
                tieneMayuscula = true;
            }
        }
    }

    if (password.length >= 8 && tieneNumero && tieneMayuscula) {
        console.log("Password válida");
    } else {
        console.log("Password inválida");
    }
    console.log('--------------');
}

agregarProducto("Lechuga", 1200);
mostrar();
buscarProducto("Banana");
GeneradorArchivoCSV();
analizarTexto("Hola, aguante larry 123");
validarPassword("Larry123");
obtenerPais("Argentina"); 
temporizador();