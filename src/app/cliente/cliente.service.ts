import { Injectable } from '@angular/core';
import {ClienteDTO} from './clienteDTO';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
//import {TurmaDTO} from '../turma/turmaDTO';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  cliente: ClienteDTO;

  public clientes: ClienteDTO[] = [{
    id: 1,
    nomeFantasia: 'Bohemia',
    cnpj: '88.020.925/0001-45',
    telefone: '(62) 3222-2222',
    endereco: "Petrópolis",
    razaoSocial: 'Cervejaria Bohemia',
  },
    {
      id: 2,
    nomeFantasia: 'Brahma',
    cnpj: '88.020.925/0002-46',
    telefone: '(62) 3222-2222',
    endereco: "Rio de Janeiro",
    razaoSocial: 'Brahma, o sabor de ser mais',
    },
    {
      id: 3,
      nomeFantasia: 'To No Trabalho',
      cnpj: '88.020.925/0003-47',
      telefone: '(62) 3222-2222',
      endereco: "Neropolis",
      razaoSocial: 'Bar To No Trabalho',
      //dataNascimento: null,
      //email: ''
    }
  ];

  constructor(private http: HttpClient) {}

  // getAlunos(): AlunoDTO[] {
  //   // return this.alunos;
  //   const url = '/api/aluno/all';
  //   // return this.http.get<AlunoDTO[]>(url)
  //   //   .subscribe(resultado);
  //   this.subscribe((alunos: AlunoDTO[]) => {
  //     this.cars = cars;
  //   }
  // }

  // // Obtem todos os carros
  // getAlunos(): Observable<AlunoDTO[]> {
  //   const url = 'http://localhost:9000/aluno/all';
  //   return this.http.get<AlunoDTO[]>(url)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError));
  // }
  list(): Observable<ClienteDTO[]> {
    const url = 'http://localhost:9000/api/cliente/all';
    return this.http.get <ClienteDTO[]>(url);
  }

  saveCliente(cliente: ClienteDTO): Observable<ClienteDTO> {
    const url = 'http://localhost:9000/api/cliente/add';
    // @ts-ignore
    return this.http.post<ClienteDTO>(url, cliente).pipe(
      catchError(this.handleError)
    ).subscribe((data) => {
      console.log(data);
    });
  }

  updateCliente(cliente: ClienteDTO): Observable<ClienteDTO> {
    const url = 'localhost:9000/api/cliente/edit';
    // @ts-ignore
    return this.http.post<ClienteDTO>(url, cliente).pipe(
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







