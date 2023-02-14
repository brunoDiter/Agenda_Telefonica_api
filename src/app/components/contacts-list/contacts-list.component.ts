import { Component, OnInit } from '@angular/core';
import { Contacts } from 'src/app/interfaces/contacts';



const ELEMENT_DATA: Contacts[] = [
  {name : "Bruno", surname: "Di Terlizzi", cel: 3412799201 ,tel : 4610399, email: "bruno.diterlizzi@gmail.com",birthday: "21/09/90"},
  {name : "Bruno", surname: "Di Terlizzi", cel: 3412799201 ,tel : 4610399, email: "bruno.diterlizzi@gmail.com",birthday: "21/09/90"},
  {name : "Bruno", surname: "Di Terlizzi", cel: 3412799201 ,tel : 4610399, email: "bruno.diterlizzi@gmail.com",birthday: "21/09/90"},
  {name : "Bruno", surname: "Di Terlizzi", cel: 3412799201 ,tel : 4610399, email: "bruno.diterlizzi@gmail.com",birthday: "21/09/90"},
  {name : "Bruno", surname: "Di Terlizzi", cel: 3412799201 ,tel : 4610399, email: "bruno.diterlizzi@gmail.com",birthday: "21/09/90"},
  {name : "Bruno", surname: "Di Terlizzi", cel: 3412799201 ,tel : 4610399, email: "bruno.diterlizzi@gmail.com",birthday: "21/09/90"},
  {name : "Bruno", surname: "Di Terlizzi", cel: 3412799201 ,tel : 4610399, email: "bruno.diterlizzi@gmail.com",birthday: "21/09/90"},
  {name : "Bruno", surname: "Di Terlizzi", cel: 3412799201 ,tel : 4610399, email: "bruno.diterlizzi@gmail.com",birthday: "21/09/90"},

];

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  displayedColumns: string[] = ['nombre','apellido','cel','tel','email','cumple'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
