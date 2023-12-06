/*
[ 문제 소개 ]
다음 요구사항을 만족하는 Animal, DogCat(개냥이) 타입을 완성하세요
- Animal 타입은 Dog 타입일 수도 Cat 타입일 수도 있습니다.
- DogCat 타입은 Dog이자 Cat입니다.
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

type Animal = Dog | Cat;
type DogCat = Dog & Cat;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
const animals: Animal[] = [
  {
    name: "토뭉이",
    color: "brown",
  },
  {
    name: "쨔미",
    age: 10,
  },
];

const dogCat: DogCat = {
  name: "개냥이",
  age: 2,
  color: "치즈색",
};
