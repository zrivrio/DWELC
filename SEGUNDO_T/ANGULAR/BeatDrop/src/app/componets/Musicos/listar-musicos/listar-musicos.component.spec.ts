import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMusicosComponent } from './listar-musicos.component';

describe('ListarMusicosComponent', () => {
  let component: ListarMusicosComponent;
  let fixture: ComponentFixture<ListarMusicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarMusicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMusicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
