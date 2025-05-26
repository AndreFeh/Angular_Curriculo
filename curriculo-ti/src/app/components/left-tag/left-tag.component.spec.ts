import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTagComponent } from './left-tag.component';

describe('LeftTagComponent', () => {
  let component: LeftTagComponent;
  let fixture: ComponentFixture<LeftTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
