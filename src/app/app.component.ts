import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-http';
  readonly uri: string;

  constructor(private http: HttpClient) {
    this.uri = 'http://localhost:3000/comments';
  }

  public getMethod() {
    this.http.get(this.uri).subscribe(res => console.log(res), error => console.log('erro ao buscar usuarios'));
  }

  public postMethod() {
    let body = 'Novo comentario aqui';

    this.http.post(this.uri, { id: null, body: body }).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    });
  }
}
