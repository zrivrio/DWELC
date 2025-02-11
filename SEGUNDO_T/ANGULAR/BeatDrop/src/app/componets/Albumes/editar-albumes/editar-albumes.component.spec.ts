import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAlbumesComponent } from './editar-albumes.component';

describe('EditarAlbumesComponent', () => {
  let component: EditarAlbumesComponent;
  let fixture: ComponentFixture<EditarAlbumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarAlbumesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAlbumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
