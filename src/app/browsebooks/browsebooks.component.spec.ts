import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsebooksComponent } from './browsebooks.component';

describe('BrowsebooksComponent', () => {
  let component: BrowsebooksComponent;
  let fixture: ComponentFixture<BrowsebooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsebooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsebooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
