import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehilceComponent } from './vehilce.component';

describe('VehilceComponent', () => {
  let component: VehilceComponent;
  let fixture: ComponentFixture<VehilceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehilceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehilceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
