
export class User{
  constructor(
    public id: string,
    public email: string,
    private _token: string,
    private expiredIn: Date) {

  }

  get token(){
    if(!this.expiredIn || this.expiredIn < new Date()){
      return null;
    }
    return this._token;
  }

}
