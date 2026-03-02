import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateresjihanComponent } from './updateresjihan.component';

describe('UpdateresjihanComponent', () => {
  let component: UpdateresjihanComponent;
  let fixture: ComponentFixture<UpdateresjihanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateresjihanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateresjihanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
