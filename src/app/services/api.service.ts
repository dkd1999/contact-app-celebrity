import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ContactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

base_url='https://celebrity-contact.onrender.com'

  constructor(private http:HttpClient) { }

// handle error
handleError(error:HttpErrorResponse){
  let errorMsg:string=''
  
  if(error.error){
    // client error
    errorMsg = `Error: ${error.error.message}`
  }
  else{
    errorMsg = `Status: ${error.status} \n Error: ${error.message}`
  }
  return throwError(()=>errorMsg)
}


  // get all contacts api
  getAllContacts(){
    // api call : url - http://localhost:3000/contacts req:get
    return this.http.get(`${this.base_url}/contacts`)
  }

  // view a contact
  viewContact(id:any){   //arg as id as id changes on different contacts
    return this.http.get(`${this.base_url}/contacts/${id}`)
  }

  // get a particular group
  Getgroup(id:any){
    return this.http.get(`${this.base_url}/groups/${id}`)
  }

  // get all groups
  Getgroups(){
    return this.http.get(`${this.base_url}/groups`)
  }

  // adding contact to backend
  addContact(contact:ContactSchema){
    // api call
    return this.http.post(`${this.base_url}/contacts`,contact)
  }

  // delete contact
  delContact(id:any){
    // api call
    return this.http.delete(`${this.base_url}/contacts/${id}`)
  }

  // edit contact
  editContact(id:any, contact:ContactSchema){
    // api call
    return this.http.put(`${this.base_url}/contacts/${id}`,contact)  //only put and post can have only body
  }
}
