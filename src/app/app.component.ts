import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'First', text: 'I love my home', id: 1},
    {title: 'Second', text: 'I love Vova', id: 2}
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }
}
