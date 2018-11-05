import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestOptions, Headers, Http, Response } from '@angular/http';
@Injectable()
export class userService {
  public API = 'http://localhost:8080/users';
  public BEER_API = this.API + '/login';
   public responsemessage;
  public sendmessage;
  constructor(public http: Http) {
  }

  getMessage(): Observable<any> {
    console.log("getmessage.")
    return this.http.get(this.API + '/getMessage');
  }

  get(id: string) {
    return this.http.get(this.BEER_API + '/' + id);
  }

  sendMessage(message: any){
    const url = this.API + '/' + 'login';
    const headers = new Headers({ 'Accept': 'application/json', 'Content-Type' : 'application/x-www-form-urlencoded' });
    const options = new RequestOptions( { headers:headers } );
    this.sendmessage=this.http.post(url, `message=${message}`,options);
    return this.sendmessage;
  }

  remove(id: string) {
    return this.http.delete(this.BEER_API + '/' + id);
  }
}
