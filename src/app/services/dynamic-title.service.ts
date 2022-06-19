import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DynamicTitleService implements Resolve<string> {

  constructor() { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const post = await fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json());
    return post.title;
  }

}
