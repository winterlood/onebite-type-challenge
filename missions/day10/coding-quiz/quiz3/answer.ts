/*
[ 문제 소개 ]
다음 요구사항을 만족하는 map 함수의 타입을 구현하세요
- map 함수는 자바스크립트 배열 메서드 map을 본따 만든 함수입니다.
- 2개의 매개변수 arr과 callback을 받습니다.
- arr 배열의 모든 요소에 callback 함수를 수행한 결과를 배열로 모아 반환합니다.
*/

/* [Quiz] 아래의 코드를 수정하세요 */
function map<T, U>(arr: T[], callback: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect, NotAny } from "@type-challenges/utils";
const tc1: number[] = map([1, 2, 3], (item) => item);
const tc2: string[] = map([1, 2, 3], (item) => item.toString());

type TestCases = [
  Expect<NotAny<Parameters<typeof map>[0]>>,
  Expect<NotAny<Parameters<typeof map>[1]>>,
  Expect<Equal<typeof tc1, number[]>>,
  Expect<Equal<typeof tc2, string[]>>
];
