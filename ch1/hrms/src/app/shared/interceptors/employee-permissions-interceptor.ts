import {
  HttpHandlerFn,
  HttpRequest,
  HttpInterceptorFn,
} from '@angular/common/http';

export const employeePermissionsInterceptor = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  return true;
};