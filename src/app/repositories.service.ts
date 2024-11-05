import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Repository} from '../types/repository';

@Injectable({
  providedIn: 'root',

})
export class RepositoriesService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getRepositories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getRepositoryById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}?type=id`);
  }

  getRepositoryByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/name/${name}?type=name`);
  }
}
