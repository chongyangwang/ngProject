import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  ws: WebSocket;
  constructor() {}
  createObservableSocket(url: string, id: Number): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable<string>(observer => {
      this.ws.onmessage = event => observer.next(event.data);
      this.ws.onerror = event => observer.error(event);
      this.ws.onclose = event => observer.complete();
      this.ws.onopen = event => this.sendMessageByclient(id);
      return () => this.ws.close();
    }).pipe(
      map(message => {
        return JSON.parse(message);
      })
    );
  }
  sendMessageByclient(message: any) {
    this.ws.send(
      JSON.stringify({
        productId: message
      })
    );
  }
}
