import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { UserResponse} from './atp/user-response';
import { Titles } from './atp/titles';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';




@Injectable({
  providedIn: 'root'
})
export class AtpServiceService {
 // private apiUrl="https://api.github.com/users";
 //http://my-json-server.typicode.com/trilok1905/atp/atp
 private apiUrl="http://localhost:3000/atp";
 private apiUrl1="http://localhost:3000/titles";


 atps:any=[];
 constructor(private http:HttpClient,private fb:FormBuilder) { }
 createTitleForm()
 {
  return this.fb.group({
    name: new FormControl(),
    category: new FormControl()
 });
 }
 // create category form
 createCategoryForm()
 {
  return this.fb.group({
    name: new FormControl(),
    tournaments: new FormControl(),
    points:new FormControl()
 });
 }
// get Atp
 getAtp()
 {
  return this.http.get<UserResponse>(this.apiUrl);
 }
 // get Atp by id
 getAtpBYId(id)
 {
  // let params=params.set('id',id);
   const params = new HttpParams().set('id', id);
  return this.http.get<UserResponse>("http://localhost:3000/atp",{params});
 }
 // create Atp Title
 createTitle(info)
 {
    return this.http.post(this.apiUrl1,info);
 }
 // fetch all Titles
 getTitles()
 {
   return this.http.get<Titles>(this.apiUrl1);
 }
 getTitleBycategory(category){
  // console.log(category);
  const params = new HttpParams().set('category', category);
   return this.http.get("http://localhost:3000/titles",{params});
 }
 getTitleById(id){
  // console.log(category);
  const params = new HttpParams().set('id', id);
   return this.http.get("http://localhost:3000/titles",{params});
 }
 deleteTitle(id)
 {
   
 // const params = new HttpParams().set('id', id);
return this.http.delete("http://localhost:3000/titles/"+id);
 }

}
