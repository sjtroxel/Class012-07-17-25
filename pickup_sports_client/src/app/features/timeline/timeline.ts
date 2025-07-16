import { Component } from '@angular/core';
import { Post } from '../../shared/models/post';
import { PostComponent } from '../../shared/components/posts/post/post';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss'
})
export class Timeline {
  posts: Post[] = [
    new Post({
      id: 1,
      title: "Post 1",
      content: "Content 1",
      created_at: "2021-01-01",
      user: {
        first_name: "John",
        last_name: "Doe",
        email: "email@email.com",
        username: "johndoe123"
      }
    })
  ];

  constructor(){}
}
