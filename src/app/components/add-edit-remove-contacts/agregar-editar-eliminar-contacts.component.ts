import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacts } from 'src/app/interfaces/contacts';

@Component({
  selector: 'app-agregar-editar-eliminar-contacts',
  templateUrl: './agregar-editar-eliminar-contacts.component.html',
  styleUrls: ['./agregar-editar-eliminar-contacts.component.scss']
})
export class AddeditremovecontactsComponent implements OnInit {
  
  loading: boolean = false;
  form : FormGroup

  constructor(private fb : FormBuilder) { 
    this.form = this.fb.group({
      nombre: ["",Validators.required],
      apellido:["",Validators.required],
      celular:["",Validators.required],
      telFijo:["",Validators.required],
      email:["",Validators.required],
      cumpleanio:["",Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarContacts(){ /* metodo para atrapar los valores del formularios para despues enviarlos al back*/
    // const nombre = this.form.get('nombre')?.value;

    const nombre = this.form.value.nombre;

    const contacts : Contacts = {
      name : this.form.value.nombre,
      surname : this.form.value.apellido,
      cel : this.form.value.celular,
      tel : this.form.value.telFijo,
      email : this.form.value.email,
      birthday : this.form.value.cumpleanio
    }

    console.log(contacts)
  }
  
  

}
