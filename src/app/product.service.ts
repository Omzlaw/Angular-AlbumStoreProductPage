import { Injectable } from '@angular/core';

import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map }  from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl: string = '../assets/album.json';
  constructor(private _http: HttpClient) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).pipe(
      map(response => JSON.stringify(response))
    )
  }
}
