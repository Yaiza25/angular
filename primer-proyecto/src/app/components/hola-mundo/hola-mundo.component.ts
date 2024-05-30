import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hola-mundo.component.html',
  styleUrl: './hola-mundo.component.css'
})

export class HolaMundoComponent {
  // Opcionalmente public
  public titulo : string = "Hola mundo desde el componente HolaMundoComponent";
  color : string = "blue";
  alumnos : string[] = [
    "Jesus", "Unai", "Jeray", "Mikel", "Maore"
  ]
}
