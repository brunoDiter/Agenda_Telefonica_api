import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarEliminarContactsComponent } from './agregar-editar-eliminar-contacts.component';

describe('AgregarEditarEliminarContactsComponent', () => {
  let component: AgregarEditarEliminarContactsComponent;
  let fixture: ComponentFixture<AgregarEditarEliminarContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarEliminarContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarEliminarContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
