import { map, Observable, pipe } from 'rxjs';
import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from 'src/app/app.component';
import { CommentsService } from 'src/services/core/comments.service';
import { CommentsResolver } from 'src/app/guards/comments.resolver';

const routes: Routes = [
  { path: '', component: AppComponent, resolve: { comments: CommentsResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
