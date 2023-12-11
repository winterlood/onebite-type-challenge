/*
[ 문제 소개 ]
getComments 함수의 적절한 반환값 타입을 정의 하세요
- getComments 함수는 여러개의 Comment 타입 객체를 담는 배열을 비동기적으로 반환하는 함수입니다.
- 반환값 타입이 Promise<unknown>이 아닌 좀 더 정확한 타입으로 추론되게 하여도 정답으로 인정합니다.
*/

/* [Quiz] 아래의 코드를 수정하세요 */
interface Comment {
  id: number;
  author: string;
  content: string;
}

function getComments(): Promise<Comment[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          author: "이정환 & 김효빈",
          content: "한입 FE 챌린지! 완강까지 화이팅!",
        },
      ]);
    }, 2000);
  });
}

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect, NotEqual } from "@type-challenges/utils";

type TestCases = [
  Expect<NotEqual<ReturnType<typeof getComments>, Promise<any>>>,
  Expect<NotEqual<ReturnType<typeof getComments>, Promise<unknown>>>,
  Expect<NotEqual<ReturnType<typeof getComments>, Promise<never>>>,
  Expect<Equal<ReturnType<typeof getComments>, Promise<Comment[]>>>
];
