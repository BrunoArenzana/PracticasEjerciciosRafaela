export class Animal { 
/*Crea una clase Animal con las propiedades nombre y edad.
 Agrega los métodos comer y dormir que permitan a un animal alimentarse y descansar. */
    
    protected clase: string;
    protected edad: number;

    constructor(pClase: string, pEdad: number) {
        this.clase = pClase;
        this.edad = pEdad;
    }

    public comer() {
        console.log(`El Animal se esta alimentando exitosamente`);
    }
    public descansar() {
        console.log(`El Animal esta descansado`);
    }
    
    public getClase() {
        console.log(`El animal es ${this.clase}`);
    }
    public getEdad() {
        console.log(`El animal tiene ${this.edad} años`);
    }
   
    public setClase(pClase:string) {
        this.clase = pClase;
    }
    public setEdad(pEdad:number) {
        this.edad = pEdad;
    }
    

}