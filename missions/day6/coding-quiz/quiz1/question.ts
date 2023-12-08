/*
[ 문제 소개 ]
타입 단언을 이용해 person 변수에 빈 객체를 할당하세요
(힌트. 초과 프로퍼티 검사 방지를 위한 타입 단언)
*/

type Person = {
  name: string;
  age: number;
};

let person: Person = {};
