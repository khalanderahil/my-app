import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivestaskComponent } from './directivestask.component';

describe('DirectivestaskComponent', () => {
  let component: DirectivestaskComponent;
  let fixture: ComponentFixture<DirectivestaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivestaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivestaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
