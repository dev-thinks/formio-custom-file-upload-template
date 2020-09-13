import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRenderComponent } from './form-render.component';

describe('FormRenderComponent', () => {
  let component: FormRenderComponent;
  let fixture: ComponentFixture<FormRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
