/*
[ 문제 소개 ]
다음 요구사항을 만족하는 getLastValue 함수의 타입을 정의하세요
- getLastValue 함수는 매개변수로 배열을 받아 배열의 마지막 값을 반환하는 함수입니다.
- 매개변수 data에는 빈 배열을 제외한 모든 배열이 들어올 수 있습니다.
- 반환값의 타입은 매개변수 data 배열의 마지막 요소의 타입이어야 합니다.
  - ex) data 배열의 값이 [1, "hello"] 일 경우 반환값은 string 타입입니다.
  - ex) data 배열의 값이 ["hello", 1] 일 경우 반환값은 number 타입입니다.
*/

/* [Quiz] 아래의 코드를 수정하세요 */
function getLastValue<T>(data: [...any, T]): T {
  return data[data.length - 1];
}

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
const a: string = getLastValue([1, 2, "3"]);
const b: boolean = getLastValue([1, 2, true]);

import { Equal, Expect, NotAny } from "@type-challenges/utils";

const tc1 = getLastValue([1, 1]);
const tc2 = getLastValue([1, "2"]);
const tc3 = getLastValue([1, true]);
const tc4 = getLastValue([1, undefined]);

type TestCases = [
  Expect<NotAny<Parameters<typeof getLastValue>[0]>>, // 첫번째 파라미터가 any 타입이 아닐 것
  Expect<Equal<typeof tc1, number>>,
  Expect<Equal<typeof tc2, string>>,
  Expect<Equal<typeof tc3, boolean>>,
  Expect<Equal<typeof tc4, undefined>>
];
