import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAlbumesComponent } from './listar-albumes.component';

describe('ListarAlbumesComponent', () => {
  let component: ListarAlbumesComponent;
  let fixture: ComponentFixture<ListarAlbumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarAlbumesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAlbumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
