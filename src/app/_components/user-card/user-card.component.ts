import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input( ) user: User={
    nome:'',
    Idade:0

  }

  @Output() userInfoEmitter= new EventEmitter<User>();
  //indico que eu vou emitir, partindo desse componente os dados do usuario
  //recupero os dados apartir do componente pai, o componente pai é o que chama o user-card
  RetornarDados(){
    this.userInfoEmitter.emit(this.user)
  }
}
