/*
[ 문제 소개 ]
다음 조건을 만족하는 Score 타입을 구현하세요
- Score 타입은 점수를 나타내기 위한 문자열 타입으로 '${0부터 10까지의 정수}-${0부터 10까지의 정수}'형식을 갖습니다'
  - ex) "1-0", "3-2", "0-4" 이런 형태의 문자열 타입입니다.
  - ex) 어느쪽의 점수에도 두 자리수는 올 수 없습니다.
*/

/* [Quiz] 아래의 코드를 수정하세요 */
type Score = any;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect, ExpectExtends, ExpectFalse } from "@type-challenges/utils";

const tc1 = "19-0";
const tc2 = "5-11";
const tc3 = "9-1";
const tc4 = "2-8";
const tc5 = "7-2";

type TestCases = [
  ExpectFalse<ExpectExtends<Score, typeof tc1>>,
  ExpectFalse<ExpectExtends<Score, typeof tc2>>,
  Expect<ExpectExtends<Score, typeof tc3>>,
  Expect<ExpectExtends<Score, typeof tc4>>,
  Expect<ExpectExtends<Score, typeof tc5>>
];
