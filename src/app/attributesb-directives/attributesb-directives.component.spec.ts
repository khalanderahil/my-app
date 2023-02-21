import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesbDirectivesComponent } from './attributesb-directives.component';

describe('AttributesbDirectivesComponent', () => {
  let component: AttributesbDirectivesComponent;
  let fixture: ComponentFixture<AttributesbDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributesbDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributesbDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
