import { Component } from '@angular/core';
import { f } from './person/person.component'
export type Person = {
  name: string;
  url: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  persons: Person[] = [
    {name: 'Narek', url: 'assets/narek.jpg'},
    {name: 'Luso', url: 'assets/luso.jpg'},
    {name: 'Zaven', url: 'assets/zaven.jpg'},
    {name: 'Goqor', url: 'assets/goqor.jpg'},
    {name: 'Hermine', url: 'assets/hermine.jpeg'},
  ]
}
let x:number = 50
let y = "Gugo"