import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  constructor(public httpClient: HttpClient) { }

  pics(): Observable<any> {
    return this.httpClient.get('https://api.nasa.gov/planetary/apod?api_key=Ai0uxYTSwiuGYHm5xxzjPZYRmhkMMzUwGkbwx9VS')
  }

}

