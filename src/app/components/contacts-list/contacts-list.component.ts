import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { config } from 'rxjs';
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

  displayedColumns: string[] = ['nombre','apellido','cel','tel','email','cumple','acciones'];
  dataSource = new MatTableDataSource<Contacts>(ListContacts);
  loading: boolean = false;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel =" Contactos por pagina"
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarContacto(){
    this.loading = true;

    
   setTimeout(() => {

    this.loading = false;
    this._snackBar.open('El contacto ha sido eliminado con exito.', '',{
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top'
    })
    }, 3000);
     
  }
}
