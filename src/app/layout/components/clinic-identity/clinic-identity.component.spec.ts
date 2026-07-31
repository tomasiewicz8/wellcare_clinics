import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicIdentityComponent } from './clinic-identity.component';

describe('ClinicIdentityComponent', () => {
  let component: ClinicIdentityComponent;
  let fixture: ComponentFixture<ClinicIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicIdentityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClinicIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
