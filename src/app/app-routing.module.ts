import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacaoDeputadosComponent } from './pages/informacao-deputados/informacao-deputados.component';


const routes: Routes = [
  {
    path: 'informacao-deputados',
    component: InformacaoDeputadosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
