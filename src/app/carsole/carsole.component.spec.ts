import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsoleComponent } from './carsole.component';

describe('CarsoleComponent', () => {
  let component: CarsoleComponent;
  let fixture: ComponentFixture<CarsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
