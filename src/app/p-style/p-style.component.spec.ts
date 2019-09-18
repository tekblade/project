import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PStyleComponent } from './p-style.component';

describe('PStyleComponent', () => {
  let component: PStyleComponent;
  let fixture: ComponentFixture<PStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
