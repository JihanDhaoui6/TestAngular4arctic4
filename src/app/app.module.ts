// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomejihanComponent } from './homejihan/homejihan.component';
import { ListresjihanComponent } from './listresjihan/listresjihan.component';
import { AddresjihanComponent } from './addresjihan/addresjihan.component';
import { UpdateresjihanComponent } from './updateresjihan/updateresjihan.component';
import { DetailsresjihanComponent } from './detailsresjihan/detailsresjihan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomejihanComponent,
    ListresjihanComponent,
    AddresjihanComponent,
    UpdateresjihanComponent,
    DetailsresjihanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }