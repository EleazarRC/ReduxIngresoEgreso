
export class User {

  static fromFirebase( { email, uid, displayName }:any ) {

    return new User(uid, email, displayName)
  }

  constructor(
    public uid?: string,
    public email?: string | null,
    public displayName?: string | null,
    public photoURL?: string,
    public emailVerified?: boolean,
    public prueba?: string,
  ) {

  }

}

/* export class Usuario {

  constructor(
    public uid: string,
    public nombre: string,
    public email: string
  ) {

  }

} */
