import { Injectable } from '@angular/core';
import {EmpresasDTO} from './empresasDTO';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  empresas: EmpresasDTO;

  public empresass: EmpresasDTO[] = [{
    id: 1,
    nomeFantasia: 'DM Ambiental',
    cnpj: '81.020.925/0002-46',
    telefone: '(62) 3222-2222',
    endereco: ' Rua Maceió, Qd.131 Lt. 84, s/n - Jardim Petropolis, Goiânia',
    razaoSocial: 'DM Ambiental - Coleta Limpeza e Conservação',    
    materiaisTrabalhados: 'Vidros',
    cotacao: '!,99',
    numeroDeColeta: '4',

  },
    {
      id: 2,
      nomeFantasia: 'Nature Ambiental',
      cnpj: '82.020.925/0002-46',
      telefone: '(62) 3222-2222',
      endereco: ' Condomínio Edifício Tropical , Goiânia',
      razaoSocial: 'Nature Ambiental - Coleta de Resíduos e Consultoria Ambiental',    
      materiaisTrabalhados: 'Vidros,papel,plastico',
      cotacao: '!,99',
      numeroDeColeta: '3',
    },
    {
      id: 3,
      nomeFantasia: 'Nature Gyn',
      cnpj: '89.020.925/0002-46',
      telefone: '(62) 3222-2222',
      endereco: ' Edifício Gyn , Goiânia',
      razaoSocial: 'Nature Gyn - Coleta de Resíduos e Consultoria Ambiental',    
      materiaisTrabalhados: 'papel,plastico',
      cotacao: '!,99',
      numeroDeColeta: '5',
      //dataNascimento: null,
      //email: ''
    }
  ];

  constructor(private http: HttpClient) { }

  
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

  list(): Observable<EmpresasDTO[]> {
    const url = 'http://localhost:9000/api/empresas/all';
    return this.http.get <EmpresasDTO[]>(url);
  }

  saveEmpresas(empresas: EmpresasDTO): Observable<EmpresasDTO> {
    const url = 'http://localhost:9000/api/empresas/add';
    // @ts-ignore
    return this.http.post<EmpresasDTO>(url, empresas).pipe(
      catchError(this.handleError)
    ).subscribe((data) => {
      console.log(data);
    });
  }

  updateEmpresas(empresas: EmpresasDTO): Observable<EmpresasDTO> {
    //const url = 'localhost:9000/api/empresas/edit';
    const url = 'http://localhost:9000/api/empresas/edit';
    // @ts-ignore
    return this.http.post<EmpresasDTO>(url, empresas).pipe(
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



