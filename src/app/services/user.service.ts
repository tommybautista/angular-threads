import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { User } from '../interfaces/user';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  localStorageKey = 'treads_user';

  constructor(private http: HttpClient) { }

  createUser(name: string){
    return this.http.post<User>(`${environment.apiBaseUrl}/users`, {
      name
    })
  }

  saveUserToStorage(user: User){
    localStorage.setItem(this.localStorageKey, JSON.stringify(user));
  }

  getUserFromStorage(){
    const user = localStorage.getItem(this.localStorageKey);
    return user ? JSON.parse(user) as User : null;
  }
}
