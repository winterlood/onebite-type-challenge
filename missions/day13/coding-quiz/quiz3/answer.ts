/*
[ 문제 소개 ]
배열 타입의 요소를 추출하는 InferArrayType<T> 타입을 구현하세요
*/

/* [Quiz] 아래의 코드를 수정하세요 */
type InferArrayType<T> = T extends (infer R)[] ? R : never;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Expect, Equal } from "@type-challenges/utils";

const arr1 = [1, 2, 3];
const arr2 = ["hello", "myname", "winterlood"];
const arr3 = [1, true, "hi"];

type TestCases = [
  Expect<Equal<InferArrayType<typeof arr1>, number>>,
  Expect<Equal<InferArrayType<typeof arr2>, string>>,
  Expect<Equal<InferArrayType<typeof arr3>, number | string | boolean>>
];
