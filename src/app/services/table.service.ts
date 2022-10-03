import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITable } from '../models/interfaces/table.interface';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private http: HttpClient) {}
  getTables$(): Observable<ITable[]> {
    return this.http.get<ITable[]>(environment.api + '/tables');
  }
}
