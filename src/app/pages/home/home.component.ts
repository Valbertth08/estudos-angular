import { Component, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
//essa função é chamada quando um componente é parado de ser exebido na tela, ou seja ele foi destruido,  e é chamada de forma automaica essa função.
export class HomeComponent implements OnDestroy, DoCheck {
  ngOnDestroy(): void {
    console.log("destruiu")
  }
  //responsavel por verifica se teve alguma alteração no componente
  ngDoCheck(): void {
    console.log("uma mudança foi feita")
  }
}
