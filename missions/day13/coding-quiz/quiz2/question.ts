/*
[ 문제 소개 ]
다음 조건을 만족하는 Extract<T, U> 타입을 구현하세요
- Extract<T, U> 타입은 T로부터 U만 추출하는 타입입니다.
  - ex) Extract<string | boolean, boolean>은 boolean 타입이 됩니다.
  - ex) Extract<number | string, string>은 string 타입이 됩니다.

(힌트💡 강의 중 직접 구현하는 Exclude 타입의 반대라고 생각해보세요!)
*/

/* [Quiz] 아래의 코드를 수정하세요 */
type Extract<T, U> = any;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect } from "@type-challenges/utils";

type TestCases = [
  Expect<Equal<Extract<string | number, string>, string>>,
  Expect<Equal<Extract<string | number, number>, number>>
];
