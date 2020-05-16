import { Injectable } from '@angular/core';
import {ColetaDTO} from './coletaDTO';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColetaService {

  coleta: ColetaDTO;

  public coletas: ColetaDTO[] = [{
    id: 1,
    //empresaCotacao:EmpresasDTO[];
    pesagemMaterial: '500',
    qualidadeMaterial: 'Boa',
    dataColeta: null, 
    localizacaoCliente: 'Setor Central',
  },
    {
      id: 2,
      pesagemMaterial: '1080',
      qualidadeMaterial: 'Ruim',
      dataColeta: null, 
      localizacaoCliente: 'Rua Maceió - Jardim Petropolis',
    },
    {
      id: 3,
      pesagemMaterial: '1422',
      qualidadeMaterial: 'Boa',
      dataColeta:  null,
      localizacaoCliente: 'Jardim Petropolis-Goiania',
    }
  ];

  constructor(private http: HttpClient) { }

  list(): Observable<ColetaDTO[]> {
    const url = 'http://localhost:9000/api/coleta/all';
    return this.http.get <ColetaDTO[]>(url);
  }

  saveColeta(coleta: ColetaDTO): Observable<ColetaDTO> {
    const url = 'http://localhost:9000/api/coleta/add';
    // @ts-ignore
    return this.http.post<ColetaDTO>(url, coleta).pipe(
      catchError(this.handleError)
    ).subscribe((data) => {
      console.log(data);
    });
  }

  updateColeta(coleta: ColetaDTO): Observable<ColetaDTO> {
    const url = 'localhost:9000/api/coleta/edit';
    // @ts-ignore
    return this.http.post<ColetaDTO>(url, coleta).pipe(
      catchError(this.handleError)
    ).subscribe((data) => {
      console.log(data);
    });
  }


  // Manipulação de erros
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}




