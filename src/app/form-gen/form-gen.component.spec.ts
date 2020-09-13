import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGenComponent } from './form-gen.component';

describe('FormGenComponent', () => {
  let component: FormGenComponent;
  let fixture: ComponentFixture<FormGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
