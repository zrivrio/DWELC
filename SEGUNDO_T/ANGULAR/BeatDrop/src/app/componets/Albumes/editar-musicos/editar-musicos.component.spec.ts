import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMusicosComponent } from './editar-musicos.component';

describe('EditarMusicosComponent', () => {
  let component: EditarMusicosComponent;
  let fixture: ComponentFixture<EditarMusicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarMusicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMusicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
