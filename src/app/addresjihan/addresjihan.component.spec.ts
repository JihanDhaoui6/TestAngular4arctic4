import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresjihanComponent } from './addresjihan.component';

describe('AddresjihanComponent', () => {
  let component: AddresjihanComponent;
  let fixture: ComponentFixture<AddresjihanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddresjihanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddresjihanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
