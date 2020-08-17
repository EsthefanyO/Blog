import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../Models/Post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() postEnviado: EventEmitter<Post>;
  post: Post;

  constructor(private postService: PostService) {

    this.postEnviado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onSubmit(formValue) {
    console.log(formValue);
  }


  onClick() {
    console.log(this.post);
    this.postService.agregarPost(this.post)
  }
}
