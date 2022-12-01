import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from "./components/lista/lista.component";
import {DetalleComponent} from "./components/detalhe/detalhe.component";

const routes: Routes = [
  {path:'lista',component: ListaComponent},
  {path:'detalle/:id',component: DetalleComponent},
  {path:'**', pathMatch:'full', redirectTo:'lista'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

