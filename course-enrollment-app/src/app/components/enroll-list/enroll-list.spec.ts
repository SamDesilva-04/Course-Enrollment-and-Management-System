import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollList } from './enroll-list';

describe('EnrollList', () => {
  let component: EnrollList;
  let fixture: ComponentFixture<EnrollList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
