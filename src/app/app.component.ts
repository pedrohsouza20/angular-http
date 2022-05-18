import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Comments } from 'src/app/Comments';

import { CommentsService } from 'src/services/core/comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  public commentse: any;
  public inscricao: any;
  constructor(private commentsService: CommentsService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.inscricao = this.route.data.subscribe((info: { comments: Comments }) => {
      console.log(info);
      this.commentse = info.commentsa;
    })
  }

  title = 'angular-http';


  public getMethod() {
    this.commentsService.getMethod();
  }

  public postMethod() {
    this.commentsService.postMethod();
  }

  public deleteMethod() {
    this.commentsService.deleteMethod();
  }

  public updateMethod() {
    this.commentsService.updateMethod();
  }

}
