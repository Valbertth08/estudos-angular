import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  username: String | null='';

//eu utilizo essa estrutura para conseguir pegar um parametro de uma rota, assim que o componente é inciado
constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.getNome();//é uma boa pratica utilizar função, não colocar o codigo direto
    //no ngOnInit
  }

  getNome(){
    this.route.queryParams.subscribe((params)=>
    this.username=params['username']
    //aqui eu informo qualque a chave(variavel) que eu quero pegar o valor
    //no caso aqui seria o username
    )
  }

}
