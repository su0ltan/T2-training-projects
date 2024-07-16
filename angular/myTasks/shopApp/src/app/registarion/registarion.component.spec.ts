import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarionComponent } from './registarion.component';

describe('RegistarionComponent', () => {
  let component: RegistarionComponent;
  let fixture: ComponentFixture<RegistarionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistarionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistarionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
