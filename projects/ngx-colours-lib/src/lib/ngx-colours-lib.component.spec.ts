import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxColoursLibComponent } from './ngx-colours-lib.component';

describe('NgxColoursLibComponent', () => {
  let component: NgxColoursLibComponent;
  let fixture: ComponentFixture<NgxColoursLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxColoursLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxColoursLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
