const sum = require('./exercise1');

describe('testing sum', () => {
  it('should have sum two values', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('should be zero', () => {
    expect(sum(0,0)).toBe(0);
  });

  it('should have an error', () => {
    expect(() => {
      sum(4,'5');
    }).toThrow();
  });

  it('should have an error', () => {
    expect(() => {
      sum(4,'5');
    }).toThrow(new Error('parameters must be numbers'));
  });
});
