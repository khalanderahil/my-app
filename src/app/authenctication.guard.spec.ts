import { TestBed } from '@angular/core/testing';

import { AuthencticationGuard } from './authenctication.guard';

describe('AuthencticationGuard', () => {
  let guard: AuthencticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthencticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
