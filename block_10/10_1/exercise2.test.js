const myRemove = require('./exercise2');

describe('testing myRemove', () => {
  it('should remove value 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('should not be the same', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('should be the same array', () => {
    const myList = [5, 6, 7, 8];
    myRemove(myList, [5, 6, 7, 8]);
    expect(myList).toEqual([5, 6, 7, 8]);
  });
});
