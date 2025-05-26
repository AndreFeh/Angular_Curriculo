import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedTagComponent } from './fixed-tag.component';

describe('FixedTagComponent', () => {
  let component: FixedTagComponent;
  let fixture: ComponentFixture<FixedTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FixedTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
