# js-playground
ESLint + Prettier + Jest (airbnb-base)

- `npm run test` 시에 `src` 폴더 내부에 있는 파일 모두 test 하도록 설정되어있습니다.
  - `package.json` 파일에서 `scripts` 의 `test` 에서 test 하고자 하는 폴더만 지정할 수 있습니다.
 
```javascript
{
 ...
  "scripts": {
    "test": "jest ./src"
  },
  ...
}

```

- test template 는 input 의 Object.values 순으로 테스트하도록 되어있습니다. 
  - 따라서 인수의 순서는 Object.values 의 정렬 순서를 따릅니다.


```javascript

...
describe('Test', () => {
  testCase.input.forEach((input, index) => {
    test(`Test Case ${index + 1}`, () => {
      expect(solution(...Object.values(input))).toEqual(testCase.answer[index]);
    });
  });
});
...

```
