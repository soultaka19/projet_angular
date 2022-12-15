import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http" ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FormsModule } from '@angular/forms';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { EditLivreComponent } from './edit-livre/edit-livre.component';
import { ListeLivreComponent } from './liste-livre/liste-livre.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    AddLivreComponent,
    EditLivreComponent,
    ListeLivreComponent,
    NavbarComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
