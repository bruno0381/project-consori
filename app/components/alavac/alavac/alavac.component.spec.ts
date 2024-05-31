import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlavacComponent } from './alavac.component';

describe('AlavacComponent', () => {
  let component: AlavacComponent;
  let fixture: ComponentFixture<AlavacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlavacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlavacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
