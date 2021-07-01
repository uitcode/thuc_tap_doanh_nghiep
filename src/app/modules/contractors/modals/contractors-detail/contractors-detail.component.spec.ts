import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorsDetailComponent } from './contractors-detail.component';

describe('ContractorsDetailComponent', () => {
  let component: ContractorsDetailComponent;
  let fixture: ComponentFixture<ContractorsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
