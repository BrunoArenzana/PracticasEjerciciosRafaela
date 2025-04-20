import { Usuario } from "./usuario";

export class Seguidor extends Usuario{

    protected interes: string;

    constructor(pNombre: string, pEmail: string, pContraseña: string, pInteres: string) {
        super(pNombre, pEmail, pContraseña);
        this.interes=pInteres;
        
    }

    public getInteres() {
        return `los intereses de este usuario son ${this.interes}`
    }
    public setInteres(pInteres:string) {
        this.interes = `${this.interes}, ${pInteres}`
        
    }
    public sugerenciasInteres() {
        return `Analizando tu perfil te sugerimos probar :
        ----bla bla bla....
        ----ble ble ble...
        ----blu blu blu...
        ...más...`
    }
}