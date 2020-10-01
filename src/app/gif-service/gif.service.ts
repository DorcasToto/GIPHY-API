import { Injectable } from '@angular/core';
import { Gif } from '../gif-class/gif'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  gif: Gif;

  constructor(private http: HttpClient) {
  }


  gifTrendingRequest(): Observable<any> {
    interface ApiResponse {
      title: string;
      userName: string;
      imageURL: string;
    }

    return this.http.get<ApiResponse>(environment.TrendingURL);
  }

  getSe
}
