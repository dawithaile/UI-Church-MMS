import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Member } from '../model/member';
import { MemberSearchCriteria } from '../model/member.search.criteria';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private memberUrl : string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient : HttpClient) {
      this.memberUrl = "/api/member/";
   }

   private extractData(response : Response){
    let body = response.json();
    return body;
 }

 private handleError(error : any){
   let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error'
   return Observable.throw(errMsg);
 }

 public createMember(member : Member) : Observable<any>{
  return this.httpClient.post<Member>(this.memberUrl, member, this.httpOptions).pipe(
    tap((newMeeting: Member) =>console.log("New Member Created")),
    catchError(this.handleError)
  );
}

public getMemberById(id :string):Observable<any>{
  return this.httpClient.get(this.memberUrl+id);
} 

public  updateMember(member : Member) : Observable<any>{
  return this.httpClient.put<Member>(this.memberUrl, member, this.httpOptions).pipe(
    tap((newMeeting: Member) =>console.log("Member Updated")),
    catchError(this.handleError)
  );
}

public deleteMember(id :string):Observable<any>{
  return this.httpClient.delete(this.memberUrl+id);
} 

public  search(memberSearchCriteria : MemberSearchCriteria) : Observable<any>{
  return this.httpClient.put<Member>(this.memberUrl+"search", memberSearchCriteria, this.httpOptions).pipe(
    tap((newMeeting: Member) =>console.log("Member Search")),
    catchError(this.handleError)
  );
}
}
