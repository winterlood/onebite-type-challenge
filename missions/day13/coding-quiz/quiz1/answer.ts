/*
[ 문제 소개 ]
다음 요구사항을 만족하도록 getSellersFromProducts 함수의 매개변수와 반환값 타입을 정의하세요
- getSellersFromProducts 함수는 매개변수로 받은 Product 배열로부터, seller 객체만 추출해 새로운 배열로 반환하는 함수입니다.
- 반환값을 명시적으로 설정해야 합니다 (인덱스드 엑세스 타입)
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

function getSellersFromProducts(products: Product[]): Product["seller"][] {
  return products.map((product) => product.seller);
}

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect } from "@type-challenges/utils";

type TestCases = [
  Expect<Equal<Parameters<typeof getSellersFromProducts>[0], Product[]>>,
  Expect<Equal<ReturnType<typeof getSellersFromProducts>, Product["seller"][]>>
];
