import { inject } from '@angular/core';
import { MonoTypeOperatorFunction, pipe } from 'rxjs';
import { withLatestFrom, filter, map } from 'rxjs/operators';

export function hasPermissions(permissions: Permissions[]) {
    return true;
}