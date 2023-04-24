import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListaPensamentosComponent } from './components/pensamentos/lista-pensamentos/lista-pensamentos.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: 'mural'},
  {path:'criar-pensamento', component: CriarPensamentoComponent},
  {path:'mural', component: ListaPensamentosComponent},
  {path:'pensamentos/excluir-pensamento/:id', component: ExcluirPensamentoComponent},
  {path:'pensamentos/editar-pensamento/:id', component: EditarPensamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
