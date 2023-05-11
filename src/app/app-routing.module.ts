import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //            6.3. - all-contacts : path - http://localhost:4200/
  {
    path:'',component:AllContactsComponent
  },
  //            6.4. - add-contact  : path - http://localhost:4200/add-contact
  {
    path:'add-contact',component:AddContactComponent
  },
  //             6.5. - view contact : path - http://localhost:4200/view-contact
  {
    path:'view-contact/:id',component:ViewContactComponent
  },
  //            6.6. - edit contact : path - http://localhost:4200/id
  {
    path:'edit-contact/:id',component:EditContactComponent
  },
    //            6.6. - page not found : path - http://localhost:4200/id
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
