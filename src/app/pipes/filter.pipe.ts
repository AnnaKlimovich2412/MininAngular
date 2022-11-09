import {Pipe, PipeTransform} from '@angular/core';
import {Post} from "../part-one/part-one.component";


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search = '', field: keyof Post = 'title'): Post[] {
    if (!search.trim()) {
      return posts
    } else {
      return posts.filter(post => {
        if (field === 'title' || field === 'text') {
          return post[field]?.toLowerCase()?.includes(search.toLowerCase())
        }
        return post
      })
    }
  }

}
