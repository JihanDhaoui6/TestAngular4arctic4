// src/app/services/residence.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Residence } from '../models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  private apiUrl = 'http://localhost:3000/residences';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Residence[]> {
    return this.http.get<Residence[]>(this.apiUrl);
  }

  getById(id: number): Observable<Residence> {
    return this.http.get<Residence>(`${this.apiUrl}/${id}`);
  }

  add(residence: Residence): Observable<Residence> {
    return this.http.post<Residence>(this.apiUrl, residence);
  }

  update(id: number, residence: Residence): Observable<Residence> {
    return this.http.put<Residence>(`${this.apiUrl}/${id}`, residence);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}