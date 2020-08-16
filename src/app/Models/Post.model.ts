export class Post {

    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: number;
    categoria: string;



    constructor(pTitulo: string, pTexto: string, pAutor: string, pImagen: string, pFecha: number, pCategoria: string) {

        this.titulo = pTitulo;
        this.texto = pTexto;
        this.autor = pAutor;
        this.imagen = pImagen;
        this.fecha = pFecha;
        this.categoria = pCategoria;
    }

}
