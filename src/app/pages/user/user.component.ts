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
    this.route.paramMap.subscribe((params)=>{//essa função é usada para pegar um parametro ou mais de uma rota
      this.username=params.get('username')//pego o parametro username
    })
  }

}
