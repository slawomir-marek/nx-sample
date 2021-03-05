import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListItem } from '@nx-sample/share';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<ListItem[]> {
    return this.httpClient.get<ListItem[]>('http://localhost:3333/api');
  }
}
