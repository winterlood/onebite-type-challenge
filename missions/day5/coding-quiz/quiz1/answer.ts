/*
[ 문제 소개 ]
아래 코드의 변수 a,b,c,d,e의 타입은 각각 어떻게 추론될까요?  
- 변수 a의 추론 결과를 A 타입에 정의해주세요
- 변수 b의 추론 결과를 B 타입에 정의해주세요
- 변수 c의 추론 결과를 C 타입에 정의해주세요
- 변수 d의 추론 결과를 D 타입에 정의해주세요
- 변수 e의 추론 결과를 E 타입에 정의해주세요
*/

let a = 10;
const b = 20;
const c = [1, 2];
const d = [1, "hello", true];
const e = [1, 2, 3] as const;

/* [Quiz] 변수 a의 타입은 무엇으로 추론될까요? */
type A = number;

/* [Quiz] 변수 b의 타입은 무엇으로 추론될까요? */
type B = 20;

/* [Quiz] 변수 c의 타입은 무엇으로 추론될까요? */
type C = number[];

/* [Quiz] 변수 d의 타입은 무엇으로 추론될까요? */
type D = (number | string | boolean)[];

/* [Quiz] 변수 e의 타입은 무엇으로 추론될까요? */
type E = [1, 2, 3];

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect, NotAny } from "@type-challenges/utils";

type TestCases = [
  Expect<Equal<A, number>>,
  Expect<Equal<B, 20>>,
  Expect<Equal<C, number[]>>,
  Expect<Equal<D, (number | string | boolean)[]>>,
  Expect<Equal<E, [1, 2, 3]>>
];
