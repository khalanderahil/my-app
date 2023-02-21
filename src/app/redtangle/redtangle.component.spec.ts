import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedtangleComponent } from './redtangle.component';

describe('RedtangleComponent', () => {
  let component: RedtangleComponent;
  let fixture: ComponentFixture<RedtangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedtangleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedtangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
