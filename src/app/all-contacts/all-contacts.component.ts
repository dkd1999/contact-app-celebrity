import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css'],
})
export class AllContactsComponent implements OnInit {
  allContacts: any = [];
  isLoading:boolean = true  //a variable to show the status of the allcontacts
  errorMsg:string=''
  searchKey:string=''
  output:any

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.allcontacts()
   
  }

   allcontacts() {
    this.api.getAllContacts().subscribe({
      next: (response: any) => {
        console.log(response);
        setTimeout(() => {              //to get a time delay for the spinner to show
          this.allContacts = response
          this.isLoading = false
        }, 1000);
      },
      error:(err: any) => {
        console.log(err.message);
        console.log('Status : ',err.status);
          this.errorMsg = err.message
          this.isLoading = false //else when error occurs isLoading will be true and will spin the shit out
      },
    });
  }

  delContact(id:any){
    // api call
    this.api.delContact(id).subscribe({
      next:(response:any)=>{
        this.allcontacts()
      }
    })
  }
}
