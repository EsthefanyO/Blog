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
        16 - 08 - 2020, 'Verano')
    ];

  }
  //Creacion del array que devuelve todos los post

  getAll(): Post[] {
    return this.arrPost
  }

  getAllPost(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPost);

    })
  }
  //metodo agragar post para agregar uno nuevo a mi array de Post
  AgregarPost(pNewPost): Promise<Post[]> {
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
