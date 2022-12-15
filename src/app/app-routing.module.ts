import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { DeleteComponent } from './delete/delete.component';
import { EditLivreComponent } from './edit-livre/edit-livre.component';
import { ListeLivreComponent } from './liste-livre/liste-livre.component';

const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:"accueil"},
  {path:'accueil',component:ListeLivreComponent},
  {path:'add',component:AddLivreComponent},
  {path:'edit/:id_livre',component:EditLivreComponent},
  {path:'delete/:id_livre',component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
