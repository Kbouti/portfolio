const testFile1 = require('./testFile1.js');

test('Sum adds 1 + 2 to equal 3', () =>{
    expect(testFile1.sum(1,2)).toBe(3);
})

