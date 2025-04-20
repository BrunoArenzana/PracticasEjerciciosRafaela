import { Animal } from "./animal";
// La clase Reptil podría tener una propiedad adicional escamas y un método regular_temperatura_corporal.
export class Reptil extends Animal{

    protected escamas: string;

    constructor(pClase: string, pEdad: number, pEscamas: string) {
        super(pClase, pEdad);
        this.escamas = pEscamas;
    }

    public getEscamas() {
        return this.escamas;
    }
    public setEscamas(pEscamas: string) {
        this.escamas = pEscamas;
    }
    public regularTemperatura() {
        console.log(`el Animal esta al sol para regular su temperatura corporal`)
    }
    public getClase() {
        console.log(`El animal es ${this.clase}`);
    }
    public getEdad() {
        console.log(`El animal tiene ${this.edad} años`);
    }
}