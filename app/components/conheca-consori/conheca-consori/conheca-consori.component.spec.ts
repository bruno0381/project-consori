import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConhecaConsoriComponent } from './conheca-consori.component';

describe('ConhecaConsoriComponent', () => {
  let component: ConhecaConsoriComponent;
  let fixture: ComponentFixture<ConhecaConsoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConhecaConsoriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConhecaConsoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
