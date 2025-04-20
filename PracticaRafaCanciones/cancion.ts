export class Cancion{
    /*Desarrolla una clase Canción con los siguientes atributos:
-título: una variable String que guarda el título de la canción.
-autor: una variable String que guarda el autor de la canción.
y los siguientes métodos:
-Canción (String, String): constructor que recibe como parámetros el título y el
autor de la canción (por este orden).
-Canción (): constructor predeterminado que inicializa el título y el autor a cadenas
vacías.*/
    
    
    protected title: string;
    protected autor: string;


    constructor(titulo?: string, autor?: string) {
        this.title = titulo || ""; 
        this.autor = autor || "";  
    }

    
    
    dameTitulo(): string {
        return this.title;
        // seria el Get título
    }

    dameAutor(): string {
        return this.autor;
        //Seria el get autor
    }

    ponTitulo(titulo: string): void {
        this.title = titulo;
        console.log(`Nombre cambiado Exitosamente a ${this.title}`)
        // Set titulo
    }

    ponAutor(autor: string): void {
        this.autor = autor;
        console.log(`Nombre cambiado Exitosamente a ${this.autor}`)
        //Set autor
    }
}