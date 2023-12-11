/*
[ 문제 소개 ]
다음 요구사항을 만족하는 func 함수의 타입을 정의하세요
- func 함수는 매개변수를 그대로 반환하는 함수입니다.
- 매개변수 value에는 모든 타입의 값이 들어올 수 있습니다.
- 반환값의 타입은 매개변수로 전달된 값의 타입과 같습니다.
  - ex) value의 값이 1일 경우 반환값은 number 타입입니다.
  - ex) value의 값이 'hi'일 경우 반환값은 string 타입입니다.
  - ex) value의 값이 [1,2]일 경우 반환값은 number[] 타입입니다.
*/

/* [Quiz] 아래의 코드를 수정하세요 */
function func(value: any) {
  return value;
}

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */

import { Equal, Expect, NotAny } from "@type-challenges/utils";

const tc1: number = func(1);
const tc2: string = func("hello");
const tc3: boolean = func(true as boolean);
const tc4: number[] = func([1, 2, 3]);

type TestCases = [
  Expect<NotAny<Parameters<typeof func>[0]>>, // 첫번째 파라미터가 any 타입이 아닐 것
  Expect<Equal<typeof tc1, number>>,
  Expect<Equal<typeof tc2, string>>,
  Expect<Equal<typeof tc3, boolean>>,
  Expect<Equal<typeof tc4, number[]>>
];
