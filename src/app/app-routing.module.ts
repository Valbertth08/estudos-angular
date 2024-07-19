import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './_components/users/users.component';

const routes: Routes = [
  //path: "caminho", component: componente para o caminho
  {path: '',component: HomeComponent},//indico que esse componente tem que ser carregado na raiz do programa
  {path: 'users',component: UsersComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
