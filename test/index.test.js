const lib = require('../index.js')

describe('concatenarString', () => {
  test('"a" com "b" dá "ab"', () => {
    expect(lib.concatenarString('a', 'b')).toBe("ab")
  });

  test('"b" com "d" dá "bd"', () => {
    expect(lib.concatenarString('b', 'd')).toBe("bd")
  });
});

describe('concatenarArrays', () => {
  test('[1] com [2] dá [1, 2]', () => {
    const result = lib.concatenarArrays([1], [2])
    expect(result).toEqual([1, 2]);
    expect(result).toContain(1);
  });
  test('[] com [] dá []', () => {
    expect(lib.concatenarArrays([], [])).toEqual([]);
    expect(lib.concatenarArrays([], [])).toEqual([]);
  });
});

