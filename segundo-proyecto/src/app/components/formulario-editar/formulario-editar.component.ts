import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ContactoServiceInterface } from '../../services/contacto.service.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-editar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './formulario-editar.component.html',
  styleUrl: './formulario-editar.component.css'
})

export class FormularioEditarComponent {

  form : FormGroup;
  id:number = 0;

  // Inyectamos el servicio Router (@Autowired en Java)
  // El modificador private en el parametro crea automaticamente el atributo en la clase
  // Azucar Sintatica de typescript
  constructor(private fb:FormBuilder, private router:Router, private rutaActual:ActivatedRoute, private service:ContactoServiceInterface) {
    // Obtenemos el id de la ruta (No la conocia)
    // this.id = this.rutaActual.snapshot.params["id"];    

    // Otra Manera de obtener el id de la ruta
    this.rutaActual.params.subscribe(params => {
      this.id = params["id"];
    });

    // Añadir valores base y validadores
    this.form = this.fb.group({
      documento: ['', [Validators.required, Validators.min(1000000), Validators.max(99999999)]],
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      fechaNacimiento: [''],
      genero: ['']
    });
  }

  modificar() {
    if (this.form.valid) {
      // Subscribe es como la accion de despues de modificar
      this.service.modificar(this.id, this.form.value).subscribe({
        next : () => {
          this.router.navigate(['']);
        }
      })
    }
  }

  volver() {
    // Navegamos a la ruta raiz programaticamente
    this.router.navigate(['']);
  }
}
