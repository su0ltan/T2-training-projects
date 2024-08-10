import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  Resolve,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { User } from '../../../models/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root',
})
export class usersResolverResolver implements Resolve<User[]> {
  constructor(private userService: UserService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User[]> {
    return this.userService.getUsers();
  }
}
