// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomejihanComponent } from './homejihan/homejihan.component';
import { ListresjihanComponent } from './listresjihan/listresjihan.component';
import { AddresjihanComponent } from './addresjihan/addresjihan.component';
import { UpdateresjihanComponent } from './updateresjihan/updateresjihan.component';
import { DetailsresjihanComponent } from './detailsresjihan/detailsresjihan.component';

const routes: Routes = [
  { path: '', component: HomejihanComponent },
  { path: 'list', component: ListresjihanComponent },
  { path: 'add', component: AddresjihanComponent },
  { path: 'update/:id', component: UpdateresjihanComponent },
  { path: 'details/:id', component: DetailsresjihanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }