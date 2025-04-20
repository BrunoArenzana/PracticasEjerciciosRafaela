/* Crea una clase Personaje con las propiedades nombre, vida y energía.
 Agrega los métodos atacar y curar que permitan atacar a otro personaje o curar al propio personaje. Luego, 
 crea dos clases adicionales que hereden de Personaje:
  Guerrero y Mago.
   Cada clase debe tener propiedades y métodos únicos para su tipo de personaje.
Por ejemplo, la clase Guerrero podría tener una propiedad adicional fuerza y un método usar_escudo.
 La clase Mago podría tener una propiedad adicional mana y un método lanzar_hechizo.*/
import { Mago } from "./mago"
import { Guerrero } from "./guerrero"


const mago1 = new Mago("SuperStar", 120, 100, 4, 2, 70, 2);
const guerrero1 = new Guerrero("Escaliner", 200, 60, 3, 3, 4, 2);
console.log(mago1);
mago1.atacar();
mago1.aumentarDefensa();
mago1.curar();
console.log(mago1);
console.log("-------")
console.log(guerrero1);
guerrero1.atacar();
guerrero1.curar();
guerrero1.usarEscudo();
console.log(guerrero1);
console.log("-------")
