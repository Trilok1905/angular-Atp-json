import { AtpRoutingModule } from './atp-routing.module';

describe('AtpRoutingModule', () => {
  let atpRoutingModule: AtpRoutingModule;

  beforeEach(() => {
    atpRoutingModule = new AtpRoutingModule();
  });

  it('should create an instance', () => {
    expect(atpRoutingModule).toBeTruthy();
  });
});
