import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filmes, Nave, RespostaAPI } from '../../shared/models/interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api_url = 'https://swapi.dev/api';

  constructor(private http: HttpClient) {}

  getFilms() {
    let url = `${this.api_url}/films`;
    return this.http.get<RespostaAPI<filmes[]>>(url);
  }

  getNaves() {
    let url = `${this.api_url}/starships`;
    return this.http.get<RespostaAPI<Nave[]>>(url);
  }
}
