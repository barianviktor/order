import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IImage } from '../models/interfaces/image.interface';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  addImage$(image: IImage): Observable<IImage> {
    return this.http.post<IImage>(environment.api + '/images', image);
  }
  getImages$() {
    return this.http.get(environment.api + '/images');
  }
  getImage$(id: number): Observable<IImage> {
    return this.http.get<IImage>(environment.api + '/images/' + id);
  }
}
