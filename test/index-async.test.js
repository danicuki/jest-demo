const lib = require('../index-async.js')

test('async callback', (done) => {
  function callback(param) {
    expect(param).toBe(9);
    done()
  }
  lib.chamaDepoisDe2(9, callback)
});

test('suel', () => {
  return lib.getSuel().then((response) => {
    expect(response.data.name).toBe("Suel");
  })
});

test('suel', async () => {
  const response = await lib.getSuel()
  expect(response.data.name).toBe("Suel");
});