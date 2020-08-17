import { Injectable } from '@angular/core';
import { Post } from './Models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPost: Post[];

  constructor() {
    this.arrPost = [];

  }
  //Creacion del array que devuelve todos los post

  getAllPost(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPost);

    })
  }
  //metodo agregar post para agregar uno nuevo a mi array de Post
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
