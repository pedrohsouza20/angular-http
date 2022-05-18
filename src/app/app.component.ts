import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get(this.uri).subscribe({
      next: res => console.log(res),
      error: err => err.status === 404 ? console.log('Comentario nao encontrado') : console.log(err)
    });
  }

  public postMethod() {
    let body = 'Novo comentario aqui';

    return this.http.post(this.uri, { id: null, body: body }).subscribe({
      next: () => console.log(`Comentario salvo com sucesso`),
      error: err => console.log(err)
    });
  }

  public deleteMethod() {
    return this.http.delete(`${this.uri}/1`).subscribe({
      next: () => console.log(`Comentario deletado com sucesso`),
      error: err => err.status === 404 ? console.log('Comentario nao encontrado') : console.log(err)
    });
  }

  public updateMethod() {
    let body = 'Atualização do comentario aqui';

    return this.http.patch(`${this.uri}/2`, {
      body: body
    }).subscribe({
      next: () => console.log('Comentario editado com sucesso'),
      error: err => console.log(err)
    })
  }
}
