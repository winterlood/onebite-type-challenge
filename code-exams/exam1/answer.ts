/**
 * [ 퀴즈 ]
 * 여기에 코드를 작성해주세요
 * 아래 정답 체크 영역의 오류가 사라져야 합니다!
 */

type Course = {
  name: string;
  price: number;
  student_cnt: number;
  author: string;
  related_courses: string[];
};

/**
 * [ 정답 체크 ]
 * 여기부터는 정답을 체크하기 위한 용도로 직접 수정하실 필요 없습니다.
 * 아래의 코드에 오류가 사라지면 정답, 오류가 있으면 오답입니다!
 */

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
