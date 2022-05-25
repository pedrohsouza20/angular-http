import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';

@Injectable({
  providedIn: 'root'
})
export class CommentsService extends HttpClient {
  readonly uri: string;
  constructor(handler: HttpHandler) {
    super(handler);
    this.uri = 'http://localhost:3000/comments';
  }

  public getMethod(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.get(this.uri).subscribe({
        next: res => { console.log(res); resolve(res) },
        error: err => {
          err.status === 404 ? console.log('Comentario nao encontrado') : console.log(err);
          reject(err);
        }
      });
    })

  }

  public postMethod(commentBody: string): Promise<any> {

    return new Promise((resolve, reject) => {
      this.post(this.uri, { id: null, body: commentBody }).subscribe({
        next: res => { console.log(`Comentario salvo com sucesso`); resolve(res) },
        error: err => {
          console.log(err); reject(err);
        }
      })
    });
  }

  public deleteMethod(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.delete(`${this.uri}/${id}`).subscribe({
        next: (res) => {
          console.log(`Comentario deletado com sucesso`);
          resolve(res)
        },
        error: err => {
          err.status === 404 ? console.log('Comentario nao encontrado') : console.log(err);
          reject(err);
        }
      });
    })
  }

  public updateMethod(id: number): Promise<any> {
    let body = 'Atualização do comentario aqui';

    return new Promise((resolve, reject) => {
      this.patch(`${this.uri}/${id}`, {
        body: body
      }).subscribe({
        next: (res) => {
          console.log('Comentario editado com sucesso', res);
          resolve(res);
        },
        error: err => {
          console.log(err);
          reject(err);
        }
      })
    })
  }
}
