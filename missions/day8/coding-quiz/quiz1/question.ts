/*
[ 문제 소개 ]
다음 요구사항을 만족하는 구현 시그니쳐를 완성하세요(매개변수 타입만 정의하면 됩니다)
- 이미 작성되어 있는 3개의 오버로드 시그니쳐를 모두 만족해야 합니다.
- a, b, c의 값을 모두 더한 값을 반환합니다.
- 만약 매개변수의 값이 undefined일 경우 모두 0으로 취급합니다.
  - a가 없을 경우 : 0
  - b가 없을 경우 : 0
  - c가 없을 경우 : 0
*/

function add(): number;
function add(a: number): number;
function add(a: number, b: number, c: number): number;

/* [Quiz] 구현 시그니쳐를 완성하세요 */
function add(a, b, c) {
  return (a ?? 0) + (b ?? 0) + (c ?? 0);
}
