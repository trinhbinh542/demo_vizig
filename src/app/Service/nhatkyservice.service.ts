import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Congviec } from '../Models/congviec';

@Injectable({
  providedIn: 'root'
})
export class NhatkyserviceService {
  url='http://localhost:3000/nhatkytuan';
constructor(private httpClient: HttpClient) { }
getAll(){
  return this.httpClient.get(this.url);
  
}
get(id: number){
  return this.httpClient.get(this.url + '/' +id);
}

delete(id: number){
  return this.httpClient.delete(this.url + '/' + id);
}
save(congviec: Congviec){
  return this.httpClient.post(this.url,congviec);
}

update(id: number, congviec: Congviec){
  return this.httpClient.put(this.url + '/' + congviec.id, congviec);
}

}
