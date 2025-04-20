/*Crea una clase Personaje con las propiedades nombre, vida y energía.
 Agrega los métodos atacar y curar que permitan atacar a otro personaje o curar al propio personaje.*/
export class Personaje{

    protected name: string;
    protected life: number;
    protected energy: number;
    protected dañoActual: number = 3;
    protected curacionActual: number = 2;
     
    constructor(pName: string, pLife: number, pEnergy: number, pDañoActual: number, pCuracionActual: number) {
        this.name = pName;
        this.life = pLife;
        this.energy = pEnergy;
        this.dañoActual = pDañoActual;
        this.curacionActual = pCuracionActual;
    }
    public atacar() {
        console.log(`El Personaje realizo un ataque Basico por ${this.dañoActual} puntos.`)
    }
    public curar() {
        console.log(`El Personaje utilizo curacion ${this.curacionActual} puntos.`)
    }
// metodos set de cada atributo
    public setName(pName:string) {
        this.name = pName;
    }
    public setLife(pLife: number) {
        this.life = pLife;
    }
    public setEnergy(pEnergy: number) {
        this.energy = pEnergy;
    }
    public setDañoActual(pDañoActual: number) {
        this.dañoActual = pDañoActual;
    }
    public setCuracionActual(pCuracionActual: number) {
        this.curacionActual = pCuracionActual;
    }
    // metodos get de cada atributo
    public getName() {
        return this.name;
    }
    public getLife() {
        return this.life;
    }
    public getEnergy() {
        return this.energy;
    }
    public getDañoActual() {
        return this.dañoActual;
    }
    public getCuracionActual() {
        return this.curacionActual;
    }

}