import { RestClient } from './rest-client';

describe('RestClient', () => {
  it('should create an instance', () => {
    expect(new RestClient()).toBeTruthy();
  });
});
