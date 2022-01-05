import { Injectable } from '@angular/core';

import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map }  from 'rxjs/operators';

import { AlbumInfo } from './albuminfo';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl: string = '../assets/album.json';
  private _productsUrl: string = '../assets/products.json';

  constructor(private _http: HttpClient) { }

  getAlbum(id: number): Observable<AlbumInfo> {
    return this._http.get<AlbumInfo>(this._albumUrl)
  }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this._productsUrl)
  }
}
