import { Injectable } from '@angular/core';
import { Post } from './Models/Post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPost: Post[];

  constructor() {
    this.arrPost = [
      new Post(1, 'Tendencia de este verano', 'Algunas tendencias de verano', 'Esthefany Ortega',
        'https://www.myoutfie.com/historias/wp-content/uploads/2019/12/outfits-de-verano-5-683x1024.jpg',
        '16 - 08 - 2020', 'Verano'),

      new Post(2, 'Tendencias otoñales para vestir a la moda', 'Las nuevas tendencias que se aproximan para este otoño del 2020', 'Esthefany Ortega',
        'https://stylelovely.com/wp-content/uploads/2019/11/abrigos-tendencia-invierno-2019-2020-3l-corte-ingles.jpg',
        '16 - 08 - 2020', 'Otoño'),

      new Post(3, 'Un outfit en cuarentena', 'Como usar tu ropa en casa de manera cómoda y bonita', 'Esthefany Ortega',
        'https://files.wapa.pe/Wapa/2020/03/16/outfit-athleisure-1584370505.jpg',
        '16 - 08 - 2020', 'Moda de Hogar'),

      new Post(4, 'Lo que trae este invierno', 'Una manera facil y bonita de no pasar frío', 'Esthefany Ortega',
        'https://i.pinimg.com/564x/43/04/c9/4304c9c3310fe6aca15ae847be52b520.jpg',
        '16 - 08 - 2020', 'Invierno'),
    ];

  }
  //Creacion del array que devuelve todos los post

  getAllPost(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPost);

    })
  }
  //metodo agragar post para agregar uno nuevo a mi array de Post
  agregarPost(pNewPost): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      pNewPost.id = Post.length + 1
      this.arrPost.push(pNewPost);
      resolve(this.arrPost);

    });
  }

  getPostByCategoria(pCategoria): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPost.filter(Post => {
        return Post.categoria === pCategoria;
      }))
    })
  }
}
