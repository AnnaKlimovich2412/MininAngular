import {Injectable} from '@angular/core';

export interface Post {
  title: string
  text: string
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [
    {title: 'Post 1', text: 'Text for post 1', id: 11},
    {title: 'Post 2', text: 'Text for post 2', id: 22},
    {title: 'Post 3', text: 'Text for post 3', id: 33},
    {title: 'Post 4', text: 'Text for post 4', id: 44},
    {title: 'Post 5', text: 'Text for post 5', id: 55},
  ]

  getById(id: number) {
    return this.posts.find(p => p.id === id)
  }
}
