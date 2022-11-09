import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Post, PostsService} from "./posts.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class PostResolver implements Resolve<Post>{

  constructor(private postService: PostsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.postService.getById(+route.params['id'])
  }

}
