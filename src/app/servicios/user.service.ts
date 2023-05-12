import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  /*Despues de haber importado en el Auth el metodo createWith...le pasaremos el email y la password y luego creamos el metodo register y le pasamos el email y la password */

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  inicio({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

}
