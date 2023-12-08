/*
[ 문제 소개 ]
다음 요구사항을 만족하도록 introduce 함수의 매개변수의 타입을 정의하세요
- name 매개변수는 String 타입이며, "이정환" 이라는 기본값이 설정됩니다.
- tall 매개변수는 Number 타입이며, 선택적 매개변수 입니다.
*/

/* [Quiz] 아래의 코드를 완성해 오류를 제거하세요 */
function introduce(name = "이정환", tall?: number) {
  if (!tall) {
    console.log(`안녕하세요 ${name}입니다!`);
  } else {
    console.log(`안녕하세요 ${name}입니다. 키는 ${tall}입니다`);
  }
}

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
introduce();
introduce("이정환");
introduce("이정환", 175);
