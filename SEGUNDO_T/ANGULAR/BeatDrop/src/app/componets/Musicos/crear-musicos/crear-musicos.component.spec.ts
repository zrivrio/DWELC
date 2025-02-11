import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMusicosComponent } from './crear-musicos.component';

describe('CrearMusicosComponent', () => {
  let component: CrearMusicosComponent;
  let fixture: ComponentFixture<CrearMusicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearMusicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearMusicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
