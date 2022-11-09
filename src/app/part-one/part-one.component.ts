import {Component} from '@angular/core';
import {AppCounterService} from "../services/app-counter.service";

export interface Post {
  title: string;
  text: string;
  id?: number
}

@Component({
  selector: 'app-part-one',
  templateUrl: './part-one.component.html',
  styleUrls: ['./part-one.component.scss']
})
export class PartOneComponent {

  posts: Post[] = [
    {title: 'First', text: 'I love my home', id: 1},
    {title: 'Second', text: 'I love Vova', id: 2}
  ]
  isVisible: boolean = true;
  testStr: string = 'ksjcdnlaiwubvwlivuborv'
  search = ''
  searchField: keyof Post = 'title';

  constructor(public appCounterService: AppCounterService) {
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  deletePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id)
  }


}
