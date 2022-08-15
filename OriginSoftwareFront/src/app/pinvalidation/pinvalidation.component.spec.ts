import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinvalidationComponent } from './pinvalidation.component';

describe('PinvalidationComponent', () => {
  let component: PinvalidationComponent;
  let fixture: ComponentFixture<PinvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinvalidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
