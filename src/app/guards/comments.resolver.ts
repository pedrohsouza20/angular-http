import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Comments } from "src/app/Comments";
import { CommentsService } from "src/services/core/comments.service";

@Injectable({ providedIn: 'root' })
export class CommentsResolver implements Resolve<Comments> {
  constructor(private commentsService: CommentsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comments> | Promise<Comments> | any {
    return this.commentsService.getMethod();
  }
}
