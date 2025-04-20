import { Mamifero } from "./mamifero";
import { Animal } from "./animal";
/*Por último, crea una clase adicional Murciélago que herede de la clase Mamífero. 
Esta clase debe tener una propiedad adicional habilidades y un método utilizar_ecolocalizacion que permita al murciélago moverse
 y ubicarse en su entorno.*/
export class Murciélago extends Mamifero{

    protected habilidad: string;

    constructor(pClase: string, pEdad: number, pPelaje:string, pHabilidad:string) {
        super(pClase, pEdad, pPelaje);
        this.habilidad = pHabilidad;
    }

    public getHabilidad() {
        return `EL Murcielago uso su habilidad` + this.habilidad
    }
    public setHabilidad(pHabilidad: string) {
        this.habilidad=pHabilidad;
    }
    public geoLocalizacion() {
        console.log(`El murciélago se esta moviendo en busca de presas o lugar para descansar`);
    }

    public getClase() {
        console.log(`El animal es ${this.clase}`);
    }
    public getEdad() {
        console.log(`El animal tiene ${this.edad} años`);
    }
    
}