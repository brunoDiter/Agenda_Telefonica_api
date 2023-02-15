import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Contacts } from 'src/app/interfaces/contacts';



const ListContacts: Contacts[] = [
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
export class ContactsListComponent implements OnInit,AfterViewInit {

  displayedColumns: string[] = ['nombre','apellido','cel','tel','email','cumple'];
  dataSource = new MatTableDataSource<Contacts>(ListContacts);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel =" Contactos por pagina"
  }

}
