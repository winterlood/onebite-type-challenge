/*
[ 문제 소개 ]
다음 조건을 만족하는 3개의 타입을 추가로 정의하세요
- PartialProduct 타입은 Product 타입의 모든 프로퍼티를 다 선택적 프로퍼티로 바꾼 타입입니다.
- ReadonlyProduct 타입은 Product 타입의 모든 프로퍼티를 다 읽기 전용 프로퍼티로 바꾼 타입입니다.
- ReadonlyPartialProduct 타입은 Product 타입의 모든 프로퍼티를 다 선택적, 읽기 전용 프로퍼티로 바꾼 타입입니다.
*/

/* [Quiz] 아래의 코드를 수정하세요 */
interface Product {
  id: number;
  name: string;
  price: number;
  seller: {
    id: number;
    name: string;
    company: string;
  };
}

type PartialProduct = {
  [key in keyof Product]?: Product[key];
};

type ReadonlyProduct = {
  readonly [key in keyof Product]: Product[key];
};

type ReadonlyPartialProduct = {
  readonly [key in keyof Product]?: Product[key];
};

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect, NotEqual } from "@type-challenges/utils";

type TestCases = [
  Expect<Equal<PartialProduct, Partial<Product>>>,
  Expect<Equal<ReadonlyProduct, Readonly<Product>>>,
  Expect<Equal<ReadonlyPartialProduct, Readonly<Partial<Product>>>>
];
