import { Component } from '@angular/core';
import { relojComponent } from './reloj/components/reloj_component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'GESTIÓN DEL BANCO';
  cantidad = '150000,43 €'
  
}
