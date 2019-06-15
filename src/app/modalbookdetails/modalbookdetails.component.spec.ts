import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalbookdetailsComponent } from './modalbookdetails.component';

describe('ModalbookdetailsComponent', () => {
  let component: ModalbookdetailsComponent;
  let fixture: ComponentFixture<ModalbookdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalbookdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalbookdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
