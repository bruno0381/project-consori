import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsorcioComponent } from './consorcio.component';

describe('ConsorcioComponent', () => {
  let component: ConsorcioComponent;
  let fixture: ComponentFixture<ConsorcioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsorcioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsorcioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
