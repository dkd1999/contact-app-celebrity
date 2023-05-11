import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ContactSchema } from 'src/models/contactSchema';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact:ContactSchema={}
  groups:any=[]
  constructor(private editActivatedRoute:ActivatedRoute, private api:ApiService, private editRouter:Router){}

  ngOnInit(): void {
    this.editActivatedRoute.params.subscribe({
      next:(pathparameter:any)=>{
        console.log(pathparameter);
        const{id} = pathparameter
        console.log(id);
        
        // function from api
        this.api.viewContact(id).subscribe({
          next:(response:any)=>{
            console.log(response);
            this.contact=response
          }
        })
      }
    })

    // get all groups
  this.api.Getgroups().subscribe({
    next:(allGroups:any)=>{
      this.groups = allGroups
      console.log(allGroups);
      
    }
  })
  }

  // editcontact
  editContact(id:any){
    // api call to editcontact
    this.api.editContact(id,this.contact).subscribe({
      next:(response:any)=>{
        console.log(response);
        this.editRouter.navigateByUrl("")
        
      }
    })
  }

}
