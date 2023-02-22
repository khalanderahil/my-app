import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDirectivesComponent } from './about-directives.component';

describe('AboutDirectivesComponent', () => {
  let component: AboutDirectivesComponent;
  let fixture: ComponentFixture<AboutDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
