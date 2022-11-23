import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPaswwordComponent } from './form-paswword.component';

describe('FormPaswwordComponent', () => {
  let component: FormPaswwordComponent;
  let fixture: ComponentFixture<FormPaswwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPaswwordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPaswwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
