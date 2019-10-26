import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CodeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CodeProvider Provider');
  }
baseUrl:string = "http://www.chikavi.com/"
/*
index():any{
	return this.http.post(this.baseUrl+"api/codes",params);
}
*/

}
