import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomejihanComponent } from './homejihan.component';

describe('HomejihanComponent', () => {
  let component: HomejihanComponent;
  let fixture: ComponentFixture<HomejihanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomejihanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomejihanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
