const { solution } = require('./solution');

const testCase = {
  input: [
    {
      param1: 'test1',
      param2: 1,
    },
    {
      param1: 'test2',
      param2: 2,
    },
  ],
  answer: [true, true],
};

describe('Test', () => {
  testCase.input.forEach((input, index) => {
    test(`Test Case ${index + 1}`, () => {
      expect(solution(...Object.values(input))).toEqual(testCase.answer[index]);
    });
  });
});
