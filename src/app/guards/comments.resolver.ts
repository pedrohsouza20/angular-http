import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CommentsService } from "src/services/core/comments.service";


interface Comments {
  id?: number;
  body: string
}

@Injectable()
export class CommentsResolver implements Resolve<any> {
  constructor(private commentsService: CommentsService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.commentsService.getMethod();
  }
}
