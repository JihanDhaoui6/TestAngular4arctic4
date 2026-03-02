import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsresjihanComponent } from './detailsresjihan.component';

describe('DetailsresjihanComponent', () => {
  let component: DetailsresjihanComponent;
  let fixture: ComponentFixture<DetailsresjihanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsresjihanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsresjihanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
