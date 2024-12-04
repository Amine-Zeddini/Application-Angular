import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdevComponent } from './formdev.component';

describe('FormdevComponent', () => {
  let component: FormdevComponent;
  let fixture: ComponentFixture<FormdevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormdevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
