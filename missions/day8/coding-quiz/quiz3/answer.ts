/*
[ 문제 소개 ]
다음 조건을 만족하는 3가지 인터페이스를 추가로 구현하세요
- 모든 인터페이스는 Person 인터페이스를 확장합니다(extends).
  1. Student 인터페이스는 grade 프로퍼티를 갖습니다. 
    - grade 프로퍼티에는 "A", "B", "C"만 저장할 수 있습니다.
  2. Developer 인터페이스는 skills 프로퍼티를 갖습니다.
    - skills 프로퍼티에는 문자열 배열을 저장할 수 있습니다.
  3. Boss 인터페이스는 company 프로퍼티를 갖습니다.
    - company 프로퍼티에는 문자열을 저장할 수 있습니다.
*/

/* [Quiz] 사용자 정의 타입가드를 완성하세요(타입 수정 X) */
interface Person {
  name: string;
}

interface Student extends Person {
  grade: "A" | "B" | "C";
}

interface Developer extends Person {
  skills: string[];
}

interface Boss extends Person {
  company: string;
}

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect, NotAny } from "@type-challenges/utils";

const student: Student = {
  name: "이정환",
  grade: "A",
};
const developer: Developer = {
  name: "이정환",
  skills: ["React", "TypeScript"],
};
const boss: Boss = {
  name: "이정환",
  company: "한입 스튜디오",
};

type TestCases = [
  Expect<Equal<Student["grade"], "A" | "B" | "C">>,
  Expect<Equal<Developer["skills"], string[]>>,
  Expect<Equal<Boss["company"], string>>
];
