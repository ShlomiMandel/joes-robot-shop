import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(@Inject(HttpClient) private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/api/products');
  }
}
