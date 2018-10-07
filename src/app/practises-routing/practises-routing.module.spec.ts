import { PractisesRoutingModule } from './practises-routing.module';

describe('PractisesRoutingModule', () => {
  let practisesRoutingModule: PractisesRoutingModule;

  beforeEach(() => {
    practisesRoutingModule = new PractisesRoutingModule();
  });

  it('should create an instance', () => {
    expect(practisesRoutingModule).toBeTruthy();
  });
});
