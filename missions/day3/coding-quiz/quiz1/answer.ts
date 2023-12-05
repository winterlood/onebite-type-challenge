/*
[ 문제 소개 ]
다음 요구사항을 만족하는 4개의 타입을 정의하세요

- Any 타입은 사용할 수 없습니다.
- Nums 타입은 숫자만 담을 수 있는 배열 타입입니다.
- Colors 타입은 문자열만 담을 수 있는 배열 타입입니다.
- Coords 타입은 [숫자, 숫자] 형태의 배열만 허용하는 타입입니다.
- Info 타입은 [숫자, 문자열] 형태의 배열만 허용하는 타입입니다.
*/

/* [Quiz] 아래의 코드를 완성해 오류를 제거하세요 */
type Nums = number[];
type Colors = string[];
type Coords = [number, number];
type Info = [string, number];

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect, NotAny } from "@type-challenges/utils";

const numbers: Nums = [1, 2, 3, 4, 5];
const colors: Colors = ["red", "green", "blue"];
const coordinates: Coords = [3, 5];
const info: Info = ["이정환", 27];

type cases = [
  Expect<NotAny<Nums | Colors | Coords | Info>>,
  Expect<Equal<Nums, number[]>>,
  Expect<Equal<Colors, string[]>>,
  Expect<Equal<Coords, [number, number]>>,
  Expect<Equal<Info, [string, number]>>
];
