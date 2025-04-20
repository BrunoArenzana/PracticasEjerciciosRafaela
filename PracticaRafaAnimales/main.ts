/*Crea una clase Animal con las propiedades nombre y edad.
 Agrega los métodos comer y dormir que permitan a un animal alimentarse y descansar.
Luego, crea dos clases adicionales que hereden de Animal: Mamífero y Reptil. 
Cada clase debe tener propiedades y métodos únicos para su tipo de animal.
Por ejemplo, la clase Mamífero podría tener una propiedad adicional pelaje y un método amamantar_crias.
 La clase Reptil podría tener una propiedad adicional escamas y un método regular_temperatura_corporal.
Por último, crea una clase adicional Murciélago que herede de la clase Mamífero. 
Esta clase debe tener una propiedad adicional habilidades y un método utilizar_ecolocalizacion que permita al murciélago moverse
 y ubicarse en su entorno.*/

import { Animal } from "./animal";
import { Mamifero } from "./mamifero";
import { Murciélago } from "./murcielago";
import { Reptil } from "./reptil";

const animalMamifero1 = new Mamifero("Foca", 2, "Piel Suave");
const animalReptil1 = new Reptil("Dragon de Comodo", 4, "Escamas Pequeñas");
const animalMurcielago1 = new Murciélago("Murciélago", 3, "Pelaje corto", "Sonar");

console.log(`-------mamimefero-------`)
//pruebas sobre mamifero
animalMamifero1.comer();
animalMamifero1.descansar();
animalMamifero1.getEdad();
animalMamifero1.getClase();
animalMamifero1.amamantarCrias();
console.log(`-------Reptil-------`)
//prueba sobre reptil
animalReptil1.comer();
animalReptil1.descansar();
animalReptil1.getEdad();
animalReptil1.getClase();
animalReptil1.regularTemperatura();
console.log(`-------Murciélago-------`)
//prueba Murciélago
animalMurcielago1.comer();
animalMurcielago1.descansar();
animalMurcielago1.getClase();
animalMurcielago1.getEdad();
animalMurcielago1.getHabilidad();
animalMurcielago1.geoLocalizacion();
