import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        // Transformación de la respuesta en caso de éxito
        return {
          status: HttpStatus.OK, // Estado HTTP para éxito
          response: {
            allow: true,
            message: 'Request successful',
            info: data,
          },
        };
      }),
      catchError((error) => {
        // Obtener el código de estado y mensaje del error
        const status =
          error instanceof HttpException
            ? error.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;
        const message =
          error instanceof HttpException
            ? error.message
            : 'An unexpected error occurred';
        const info =
          error instanceof HttpException
            ? error.getResponse()
            : [error.message];

        // Lanzar un nuevo HttpException con el formato personalizado
        throw new HttpException(
          {
            status,
            response: {
              allow: false,
              message,
              info,
            },
          },
          status,
        );
      }),
    );
  }
}
