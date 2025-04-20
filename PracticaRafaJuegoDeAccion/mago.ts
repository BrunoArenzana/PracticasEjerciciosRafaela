import { Personaje } from "./personaje";

export class Mago extends Personaje{

    protected mana: number;
    protected defensa: number;
    constructor(pName: string, pLife: number, pEnergy: number, pDañoActual: number, pCuracionActual: number, pMana:number,pDefensa:number) {
        super(pName, pLife, pEnergy, pDañoActual, pCuracionActual);
        this.mana = pMana;
        this.defensa = pDefensa;
    }

    public aumentarDefensa() {

        this.defensa = this.defensa + 15;
       console.log(`La defensa ha aumentado en 15 puntos; Defensa actual ${this.defensa}`)
    }

    public setMana(pMana: number) {
        this.mana = pMana;
    }
    public setDefensa(pDefensa: number) {
        this.defensa = pDefensa;
    }
    public getMana() {
        return this.mana;
    }
    public getDefensa() {
        return this.defensa;
    }
}