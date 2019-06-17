import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsofthedayComponent } from './picsoftheday.component';

describe('PicsofthedayComponent', () => {
  let component: PicsofthedayComponent;
  let fixture: ComponentFixture<PicsofthedayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicsofthedayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicsofthedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
