import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
 //users: String[]= ['pedro','luis','henrique']
 users: User[]=[
  {
    nome: 'Vinicius',
    Idade: 25
  },
  {
    nome: 'Vinicius',
    Idade: 25
  },
  {
    nome: 'Julio',
    Idade: 19
  },
  {
    nome: 'Maria',
    Idade: 32
  }

 ]
}
