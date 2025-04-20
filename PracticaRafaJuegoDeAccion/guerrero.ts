import { Personaje } from "./personaje";

export class Guerrero extends Personaje{
    protected strongest: number;
    protected armadura: number = 0;
    
    constructor(pName: string, pLife: number, pEnergy: number, pDañoActual: number, pCuracionActual: number, pStrongest:number,pArmadura:number) {
        super(pName, pLife, pEnergy, pDañoActual, pCuracionActual);
        this.strongest = pStrongest;
        this.armadura = pArmadura;
    }

    public usarEscudo() {
        let escudo: number = 10;
        this.armadura =this.armadura + escudo;
        return `La defensa ha Aumentado a ${this.armadura}`
    }

    public setStrongest(pStrongest: number) {
        this.strongest=pStrongest;
    }
    public setArmadura(pArmadura: number) {
        this.armadura = pArmadura;
    }

    public getStrongest() {
        return this.strongest;
    }
    public getArmadura() {
        return this.armadura;
    }
}