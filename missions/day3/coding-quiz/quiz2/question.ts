/*
[ 문제 소개 ]
다음 요구사항을 만족하는 Course 타입을 정의하세요 
(이 타입은 마치 인프런에서 활용할 것 같군요?)

- Any 타입은 사용할 수 없습니다.
- Course 타입은 온라인 강의 정보를 포함하는 객체 타입을 정의합니다.
- 문자열을 저장하는 name 프로퍼티를 가져야 합니다.
- 숫자를 저장하는 price 프로퍼티를 가져야 합니다.
- 숫자를 저장하는 student_cnt 프로퍼티를 가져야 합니다.
- 문자열을 저장하는 author 프로퍼티를 가져야 합니다.
- 문자열 배열을 저장하는 related_courses 프로퍼티를 가져야 합니다.
*/

/* [Quiz] 아래의 코드를 완성해 오류를 제거하세요 */
type Course = never;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect, NotAny } from "@type-challenges/utils";

const course: Course = {
  name: "한 입 크기로 잘라먹는 타입스크립트",
  price: 55000,
  student_cnt: 1089,
  author: "이정환 | Winterlood",
  related_courses: [
    "한 입 크기로 잘라먹는 리액트",
    "웹 프론트엔드를 위한 자바스크립트 첫 걸음",
  ],
};

type TestCases = [
  Expect<NotAny<Course>>,
  Expect<
    Equal<keyof Course, "name" | "price" | "student_cnt" | "author" | "related_courses">
  >,
  Expect<Equal<Course["name"], string>>,
  Expect<Equal<Course["price"], number>>,
  Expect<Equal<Course["student_cnt"], number>>,
  Expect<Equal<Course["author"], string>>,
  Expect<Equal<Course["related_courses"], string[]>>
];
