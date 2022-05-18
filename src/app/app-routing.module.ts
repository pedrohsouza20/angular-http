import { map, Observable, pipe } from 'rxjs';
import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from 'src/app/app.component';
import { CommentsService } from 'src/services/core/comments.service';
import { CommentsResolver } from 'src/app/guards/comments.resolver';


interface Comments {
  id?: number;
  body: string
}

const routes: Routes = [
  { path: '', component: AppComponent, resolve: { commentsa: CommentsResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
