import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightTagComponent } from './right-tag.component';

describe('RightTagComponent', () => {
  let component: RightTagComponent;
  let fixture: ComponentFixture<RightTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
