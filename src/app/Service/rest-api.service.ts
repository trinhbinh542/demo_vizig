import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

constructor(private http:HttpClient) { }
get(link: string){
  return this.http.get(link).toPromise();
}
getAll(link: string, id: number){
  return this.http.get(link+ '/' +id).toPromise();
}
post(link: string, body: any){
  return this.http.post(link,body).toPromise();
}
put(link: string, id:number, body: any){
  return this.http.put(link +'/' + id, body).toPromise();
}
delete(link:string, id: number ){
  return this.http.delete(link + '/' +id).toPromise;
}
}
