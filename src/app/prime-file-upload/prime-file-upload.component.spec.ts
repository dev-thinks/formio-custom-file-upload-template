import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeFileUploadComponent } from './prime-file-upload.component';

describe('PrimeFileUploadComponent', () => {
  let component: PrimeFileUploadComponent;
  let fixture: ComponentFixture<PrimeFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
