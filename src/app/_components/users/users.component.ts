import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  ngOnInit(): void {
    this.initilizeForm();
  }

  userSelecionado: User| undefined;
  //estou importando o formgroup para
  userForm: FormGroup =new FormGroup({});
  constructor(private fb: FormBuilder){}//responsavel por criar o form

 //users: String[]= ['pedro','luis','henrique']
 initilizeForm(){
  this.userForm=this.fb.group({
    nome:['',[Validators.required,Validators.maxLength(250)]],
    idade:['',[Validators.required, Validators.min(12),Validators.max(110)]]
  })
 }
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

 infoUserSelecionado (user: User){
  this.userSelecionado=user;
 }

 SubmitForm(){
  if(this.userForm.valid){
    this.users.push(this.userForm.value)//estou adicionando um noveo usuario a lista
    this.userForm.reset()///reseta os campos(limpa)
  }

 }
}
