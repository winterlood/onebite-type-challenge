/*
[ 문제 소개 ]
다음 요구사항을 만족하는 Animal 타입을 완성하세요
- Animal 타입은 Dog 타입일 수도 Cat 타입일 수도 있습니다.
*/

/* [Quiz] 아래의 코드를 완성해 오류를 제거하세요 */
type Dog = {
  name: string;
  color: string;
};

type Cat = {
  name: string;
  age: number;
};

type Animal = never;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
const animals: Animal[] = [
  {
    name: "토뭉이",
    color: "brown",
  },
  {
    name: "까망이",
    age: 4,
  },
  {
    name: "포테토뭉",
    color: "brown",
  },
  {
    name: "쨔미",
    age: 10,
  },
];
