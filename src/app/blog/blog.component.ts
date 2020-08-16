import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../Models/Post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  Allpost: Post[];

  //Inyeccion del servicio e inicializacion.
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.Allpost = this.postService.getAll();
  }
  getCategorias() {
    const cats = this.Allpost.map(post => post.categoria);
  }
}

