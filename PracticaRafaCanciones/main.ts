/*Ejercicio:
Desarrolla una clase Canción con los siguientes atributos:
-título: una variable String que guarda el título de la canción.
-autor: una variable String que guarda el autor de la canción.
y los siguientes métodos:
-Canción (String, String): constructor que recibe como parámetros el título y el
autor de la canción (por este orden).
-Canción (): constructor predeterminado que inicializa el título y el autor a cadenas
vacías.
-dameTitulo(): devuelve el título de la canción.
-dameAutor(): devuelve el autor de la canción.
-ponTitulo(String): establece el título de la canción.
-ponAutor(String): establece el autor de la canción.*/
import { Cancion } from "./cancion";

//constructor predeterminado vacio
const cancion1 = new Cancion(); 
console.log(cancion1.dameTitulo()); // ""
console.log(cancion1.dameAutor());  // ""


//uso el constructor con parametros y llamo metodos para ver valores guardados
const cancion2 = new Cancion("Bohemian Rhapsody", "Queen"); 


console.log(`------Muestro que funciona el constructor vacio (no devuelve nada) --------`)
console.log(cancion1);
console.log(`------Mostramos constructor y metodos del cancion 2 creada con parametros--------`)
//prueba sobre cancion2 cambio nombre y Autor
//muestro titulo y cancion originales
console.log(cancion2.dameTitulo());
console.log(cancion2.dameAutor());
//cambio titulo y autor y los vuelvo a mostrar
cancion2.ponTitulo("Bandidos Rurales");
cancion2.ponAutor(`Leon Gieco`); 
console.log(cancion2.dameTitulo()); 
console.log(cancion2.dameAutor())