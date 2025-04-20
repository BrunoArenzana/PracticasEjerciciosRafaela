/*Ejercicio (herencia): Red social
Crea una clase Usuario con las propiedades nombre, email y contraseña. 
Agrega los métodos publicar_post y comentar_post que permitan publicar un post y comentar en otro post.
Luego, crea dos clases adicionales que hereden de Usuario: Influencer y Seguidor. Cada
clase debe tener propiedades y métodos únicos para su tipo de usuario.
Por ejemplo, la clase Influencer podría tener una propiedad adicional numero_seguidores y un método realizar_colaboracion. 
La clase Seguidor podría tener una propiedad adicional 
intereses y un método buscar_contenido_relacionado.*/

import { Influencer } from "./influencer";
import { Seguidor } from "./seguidor";
import { Usuario } from "./usuario";

const influencer1 = new Influencer("Rafaela", "RafaRafita@gmail.com", "abc123", 3137);
const Seguidor1 = new Seguidor("Bruno", "brunoarenzana@gmail0000.com", "0123456789", "Musica");

//prueba del perfil influencer
console.log("Pruebas de Influencer")
console.log(influencer1.getNombre());
console.log(influencer1.getEmail());
console.log(influencer1.getContraseña());
console.log(influencer1.nroSeguidoresActuales);
influencer1.comentarEnPost();
influencer1.realizarColaboracion();
console.log("---------")


//pruebas del perfil Seguidor

console.log(Seguidor1.getNombre());
console.log(Seguidor1.getEmail());
console.log(Seguidor1.getContraseña());
console.log(Seguidor1.getInteres());
Seguidor1.setInteres("Impresion 3D");
console.log(Seguidor1.getInteres())
Seguidor1.setInteres("Ecologia");
console.log(Seguidor1.getInteres());
console.log(Seguidor1.sugerenciasInteres());