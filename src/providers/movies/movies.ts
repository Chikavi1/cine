import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class MoviesProvider {

  constructor(public http: HttpClient) {
  }
baseUrl:string = "http://127.0.0.1:8000/api/"

index():any{
	return this.http.get(this.baseUrl+"movies");
}

}
