import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewService } from '../model/new-service';
import { catchError, map, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private URL: string = environment.appService;
  constructor(private http: HttpClient) {}

  createNewService(newService: NewService) {
    const baseHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('AUTHORIZATION', 'token')
      .set('role', 'role');
    return this.http
      .post<any>(`${this.URL}`, newService, {
        headers: baseHeaders,
      })
      .pipe(
        retry(2),
        map((res) => {
          // Validar que la respuesta tiene el formato correcto
          if (!res || typeof res !== 'object' || !Object.keys(res).length) {
            throw new Error('Datos inválidos');
          }
          return res;
        }),
        catchError((error) => {
          console.error('Error en la solicitud:', error);
          return throwError(() => new Error('Error en la solicitud de datos.'));
        })
      );
  }
}
