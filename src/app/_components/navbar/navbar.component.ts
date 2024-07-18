import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
//essa função é disparada assim que o componente é incializado
export class NavbarComponent implements OnInit {
    ngOnInit(): void {
      console.log("nav bar")
    }
}
