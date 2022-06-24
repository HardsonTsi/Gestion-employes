import {TestBed} from '@angular/core/testing';

import {EmployeeServices} from './employee.services';

describe('EmployeService', () => {
  let service: EmployeeServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
