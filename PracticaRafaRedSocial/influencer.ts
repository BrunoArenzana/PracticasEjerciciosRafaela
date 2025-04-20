import { Usuario } from "./usuario";

export class Influencer extends Usuario {
    protected nroSeguidores: number;


    constructor(pNombre: string, pEmail: string, pContraseña: string, pNroSeguidores: number) {
        super(pNombre, pEmail, pContraseña);
        this.nroSeguidores = pNroSeguidores;

    }

    public get nroSeguidoresActuales(): number {
        console.log("Numero de Seguidores actuales: ")
        return this.nroSeguidores 
    }
    public set nroSeguidoresActuales(pNroSeguidores: number) {
       this.nroSeguidores = pNroSeguidores + this.nroSeguidores;
    }
    public realizarColaboracion() {
        console.log(`El/La Influencer ${this.nombre} estara juntando dinero para Colaborar con Bahia Blanca`);
    }


}