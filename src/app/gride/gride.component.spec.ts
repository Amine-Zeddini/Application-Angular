import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrideComponent } from './gride.component';

describe('GrideComponent', () => {
  let component: GrideComponent;
  let fixture: ComponentFixture<GrideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
