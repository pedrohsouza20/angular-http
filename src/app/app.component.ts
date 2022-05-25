import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

import { CommentsService } from 'src/services/core/comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  public commentse: any;
  public comments: any;
  public inscricao: any;

  constructor(private commentsService: CommentsService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getComments();
  }

  title = 'angular-http';

  public getComments() {
    this.commentsService.getMethod().then((data) => {
      this.comments = data;
    })
  }

  public showSubscription(): void {
    console.log(this.inscricao);
  }

  public getMethod() {
    this.commentsService.getMethod();
  }

  public postMethod(commentBody: string) {
    this.commentsService.postMethod(commentBody);
  }

  public deleteMethod(id: number) {
    this.commentsService.deleteMethod(id);
  }

  public updateMethod(id: number) {
    this.commentsService.updateMethod(id);
  }

}
