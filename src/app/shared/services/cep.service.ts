import { CepModel } from './../models/cep.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CepService {

  private readonly url = 'https://viacep.com.br/ws/';
  constructor(private httpClient: HttpClient) { }

  public buscarCep(cep: string): Observable<CepModel> {
    return this.httpClient.get<CepModel>(`${this.url}${cep}/json`)
  }

}
