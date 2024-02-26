import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filmes, RespostaAPI } from '../../shared/models/interface';

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
}
