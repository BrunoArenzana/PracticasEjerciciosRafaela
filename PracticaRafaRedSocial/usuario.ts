export class Usuario{
    protected nombre: string;
    protected eMail: string;
    protected contraseña: string;

    constructor(pNombre: string, pEmail: string, pContraseña: string) {
        this.nombre = pNombre;
        this.eMail = pEmail;
        this.contraseña = pContraseña;
    }
    public getNombre() {
        return this.nombre;
    }
    public getEmail() {
        return this.eMail;
    }
    public getContraseña() {
        return this.contraseña;
    }
    public publicarPost() {
        console.log("Post publicado exitosamente...");
    }
    public comentarEnPost() {
        console.log("Comentario Publicado exitosamente!...");
    }
}