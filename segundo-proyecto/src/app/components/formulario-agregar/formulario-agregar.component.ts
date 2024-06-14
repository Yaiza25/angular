import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-formulario-agregar',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-agregar.component.html',
  styleUrl: './formulario-agregar.component.css'
})

export class FormularioAgregarComponent {

  // Inyectamos el servicio Router (@Autowired en Java)
  // El modificador private en el parametro crea automaticamente el atributo en la clase
  // Azucar Sintatica de typescript
  constructor(private router:Router, private rutaActual:ActivatedRoute) {

  }

  contactoForm : FormGroup = new FormGroup({});

}
