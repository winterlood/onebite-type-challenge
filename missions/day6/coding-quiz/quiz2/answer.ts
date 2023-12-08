/*
[ 문제 소개 ]
타입 단언을 이용해 아래 코드의 오류를 해결하세요
(힌트. const 단언)
*/

let value = 10 as const;
giveMe10(value);

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
function giveMe10(value: 10) {
  return value;
}
