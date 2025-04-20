import { Animal } from "./animal";


//Por ejemplo, la clase Mamífero podría tener una propiedad adicional pelaje y un método amamantar_crias.
export class Mamifero extends Animal{
    protected pelaje: string;

    constructor(pClase: string, pEdad: number, pPelaje: string) {
        super(pClase, pEdad);
        this.pelaje = pPelaje;
    }
    public getPelaje() {
        return this.pelaje;
    }
    public setPelaje(pPelaje: string) {
        this.pelaje = pPelaje;
    }

    public amamantarCrias() {
        console.log(`Esta amamantando a su cria...`)
    }
    public getClase() {
        console.log(`El animal es ${this.clase}`);
    }
    public getEdad() {
        console.log(`El animal tiene ${this.edad} años`);
    }

}