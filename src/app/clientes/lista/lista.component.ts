import { Component } from '@angular/core';
import { Clientes } from '../clientes';
import { Operaciones } from '../operaciones';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public arrClientes : Clientes[] = [
    new Clientes(1, "Salva"),
    new Clientes(2, "Pedro"),
    new Clientes(3, "Jacinto")
  ]

  public arrOperaciones : Operaciones[] = [
    
  ]
}
