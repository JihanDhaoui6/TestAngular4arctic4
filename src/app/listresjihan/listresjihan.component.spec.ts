import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListresjihanComponent } from './listresjihan.component';

describe('ListresjihanComponent', () => {
  let component: ListresjihanComponent;
  let fixture: ComponentFixture<ListresjihanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListresjihanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListresjihanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
